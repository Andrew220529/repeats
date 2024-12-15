import React from 'react'
import styles from '@/components/lp/Fv/Fv.module.scss'

function LpFv() {
    return (
        <div className={styles["fv"]}>
            <div className={styles["fv__inner"]}>
                <div className={styles["fv__body"]}>
                    <p className={styles["fv__devImg"]}><img src="/lp/images/svg/devImg.svg" alt="" /></p>
                    <p className={styles["fv__subText"]}><img src="/lp/images/fv_subText.png" alt="フォロワーを自動でファンに" /></p>
                    <h1 className={styles["fv__title"]}><img src="/lp/images/fv_title.png" alt="repeats sns顧客管理ツール" /></h1>
                    <a href="#contact" className={styles["fv__btn"]}>
                        <span>モニターの応募はこちら</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                            <path
                                d="M12.6667 11.5C12.6667 10.917 13.247 10.0464 13.8344 9.31571C14.5896 8.37286 15.4921 7.55021 16.5268 6.92243C17.3027 6.45179 18.2432 6 19 6M19 6C18.2432 6 17.3019 5.54821 16.5268 5.07757C15.4921 4.449 14.5896 3.62636 13.8344 2.68507C13.247 1.95357 12.6667 1.08143 12.6667 0.5M19 6L-4.76837e-07 6"
                                stroke="white" strokeWidth="2" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className={styles["fv__img"]}><img src="/lp/images/fv_img.png" alt="sns顧客管理ツール" /></div>
        </div>
    )
}

export default LpFv