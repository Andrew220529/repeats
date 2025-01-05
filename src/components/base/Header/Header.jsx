import React, { useState } from 'react'
import styles from './Header.module.scss'
import getConfig from "next/config";
import Link from 'next/link';
import { useRouter } from 'next/router';


const { publicRuntimeConfig } = getConfig();

function Header({ path, searchTerm, onSearchChange }) {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    // const pathname = props.path
    // pathをpropsから取得
    const pathname = path

    const router = useRouter();

    const [menuActive, setMenuActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)

    const HandleMenuClick = () => {
        setMenuActive(!menuActive)
    }

    const HandleDeactiveMenu = () => {
        setMenuActive(false)
    }

    const HandleSearchActive = () => {
        setSearchActive(!searchActive)
    }

    const notSearchUrl = useMemo(() => {
        return router.asPath.includes("post_ranking") ||
            router.asPath.includes("common_tag") ||
            router.asPath.includes("recommend")
    }, [router.asPath])

    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={HandleMenuClick}>
                <img className={styles.menuIcon} src={`${basePath}/images/menu-icon.svg`} alt="" />
            </div>
            <h1 className={styles.headerLogo}>REPEATS</h1>
            <div className={styles.search}>
                {!notSearchUrl &&
                    <label htmlFor="">
                        <button onClick={HandleSearchActive}
                            style={{ background: "#000" }}
                        ><img src={`${basePath}/images/search-icon.svg`} alt="" /></button>
                        {searchActive &&
                            <input
                                className={styles.search_input}
                                type="text"
                                placeholder="検索..."
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        }
                    </label>
                }
            </div>
            <div className={`${styles.subMenu} ${menuActive && styles.active}`}>
                <ul>
                    {pathname && pathname != 'dailykonan' && <li><Link href={`/${pathname}/common_tag`} onClick={HandleDeactiveMenu}>よく使われるタグ</Link></li>}
                    {pathname && <li><Link href={`/${pathname}/post_ranking`} onClick={HandleDeactiveMenu}>投稿ランキング</Link></li>}
                    {pathname == "odakaru_minamisoma" &&
                        <li><Link href={`/${pathname}/recommend`} onClick={HandleDeactiveMenu}>おすすめ投稿</Link></li>}
                    {pathname == "bihokupark" &&
                        <li><Link href={`/${pathname}/recommend`} onClick={HandleDeactiveMenu}>おすすめ投稿</Link></li>}
                    {pathname == "odakaru_minamisoma" &&
                        <li><Link href={`/${pathname}/report`} onClick={HandleDeactiveMenu}>レポート</Link></li>}
                    {pathname == "dailykonan" &&
                        <li><Link href={`/${pathname}/report`} onClick={HandleDeactiveMenu}>レポート</Link></li>}
                </ul>
            </div>
            <div className={`${styles.overlay} ${menuActive && styles.active}`}
                onClick={HandleDeactiveMenu}
            ></div>
        </header>
    )
}

export default Header