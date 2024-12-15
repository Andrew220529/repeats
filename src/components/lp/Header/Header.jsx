import React, { useEffect, useState } from 'react'
import styles from '@/components/lp/Header/Header.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';

function LpHeader() {
    const [isMenuActive, setMenuActive] = useState(false)
    const HandleClickTrigger = () => {
        setMenuActive(!isMenuActive)
    }
    const HandleSetFalse = () => {
        setMenuActive(false)
    }

    return (
        <>
            <header className={styles["header"]}>
                <div className={styles["header__inner"]}>
                    <h1 className={styles["header__logo"]}>
                        <Link href="#">
                            <img src="/lp/images/svg/logo.svg" alt="repeats" />
                        </Link>
                    </h1>
                    <nav className={styles["header__nav"]}>
                        <ul>
                            <li><Link href="/">repeats</Link></li>
                            <li><Link href="#repeats">機能一覧</Link></li>
                            <li><Link href="#structure">ファン化の仕組み</Link></li>
                            <li><Link href="#recruitment">採用面のメリット</Link></li>
                            <li><Link href="#flow">導入の流れ</Link></li>
                        </ul>
                    </nav>
                    <div className={styles["header__cta"]}>
                        <Link href="#contact" className={styles["btn"]}>
                            <span>お問い合わせ</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                                <path
                                    d="M12.6667 11.5C12.6667 10.917 13.247 10.0464 13.8344 9.31571C14.5896 8.37286 15.4921 7.55021 16.5268 6.92243C17.3027 6.45179 18.2432 6 19 6M19 6C18.2432 6 17.3019 5.54821 16.5268 5.07757C15.4921 4.449 14.5896 3.62636 13.8344 2.68507C13.247 1.95357 12.6667 1.08143 12.6667 0.5M19 6L-4.76837e-07 6"
                                    stroke="white" strokeWidth="2" />
                            </svg>
                        </Link>
                    </div>
                    <div className={styles["header__icon"]} id="header__icon" onClick={HandleClickTrigger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <div className={`${styles["sub__nav"]} ${isMenuActive && styles["active"]}`} id="sub__nav">
                <ul>
                    <li><Link onClick={HandleSetFalse} href="/">repeats</Link></li>
                    <li><Link onClick={HandleSetFalse} href="#repeats">機能一覧</Link></li>
                    <li><Link onClick={HandleSetFalse} href="#structure">ファン化の仕組み</Link></li>
                    <li><Link onClick={HandleSetFalse} href="#recruitment">採用面のメリット</Link></li>
                    <li><Link onClick={HandleSetFalse} href="#flow">導入の流れ</Link></li>
                </ul>
                <div className={styles["header__cta"]}>
                    <Link onClick={HandleSetFalse} href="#contact" className={styles["btn"]}>
                        <span>お問い合わせ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                            <path
                                d="M12.6667 11.5C12.6667 10.917 13.247 10.0464 13.8344 9.31571C14.5896 8.37286 15.4921 7.55021 16.5268 6.92243C17.3027 6.45179 18.2432 6 19 6M19 6C18.2432 6 17.3019 5.54821 16.5268 5.07757C15.4921 4.449 14.5896 3.62636 13.8344 2.68507C13.247 1.95357 12.6667 1.08143 12.6667 0.5M19 6L-4.76837e-07 6"
                                stroke="white" strokeWidth="2" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className={`${styles["overlay"]} ${isMenuActive && styles["active"]}`} id="overlay" onClick={HandleSetFalse}></div>
        </>
    )
}

export default LpHeader