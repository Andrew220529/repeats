import fsPromises from 'fs/promises';
import path from 'path';

async function get_proposal(username, id = false) {
    const proposalFilePath = path.join(process.cwd(), `src/proposal/${username}//`, 'video_info_publish.json');
    const proposalData = await fsPromises.readFile(proposalFilePath)
    const proposalObjectData = JSON.parse(proposalData)

    return proposalObjectData
}

export default get_proposal