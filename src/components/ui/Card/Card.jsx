import React from 'react'
import styles from './Card.module.scss'
import Link from 'next/link'

function Card({data}) {
    return (
        <Link href={`https://www.instagram.com/${data.username}/`} className={styles.card} target='_blank'>
            {/* <p className={styles.cardImg}>
                <img src={data.profileImgUrl} alt={data.username} />
            </p> */}
            <div className={styles.cardBody}>
                <p className={styles.name}>{data.name}</p>
                <p className={styles.username}>{data.username}</p>
                <p className={styles.tag}>
                    <span>{data.tag.gender}</span>
                    <span>{data.tag.age}</span>
                </p>
                {data.hobbies && <p className={styles.hobby}>趣味：{data.hobbies}</p>}
                {data.interests && <p className={styles.intarest}>関心：{data.interests}</p>}
            </div>
            <div className={styles.cardScore}>
                <p className={styles.cardScoreNum}>{data.score}</p>
                <p className={styles.cardScoreOtherNum}>
                    <span className={styles.heart}><img src="/repeats/images/heart-icon.svg" alt="" />{data.heart}</span>
                </p>
            </div>
        </Link>
    )
}

export default Card