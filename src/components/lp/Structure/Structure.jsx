import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Structure/Structure.module.scss'

function LpStructure() {
    return (
        <div className={styles["structure"]} id="structure">
            <div className={section["section__inner"]}>
                <h2 className={section["section__title"]} data-en="structure">
                    <span>フォロワーを<span className={section["fun"]}><img src="/lp/images/svg/section_title_heart.svg" alt="" />ファン化</span>させる仕組み</span>
                </h2>
                <div className={styles["structure__mainText"]}>
                    <p>AIを活用しフォロワーのファン度合いを自動で3層に分類。<br /><span>わずらわしい作業なく、</span><span>すべてのフォロワーに</span><br />より効果的なアプローチができます！</p>
                </div>
                <div className={styles["structure__body"]}>
                    <picture>
                        <source srcSet="/lp/images/svg/structure_sp.svg" media="(max-width: 768px)" />
                        <img src="/lp/images/svg/structure_body.svg" alt="" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default LpStructure