import fs from 'fs';
import path from 'path';

const getAllUserDirectories = async () => {
    try {
        const directories = await fs.promises.readdir(
            'src/data',
            { withFileTypes: true }
        )

        return directories
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    } catch (error) {
        console.error('Error getting user directories:', error);
        return [];
    }
}

const getFollowerData = async (username) => {
    try {
        const filepath = path.join(
            process.cwd(),
            `src/data/${username}`,
            'follower.json'
        );
        const data = await fs.promises.readFile(filepath, 'utf8')
        return (JSON.parse(data))
    } catch (error) {
        console.error(`Error getting follower data for ${username}:`, error);
        return null;
    }
}

module.exports = {
    getAllUserDirectories,
    getFollowerData,
}