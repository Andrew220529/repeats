import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Benefit/Benefit.module.scss'

function LpBenefit() {
    return (
        <div className={styles["benefit"]} id="benefit">
            <div className={section["section__inner"]}>
                <h2 className={section["section__title"]} data-en="benefit">
                    <span>SNSを簡単に有効活用</span>
                </h2>
                <div className={styles["point__list"]}>
                    <div className={styles["point__item"]}>
                        <div className={styles["point__itemImg"]}>
                            <img src="/lp/images/benefit_01.png" alt="ツール" />
                        </div>
                        <h3 className={styles["point__itemTitle"]}>専門家不要で簡単に<br />ツールが使いこなせる</h3>
                    </div>
                    <div className={styles["point__item"]}>
                        <div className={styles["point__itemImg"]}>
                            <img src="/lp/images/benefit_02.png" alt="反応率UP" />
                        </div>
                        <h3 className={styles["point__itemTitle"]}>フォロワーをファン化<br />させて反応率UP</h3>
                    </div>
                    <div className={styles["point__item"]}>
                        <div className={styles["point__itemImg"]}>
                            <img src="/lp/images/benefit_03.png" alt="自動化" />
                        </div>
                        <h3 className={styles["point__itemTitle"]}>顧客管理の自動化<br />により業務効率UP </h3>
                    </div>
                </div>
                <h2 className={styles["benefit__title"]} id="repeats">
                    <img src="/lp/images/svg/about__title.svg" alt="repeats" />とは
                </h2>
                <div className={styles["benefit__text"]}>
                    <p>LINE、Instagramのフォロワーを統合した顧客管理アプリです。生成AIを活用することで専門家不要でフォロワーを管理分析し、最適なアクションを自動で行うことでフォロワーをファン化させることができるサービスです。
                    </p>
                </div>
                <div className={styles["benefit__col"]}>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item01.svg" alt="フォロワーの分析" />
                            <span>フォロワーの分析</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>年齢・利用履歴・反応などフォロワーを分析します。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item02.svg" alt="自動ラベリング" />
                            <span>自動ラベリング</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>投稿内容とAIによる連携でタグ内容を生成します。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item03.svg" alt="ファン度の可視化" />
                            <span>ファン度の可視化</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>ファン度を分類し、一目でファン度が分かります。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item04.svg" alt="アンケート" />
                            <span>アンケート</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>顧客とのコミュニケーションを自動で増やします。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item05.svg" alt="DMの自動返信" />
                            <span>DMの自動返信</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>個別に対応する作業が省けるので業務効率UPします。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item06.svg" alt="メッセージ配信" />
                            <span>メッセージ配信</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>ファン度に合わせて最適なメッセージを配信します。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item07.svg" alt="ステップ配信" />
                            <span>ステップ配信</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>ステップ配信を自動で行い顧客の関心を引きます。</p>
                        </div>
                    </div>
                    <div className={styles["benefit__item"]}>
                        <h3 className={styles["benefit__itemTitle"]}>
                            <img src="/lp/images/svg/benefit_item08.svg" alt="限定した情報発信" />
                            <span>限定した情報発信</span>
                        </h3>
                        <div className={styles["benefit__itemText"]}>
                            <p>顧客の関心に合わせた情報を発信できます。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LpBenefit