import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Recruit/Recruit.module.scss'

function LpRecruit() {
    return (
        <div className={styles["recruitment"]} id="recruitment">
            <div className={section["section__inner"]}>
                <h2 className={section["section__title"]} data-en="recruitment">
                    <span className={section["aic"]}><img src="/lp/images/svg/heart_icon.svg" alt="" />採用面でも有効です</span>
                </h2>
                <div className={section["section__text"]}>
                    <p>repeatsは採用したい事業者と就職したい個人とを繋げる場としてご活用いただけます。</p>
                </div>
                <div className={styles["recruitment__img"]}>
                    <img src="/lp/images/svg/reacruit_body.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LpRecruit