import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Flow/Flow.module.scss'

function LpFlow() {
    return (
        <div className={styles["flow"]} id="flow">
            <div className={section["section__inner"]}>
                <h2 className={section["section__title"]} data-en="flow">
                    <span>導入までの流れ</span>
                </h2>
                <div className={styles["flow__inner"]}>
                    <div className={styles["flow__text"]}>
                        <img src="/lp/images/svg/flow_bubble.svg" alt="導入までかんたん3ステップ" />
                    </div>
                    <div className={styles["flow__body"]}>
                        <div className={styles["flow__item"]}>
                            <div className={styles["flow__itemMain"]}>
                                <p className={styles["flow__itemImg"]}><img src="/lp/images/svg/flow01.svg" alt="" /></p>
                                <h3 className={styles["flow__itemTitle"]}>お問い合わせ</h3>
                            </div>
                            <div className={styles["flow__itemText"]}>
                                <p>フォームより<br />お問い合わせください。</p>
                            </div>
                        </div>
                        <div className={styles["flow__item"]}>
                            <div className={styles["flow__itemMain"]}>
                                <p className={styles["flow__itemImg"]}><img src="/lp/images/svg/flow02.svg" alt="" /></p>
                                <h3 className={styles["flow__itemTitle"]}>ヒアリング</h3>
                            </div>
                            <div className={styles["flow__itemText"]}>
                                <p>機能や使い方について<br />ご説明いたします。</p>
                            </div>
                        </div>
                        <div className={styles["flow__item"]}>
                            <div className={styles["flow__itemMain"]}>
                                <p className={styles["flow__itemImg"]}><img src="/lp/images/svg/flow03.svg" alt="" /></p>
                                <h3 className={styles["flow__itemTitle"]}>ご利用開始</h3>
                            </div>
                            <div className={styles["flow__itemText"]}>
                                <p>1ヶ月間無料で<br />ご利用いただけます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpFlow