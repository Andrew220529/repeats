import axios from "axios"

const accessToken = process.env.NEXT_PUBLIC_ACCESSTOKEN
const businessId = process.env.NEXT_PUBLIC_BUSINESS_ID
const username = "iriser_odaka";

export const getProfile = async (name) => {
    const json = await fetch(`https://graph.facebook.com/v15.0/${businessId}?access_token=${accessToken}&fields=business_discovery.username(${name}){id,name,username,followers_count,profile_picture_url}`)
        .then((res) => res.json())
        .catch((error) => console.error(error))

    const profile = json.business_discovery

    return profile
}

export const getPosts = async (name, limit = 50) => {
    const json = await fetch(`https://graph.facebook.com/v15.0/${businessId}?access_token=${accessToken}&fields=business_discovery.username(${name}){media.limit(${limit}){id,username,caption,like_count,media_url,media_product_type,thumbnail_url,permalink , timestamp}}`)
        .then((res) => res.json())
        .catch((error) => console.error(error))

    const posts = json.business_discovery.media.data

    return posts
}


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


