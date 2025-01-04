const ig = {
    id: process.env.NEXT_PUBLIC_BUSINESS_ID,
    access_token: process.env.NEXT_PUBLIC_ACCESSTOKEN
}

export const getProfile = async (name) => {
    const json = await fetch(`https://graph.facebook.com/v15.0/${ig.id}?access_token=${ig.access_token}&fields=business_discovery.username(${name}){id,name,username,followers_count,profile_picture_url}`)
        .then((res) => res.json())
        .catch((error) => console.error(error))

    const profile = json.business_discovery

    return profile
}

export const getPosts = async (name, limit = 50) => {
    const json = await fetch(`https://graph.facebook.com/v15.0/${ig.id}?access_token=${ig.access_token}&fields=business_discovery.username(${name}){media.limit(${limit}){id,username,caption,like_count,media_url,media_product_type,thumbnail_url,permalink , timestamp}}`)
        .then((res) => res.json())
        .catch((error) => console.error(error))

    const posts = json.business_discovery.media.data

    return posts
}

