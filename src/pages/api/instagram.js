import axios from "axios"

const accessToken = "EAAL6ZAgqUPhkBO0BBAzXUFhGojl3SCsIPv4Vmkv59ZCU1C3B1M1rZAFugbmSiFJyI8gAZAg8HMZCARtx1Xc1LbMLJJGlk7htKgJxNx0Kp2tYZChg8MlCKZCYDtteWt80EajQBmXZCeLhWlpi7MPVGdOxXMOzhSu9r8vo6upf44GQeMwVmiFt6j5xLtmr";
const businessId = "17841408255214525";
const username = "iriser_odaka";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { after } = req.query;

    // let url = `https://graph.facebook.com/v16.0/${businessId}/media?access_token=${accessToken}&fields=caption%2Clike_count%2Cmedia_url%2Cmedia_type%2Cpermalink%2Ctimestamp%2Cusername${after}`;
    // let url = `https://graph.facebook.com/v18.0/${businessId}/media?access_token=${accessToken}&business_discovery.username(${username})&fields=caption%2Clike_count%2Cmedia_url%2Cmedia_type%2Cpermalink%2Ctimestamp%2Cusername${after}`;
    let url = `https://graph.facebook.com/v18.0/${businessId}/?access_token=${accessToken}&business_discovery.username(${username})&fields=business_discovery.username(${username}){media.limit(10){id, caption, like_count, media_url, media_type}}`;

    const response = await axios.get(url)
    
    return res.status(200).json(response.data);
}


