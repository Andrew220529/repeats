import React from 'react'
import styles from "./Profile.module.scss"
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const data_list = [

    {
        username: "kunishima_ct",
        imgUrl: "/images/kunishima_ct_profile_pic.jpg",
        count: {
            instagram: 1495,
        }
    },
    {
        username: "kurasutoko",
        imgUrl: "/images/kurasutoko_profile_pic.jpg",
        count: {
            instagram: 9282,
        }
    },
    {
        username: "daisu_kitchencars",
        imgUrl: "/images/daisu_kitchencars_profile_pic.jpg",
        count: {
            instagram: 1701
        }
    },
    {
        id: "17841456051380266",
        name: "いいじゃん蒲郡 移住定住公式アカウント",
        username: "gamagori_iju",
        biography: "愛知県蒲郡市の移住定住に関する情報や、, 蒲郡での暮らしの魅力を発信していきます！, ・, 自然豊かな観光地と生活しやすい街の, 両方が楽しめる「がまごおりじなる」な暮らしを, のぞいてみませんか？🍊🐟🌊",
        imgUrl: "/images/gamagori_iju_profile_pic.jpg",
        count: {
            instagram: 251
        },
        most_common: [
            {
                "旅行": 21
            },
            {
                "料理": 21
            },
            {
                "読書": 9
            },
            {
                "写真撮影": 8
            },
            {
                "子育て": 8
            }
        ]
    },
    {
        "id": "17841421798605345",
        "name": "まあるいごえん〜親子の笑顔を育み隊〜　子育てをごきげんに♪家庭教育支援チーム",
        "username": "maaruigoen",
        "biography": "愛知県北名古屋市中心に活動, 主に0～3才の子育て支援, ・, 親子の気持ちに寄り添い、, 子育てをより楽しく、, 笑顔になれるよう活動しています🍀, ・, 👕お下がりあげますの会, 👶子育てワークショップ, 👶子育てハッピーセミナー, 👶子連れでワークショップ, 👶子育て相談, など, ワークショップお申し込みはHPから↓",
        imgUrl: "/images/maaruigoen_profile_pic.jpg",
        count: {
            instagram: 744
        },
        "most_common": [
            {
                "子育て": 84
            },
            {
                "料理": 36
            },
            {
                "旅行": 26
            },
            {
                "副業": 22
            },
            {
                "投資": 21
            }
        ]
    },
    {
        "id": "17841412220072399",
        "name": "湯来交流体験センター",
        "username": "yuki_experience",
        "biography": "＼広島の奥座敷で非日常体験！／, 🏕️キャンプ・BBQ (一年中), 🧖テントサウナ(水風呂は天然の川), 🏊🏼大迫力のアクティビティ(#奥湯来シャワークライミング), ▶️その他イベントや、オオサンショウウオこんにゃく作りなど盛りだくさん",
        imgUrl: "/images/yuki_experience_profile_pic.jpg",
        count: {
            instagram: 1502
        },
        "most_common": [
            {
                "旅行": 14
            },
            {
                "サウナ": 13
            },
            {
                "料理": 7
            },
            {
                "キャンプ": 7
            },
            {
                "釣り": 5
            }
        ]
    },
    {
        "id": "17841404661033935",
        "name": "愛知県豊川市",
        "username": "toyokawatimes",
        "biography": "【豊川市公式アカウント】とよかわの魅力をみなさんにお届けします。「#とよかわタイムス」で投稿して、一緒に魅力を発信しましょう！, 豊川市定住促進サイトでは人の声で魅力を発信中！, 下記リンクからご覧ください。",
        imgUrl: "/images/toyokawatimes_profile_pic.jpg",
        count: {
            instagram: 9316
        },
        "most_common": [
            {
                "副業": 23
            },
            {
                "投資": 15
            },
            {
                "ファッション": 11
            },
            {
                "料理": 9
            },
            {
                "子育て": 9
            }
        ]
    }
]

function Profile(props) {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    const { data } = props

    return (
        <div className={styles.profile}>
            <a target='_blank' href={`https://www.instagram.com/${data.username}`} className={styles.profileImg}><img src={basePath + `/images/${data.username}_profile_pic.jpg`} alt={data.name} /></a>
            <div className={styles.profileBody}>
                <h2 className={styles.profileName}>{data.username}</h2>
                <h2 className={styles.profileName}>{data.name}</h2>
                <ul className={styles.snsCount}>
                    <li>
                        <img src={`${basePath}/images/insta-icon.svg`} alt="insta" />
                        {/* <p>{data.count.instagram}</p> */}
                        <p>{data.followers_count}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile