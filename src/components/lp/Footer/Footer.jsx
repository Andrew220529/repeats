import React from 'react'
import cta from '@/components/lp/Cta/Cta.module.scss'
import styles from '@/components/lp/Footer/Footer.module.scss'

function LpFooter() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__inner"]}>
                <div className={styles["footer__body"]}>
                    <p className={styles["footer__subText"]}>フォロワーを自動でファン化させる</p>
                    <p className={styles["footer__logo"]}><img src="/lp/images/svg/footer__logo.svg" alt="" /></p>
                    <p className={styles["footer__copy"]}>© 2024 repeats.</p>
                </div>
                <a href="#contact" className={cta["cta__btn"]}>
                    <span>モニター応募はこちら</span>
                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 14C16 13.258 16.733 12.15 17.475 11.22C18.429 10.02 19.569 8.973 20.876 8.174C21.856 7.575 23.044 7 24 7M24 7C23.044 7 21.855 6.425 20.876 5.826C19.569 5.026 18.429 3.979 17.475 2.781C16.733 1.85 16 0.74 16 0M24 7L0 7"
                            stroke="#F6771B" strokeWidth="3" />
                    </svg>
                </a>
                <div className={cta["cta__img"]}>
                    <img src="/lp/images/cta_person.png" alt="" width="137" height="266" />
                </div>
            </div>
        </footer>
    )
}

export default LpFooter