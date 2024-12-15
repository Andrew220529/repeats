const ig = {
    id: '17841408255214525',
    access_token: 'EAAL6ZAgqUPhkBO0BBAzXUFhGojl3SCsIPv4Vmkv59ZCU1C3B1M1rZAFugbmSiFJyI8gAZAg8HMZCARtx1Xc1LbMLJJGlk7htKgJxNx0Kp2tYZChg8MlCKZCYDtteWt80EajQBmXZCeLhWlpi7MPVGdOxXMOzhSu9r8vo6upf44GQeMwVmiFt6j5xLtmr'
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

