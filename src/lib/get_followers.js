import fs from 'fs';

function get_followers() {
    const followers = fs.readdirSync('src/data/', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  return followers
}

export default get_followers