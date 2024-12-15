import React from 'react'
import styles from '@/components/lp/Cta/Cta.module.scss'

function LpCta() {
    return (
        <div className={styles["cta"]}>
            <div className={styles["cta__inner"]}>
                <div className={styles["cta__body"]}>
                    <div className={styles["cta__text"]}>フォロワーを自動でファン化させる</div>
                    <div className={styles["cta__logo"]}>
                        <img src="/lp/images/svg/cta_text.svg" alt="sns顧客管理ツール repeats" />
                    </div>
                </div>
                <a href="#" className={styles["cta__btn"]}>
                    <span>モニター応募はこちら</span>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.74 16 0M24 7L0 7"
                            stroke="#F6771B" strokeWidth="3" />
                    </svg>
                </a>
                <div className={styles["cta__img"]}>
                    <img src="/lp/images/cta_person.png" alt="" width="111" height="166" />
                </div>
            </div>
        </div>
    )
}

export default LpCta