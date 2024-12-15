import Link from 'next/link'
import React from 'react'
import style from './Footer.module.scss'
import getConfig from "next/config";
// import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();

function Footer(props) {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    const pathname = props.path

    return (
        <footer className={style.footer}>
            <div className={style.footerNav}>
                <ul>
                    {pathname === "kunishima" &&
                        <>
                            <li><Link href={`/${pathname}/normal`}>通常<img src={`${basePath}/images/Icons-icon-shopping-bag.svg`} alt="" /></Link></li>
                            <li><Link href={`/${pathname}`}>ビジネス<img src={`${basePath}/images/Icons-icon-home.svg`} alt="" /></Link></li>
                        </>}

                    {pathname !== "kunishima" &&
                        <>
                            <li><Link href={`/${pathname}/bussiness`}>ビジネス<img src={`${basePath}/images/Icons-icon-bookmark.svg`} alt="" /></Link></li>
                            <li><Link href={`/${pathname}/normal`}>通常<img src={`${basePath}/images/Icons-icon-shopping-bag.svg`} alt="" /></Link></li>
                            <li><Link href={`/${pathname}`}>プライベート<img src={`${basePath}/images/Icons-icon-home.svg`} alt="" /></Link></li>
                        </>
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer