import fsPromises from 'fs/promises';
import path from 'path';

async function get_posts(name) {
    const postsFilePath = path.join(process.cwd(), `src/data/`, `${name}`, 'post.json');
    const postsData = await fsPromises.readFile(postsFilePath)
    const postsObjectData = JSON.parse(postsData)

    return postsObjectData
}

export default get_posts