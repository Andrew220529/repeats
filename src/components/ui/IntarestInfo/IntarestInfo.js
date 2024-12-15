import React from 'react'
import styles from './IntarestInfo.module.scss'

function IntarestInfo({ data }) {
    return (
        <div className={styles.intarestInfo}>
            <p className={styles.intarestInfoImg}>
                <img src={data.imgUrl} alt={data.title} />
            </p>
            <div className={styles.intarestInfoBody}>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.content}>{data.content}</div>
            </div>
        </div>
    )
}

export default IntarestInfo