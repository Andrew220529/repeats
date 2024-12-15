import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Features/Features.module.scss'

function LpFeatures() {
    return (
        <div className={styles["features"]}>
            <div className={`${section["section__inner"]} ${styles["features__inner"]}`}>
                <h2 className={section["section__title"]} data-en="features">
                    <span>そんな方はrepeatsがおすすめ</span>
                </h2>
                <div className={styles["features__body"]}>
                    <div className={styles["features__item"]}>
                        <div className={styles["features__itemImg"]}><img src="/lp/images/features01.png" alt="モニター募集中により無料で利用できる" width="174" height="150" /></div>
                        <div className={styles["features__itemPoint"]}>point</div>
                        <h3 className={styles["features__itemTitele"]}>モニター募集中により無料で利用できる</h3>
                        <div className={styles["features__itemText"]}>
                            現在利用者様募集中のため、<span>無料でご利用いただけます。</span>顧客自動管理ツールを活用・導入してみたいが、費用がかかるので踏み出せない・本当に活用できるか試してみたいというお客様は是非この機会にご利用ください。
                        </div>
                    </div>
                    <div className={styles["features__item"]}>
                        <div className={styles["features__itemImg"]}><img src="/lp/images/features02.png" alt="SNSのフォロワー対応の時間削減、コストも削減" width="182" height="150" />
                        </div>
                        <div className={styles["features__itemPoint"]}>point</div>
                        <h3 className={styles["features__itemTitele"]}>SNSのフォロワー対応の時間削減、コストも削減</h3>
                        <div className={styles["features__itemText"]}>
                            AIによる<span>分析・メッセージの自動化</span>により、効率よくピンポイントに顧客のニーズに沿った最適なアプローチをすることができます。個別対応による手間やコストを大幅に省くことができます。
                        </div>
                    </div>
                    <div className={styles["features__item"]}>
                        <div className={styles["features__itemImg"]}><img src="/lp/images/features03.png" alt="マーケティングの知識がなくても簡単活用" width="152" height="150" /></div>
                        <div className={styles["features__itemPoint"]}>point</div>
                        <h3 className={styles["features__itemTitele"]}>マーケティングの知識がなくても簡単活用</h3>
                        <div className={styles["features__itemText"]}><span>AIが顧客を分析・管理</span>するのでマーケティングにおいて必須である顧客分析・管理をする必要がありません。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpFeatures