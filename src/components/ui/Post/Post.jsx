import React from 'react'
import styles from './Post.module.scss'
import Link from 'next/link'

function Post({ data }) {

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <Link href={data.permalink} className={styles.post} target='_blank'>
            <p className={styles.postImg}>
                {data.thumbnail_url ? <img src={data.thumbnail_url} alt={data.id} /> : <img src={data.media_url} alt={data.id} />}
            </p>
            <div className={styles.postBody}>
                <p className={styles.postCaption}>{data.caption}</p>
                <p className={styles.postLikeCount}><img src="/repeats/images/heart-icon.svg" alt="" />{data.like_count}</p>
                <p className={styles.postDate}>{formatTimestamp(data.timestamp)}</p>
            </div>
        </Link>
    )
}

export default Post