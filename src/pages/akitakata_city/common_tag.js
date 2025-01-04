import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';

const instagram_name = "akitakata_city"

const CommonTag = (props) => {
    const data = props.data

    return (
        <>
            <Header path={instagram_name} />
            <main>
                <Profile name={instagram_name} />
                <h3 className="sectionTitle mt50">よく使われるタグ</h3>
                <div className="cardWrap">
                    {/* {data.map((tag) => {
                        const [key, value] = Object.entries(tag)[0];
                        console.log(key, value);
                        return (
                            <p>{`${key} : ${value}`}</p>
                        )
                    })} */}
                    <p>旅行 : 39</p>
                    <p>　類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</p>
                    <p>料理 : 32</p>
                    <p>　類似タグ : 料理レシピ、クッキング、料理教室、食事準備</p>
                    <p>音楽 : 23</p>
                    <p>　類似タグ : 音楽ジャンル、アーティスト、音楽ライブ、音楽制作</p>
                    <p>写真撮影 : 19</p>
                    <p>　類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</p>
                    <p>グルメ : 13</p>
                    <p>　類似タグ : レストラン、グルメ旅行、料理評価、フードイベント</p>
                </div>
            </main>
            <Footer path={instagram_name} />
        </>
    );
};

export default CommonTag;

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), `src/pages/${instagram_name}`, 'profile.json');
    const data = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(data)
    const most_common = objectData.most_common;

    return {
        props: { data: most_common }
    }
}