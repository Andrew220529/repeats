// import React, { useEffect, useState } from 'react';
// import fsPromises from 'fs/promises';
// import path from 'path';
// import Profile from '@/components/ui/Profile/Profile'
// import Footer from '@/components/base/Footer/Footer';
// import Header from '@/components/base/Header/Header';
// import { useRouter } from 'next/router';
// import { Box, Button, Flex, Heading, Img, ListItem, OrderedList, StepTitle, UnorderedList, VStack } from '@chakra-ui/react';
// import Link from 'next/link';
// import get_proposal from '@/lib/get_proposal';

// const Recommend = (props) => {
//     const router = useRouter();
//     // const pathname = router.query.social_media_username
//     const pathname = "bihokupark"

//     // const data = props.data
//     const { profile, proposal } = props

//     const [sortedProposal, setSortedProposal] = useState(proposal);

//     const recommend_data = []

//     proposal.forEach(proposal => {
//         recommend_data.push({
//             id: proposal.id,
//             url: proposal.url,
//             title: proposal.proposal.theme,
//             score: proposal.score,
//             rank: proposal.rank
//         })
//     })

//     const calculateRank = (score) => {
//         if (score >= 8) {
//             return 'A';
//         } else if (score >= 4.9 && score < 8) {
//             return 'B';
//         } else {
//             return 'C';
//         }
//     };

//     useEffect(() => {
//         const sortDate = proposal.sort((a, b) => b.score - a.score)

//         const addRank = sortDate.map(item => ({
//             ...item,
//             rank: calculateRank(item.score)
//         }))

//         setSortedProposal(addRank);
//     }, [proposal]);

//     // const sortByScore = () => {
//     //     var cloneData = Array.from(sortedProposal)
//     //     sortedProposal.sort((a, b) => b.score - a.score)

//     //     setSortedProposal(cloneData)
//     // }

//     return (
//         <div className='wrap'>
//             <Header path={pathname} />
//             <main>
//                 <Profile name={pathname} data={profile} />
//                 <h3 className="sectionTitle mt50">企画書一覧</h3>
//                 <div className="cardWrap">
//                     <VStack gap={"20px"} w={"100%"}>
//                         {sortedProposal.map((data, index) => {
//                             return (
//                                 <Flex key={index} flexWrap={"wrap"} w={"100%"} alignItems={"center"} gap={"20px"}>
//                                     <Box className="cardImg" marginInline={"auto"} w={"30%"} minW={"180px"} bg={'gray'} borderRadius={"4px"}>
//                                         <picture>
//                                             <source src={data.thumbnails.standard?.url} />
//                                             <source src={data.thumbnails.high.url} />
//                                             <source src={data.thumbnails.medium.url} />
//                                             <source src={data.thumbnails.default.url} />
//                                             <Img src={data.thumbnails.high.url} alt="" />
//                                         </picture>
//                                     </Box>
//                                     <VStack flex={"1 0 240px"} alignItems={"flex-start"} textAlign={"left"}>
//                                         <Heading size="md" textAlign={"center"}>{data.title}</Heading>
//                                         <p>優先順位 : {data.rank}</p>
//                                         <p>スコア : {data.score}</p>
//                                         <Link href={`/${pathname}/recommend/${String(data.id)}`}>
//                                             <Button>企画書を見る</Button>
//                                         </Link>
//                                     </VStack>
//                                 </Flex>
//                             )
//                         }
//                         )}
//                     </VStack>
//                     {pathname === "odakaru_minamisoma" ?
//                         <>
//                             <VStack>
//                                 <VStack>
//                                     <UnorderedList>
//                                         <ListItem>参考URL : <Link href="https://www.instagram.com/p/C6DtYD7BDc7/?img_index=1" target='_blank'>https://www.instagram.com/p/C6DtYD7BDc7/?img_index=1</Link></ListItem>
//                                         <ListItem>投稿メディアの形式 : 画像複数で漫画形式</ListItem>
//                                         <ListItem>ゴールデンウィークあるある</ListItem>
//                                         <ListItem>
//                                             投稿内容 :
//                                             <OrderedList>
//                                                 <ListItem>最大10連休を過ごせる人が羨ましい</ListItem>
//                                                 <ListItem>1ヶ月以上前から待ち遠しくてわくわくしがち</ListItem>
//                                                 <ListItem>円安すぎて海外旅行行けない</ListItem>
//                                                 <ListItem>渋滞だらけで疲れがち</ListItem>
//                                                 <ListItem>人混みをさけて引きこもりしがち</ListItem>
//                                                 <ListItem>大忙しなサービス業</ListItem>
//                                                 <ListItem>仕事をしたい人には逆に辛い</ListItem>
//                                                 <ListItem>あっという間に終わり五月病到来</ListItem>
//                                             </OrderedList>
//                                         </ListItem>
//                                     </UnorderedList>

//                                     <Heading as="h2" fontSize={24} mt={"1em"}>上記を参考にした内容</Heading>
//                                     <Heading as="h3" fontSize={16}>タイトル候補</Heading>
//                                     <UnorderedList display={"flex"} flexDirection={"column"} gap={"10px"}>
//                                         <ListItem>「小高区の朝日を迎える喜び」</ListItem>
//                                         <ListItem>「二拠点生活の新たな一歩：小高区での日々」</ListItem>
//                                         <ListItem>「移住先の魅力を再発見：小高区の四季」</ListItem>
//                                     </UnorderedList>
//                                     <Heading as="h3" fontSize={16} mt={"1em"}>内容候補</Heading>
//                                     <UnorderedList display={"flex"} flexDirection={"column"} gap={"10px"}>
//                                         <ListItem>写真投稿<br />
//                                             小高区の美しい朝景色を撮影した写真を投稿。<br />
//                                             キャプションには、移住先での朝の喜びや新たな生活の始まりを感じる内容を記述。</ListItem>
//                                         <ListItem>動画投稿<br />
//                                             小高区での日常風景や生活の様子を動画で紹介。<br />
//                                             キャプションやナレーションで、移住や二拠点生活の魅力を語る。</ListItem>
//                                         <ListItem>ストーリーズ形式（画像＆テキスト<br />
//                                             小高区での四季折々の風景やイベントをストーリーズ形式で紹介。<br />
//                                             テキスト部分で、自身の移住や二拠点生活の体験や感想を綴る。</ListItem>
//                                     </UnorderedList>
//                                 </VStack>
//                             </VStack>
//                         </>
//                         :
//                         <>現在新規コンテンツ作成中</>
//                     }

//                 </div>
//             </main>
//             <Footer path={pathname} />
//         </div>
//     );
// };

// export default Recommend;

// // export async function getStaticPaths() {
// //     const followers = get_followers();
// //     const paths = followers.map(follower => ({
// //         params: { social_media_username: follower },
// //     }))

// //     return { paths, fallback: false }
// // }

// export async function getStaticProps({ params }) {
//     // const pathname = params.social_media_username
//     const pathname = "bihokupark"

//     const proposalData = await get_proposal(pathname);

//     const profileFilePath = path.join(process.cwd(), `src/data/${pathname}`, 'profile.json');
//     const profileData = await fsPromises.readFile(profileFilePath)
//     const profileObjectData = JSON.parse(profileData)

//     return {
//         props: {
//             profile: profileObjectData,
//             proposal: proposalData
//         }
//     }
// }

const Recommend = (props) => {
    return (
        <>indexed</>
    )
}
export default Recommend;