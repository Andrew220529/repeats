import React, { useEffect, useState } from 'react';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { useRouter } from 'next/router';
import get_followers from '@/lib/get_followers';
import { getProfile } from '@/lib/igAPI';


const CommonTag = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username
    const { profile } = props
    
    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Profile name={pathname} data={profile} />
                <h3 className="sectionTitle mt50">よく使われるタグ</h3>
                <div className="cardWrap">
                    {pathname === "maaruigoen" &&
                        <>
                            <p>子育て : 84</p>
                            <p>　類似タグ : 育児、子供の成長、育児支援、子どもとのコミュニケーション</p>
                            <p>料理 : 36</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>旅行 : 26</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>副業 : 22</p>
                            <p>　類似タグ : 副業アイディア、在宅副業、副業収入、副業スキル</p>
                            <p>投資 : 21</p>
                            <p>　類似タグ : 投資戦略、金融市場、株式投資、不動産投資</p>
                        </>
                    }
                    {pathname === "miyoshidmo" &&
                        <>
                            <p>旅行 : 37</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>料理 : 33</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>グルメ : 28</p>
                            <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                            <p>写真撮影 : 25</p>
                            <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                            <p>カフェ巡り : 17</p>
                            <p>類似タグ : カフェ巡りスポット、カフェメニュー、カフェ雰囲気、カフェライフ</p>
                        </>
                    }
                    {pathname === "odakaru_minamisoma" &&
                        <>
                            <p>写真撮影 : 45</p>
                            <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                            <p>旅行 : 40</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>料理 : 36</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>イベント参加 : 22</p>
                            <p>類似タグ : イベント参加体験、イベント情報、イベントプランニング、イベントコーディネート</p>
                            <p>ファッション : 17</p>
                            <p>　類似タグ : スタイル、衣服、ブランド、イベント</p>
                        </>
                    }
                    {pathname === "yuki_experience" &&
                        <>
                            <p>旅行 : 14</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>サウナ : 13</p>
                            <p>　類似タグ : サウナ健康法、サウナ体験、サウナ効果、サウナ入浴法</p>
                            <p>料理 : 7</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>キャンプ : 7</p>
                            <p>　類似タグ : キャンプ場、アウトドア活動、キャンプ装備、グランピング</p>
                            <p>釣り : 5</p>
                            <p>　類似タグ : 釣り場、釣り具、釣りテクニック、釣り大会</p>
                        </>
                    }
                    {pathname === "fuudo_etajima" &&
                        <>
                            <p>自然 : 14</p>
                            <p>　類似タグ : 自然風景、生態系、自然保護、アウトドア活動</p>
                            <p>副業 : 13</p>
                            <p>　類似タグ : 副業アイディア、在宅副業、副業収入、副業スキル</p>
                            <p>投資 : 7</p>
                            <p>　類似タグ : 投資戦略、金融市場、株式投資、不動産投資</p>
                            <p>旅行 : 7</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>グルメ : 5</p>
                            <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                        </>
                    }
                    {pathname === "sanken_hiroshima" &&
                        <>
                            <p>写真撮影 : 23</p>
                            <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                            <p>投資 : 19</p>
                            <p>　類似タグ : 投資戦略、金融市場、株式投資、不動産投資</p>
                            <p>料理 : 19</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>旅行 : 15</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>釣り : 14</p>
                            <p>釣り場、釣り具、釣りテクニック、釣り大会</p>
                        </>
                    }
                    {pathname === "cottage_setoro" &&
                        <>
                            <p>料理 : 5</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>旅行 : 4</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>サウナ : 4</p>
                            <p>　類似タグ : サウナ健康法、サウナ体験、サウナ効果、サウナ入浴法</p>
                            <p>温泉 : 3</p>
                            <p>類似タグ : 温泉地、温泉旅館、温泉効能、温泉入浴法</p>
                            <p>占い : 3</p>
                            <p>類似タグ : 占星術、占い師、タロットカード、九星気学</p>
                        </>
                    }
                    {pathname === "shobara_1000" &&
                        <>
                            <p>写真撮影 : 11</p>
                            <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                            <p>旅行 : 8</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>子育て : 4</p>
                            <p>　類似タグ : 育児、子供の成長、育児支援、子どもとのコミュニケーション</p>
                            <p>カフェ巡り : 4</p>
                            <p>類似タグ : カフェ巡りスポット、カフェメニュー、カフェ雰囲気、カフェライフ</p>
                            <p>グルメ : 4</p>
                            <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                        </>
                    }
                    {pathname === "shobara_navi" &&
                        <>
                            <p>旅行 : 13</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>料理 : 12</p>
                            <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                            <p>グルメ : 12</p>
                            <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                            <p>イベント参加 : 9</p>
                            <p>類似タグ : イベント参加体験、イベント情報、イベントプランニング、イベントコーディネート</p>
                            <p>キャンプ : 7</p>
                            <p>　類似タグ : キャンプ場、アウトドア活動、キャンプ装備、グランピング</p>
                        </>
                    }
                    {pathname === "iriser_odaka" &&
                        <>
                            <p>写真撮影 : 11</p>
                            <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                            <p>旅行 : 8</p>
                            <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                            <p>子育て : 4</p>
                            <p>　類似タグ : 育児、子供の成長、育児支援、子どもとのコミュニケーション</p>
                            <p>カフェ巡り : 4</p>
                            <p>類似タグ : カフェ巡りスポット、カフェメニュー、カフェ雰囲気、カフェライフ</p>
                            <p>グルメ : 4</p>
                            <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                        </>
                    }
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default CommonTag;

export async function getStaticPaths() {
    const followers = get_followers();
    const paths = followers.map(follower => ({
        params: { social_media_username: follower },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pathname = params.social_media_username
    const profile = await getProfile(pathname)

    return {
        props: {
            profile: profile
        }
    }
}