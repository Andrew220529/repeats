import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { YouTubeEmbed } from '@next/third-parties/google'
import { useRouter } from 'next/router';
import get_proposal from '@/lib/get_proposal';
import { Box, Button, Center, Flex, Heading, Img, List, ListItem, OrderedList, Text, UnorderedList, VStack } from '@chakra-ui/react';
import get_followers from '@/lib/get_followers';


const RecommendPost = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username

    const data = props.proposal[0]
    const proposal = props.proposal[0].proposal


    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Heading as={"h2"} textAlign={"center"} className="sectionTitle mt50">{proposal.theme}</Heading>
                <VStack alignItems={'flex-start'} gap={"32px"} fontWeight={"bold"}>
                    <Heading as={"h3"} fontSize={"20"} fontWeight={"bold"}>参考動画</Heading>
                    <Box maxW={"44%"} minH={"250px"} width={"100%"} marginInline={"auto"} background={'black'}>
                        <YouTubeEmbed class='Youtube' videoid={data.id} params="controls=0" />
                    </Box>
                    <Text>視聴回数：{data.view}　登録者数：{data.registrants}</Text>
                    <Heading as={"h3"} fontSize={"20"} >目的</Heading>
                    <OrderedList fontSize={"20px"}>
                        {
                            proposal.purpose.map((purpose, index) => {
                                return (
                                    <ListItem key={index}>{purpose}</ListItem>
                                )
                            })
                        }
                    </OrderedList>

                    <Heading as={"h3"} fontSize={"20"} >ターゲット</Heading>
                    <OrderedList fontSize={"20px"}>
                        {
                            proposal.target.map((target, index) => {
                                return (
                                    <ListItem key={index}>{target}</ListItem>
                                )
                            })
                        }
                    </OrderedList>

                    <Heading as={"h3"} fontSize={"20"} >構成</Heading>
                    <OrderedList fontSize={"20px"} >
                        {
                            proposal.composition.map((composition, index) => {
                                return (
                                    <ListItem key={index} marginBottom={"5"}>
                                        <Heading as={"h4"} fontSize={"16"} >{composition.title}（{composition.seconds}）</Heading>
                                        <Text fontSize={"14"}>{composition.content}</Text>
                                    </ListItem>
                                )
                            })
                        }
                    </OrderedList>

                    <Heading as={"h3"} fontSize={"20"} >おすすめのハッシュタグ</Heading>
                    <OrderedList fontSize={"20px"} >
                        {
                            proposal.hashtags.map((hashtags, index) => {
                                return (
                                    <ListItem key={index}>{hashtags}</ListItem>
                                )
                            })
                        }
                    </OrderedList>
                </VStack>
                {/* <div className="cardWrap">
                    <VStack gap={"20px"} w={"100%"}>
                        {recommend_data.map((data, index) => (
                            <Flex key={index} flexWrap={"wrap"} w={"100%"} alignItems={"center"} gap={"20px"} border={"1px solid"} borderRadius={"8px"} p={"20px"}>
                                <Box marginInline={"auto"} w={"30%"} minW={"180px"} bg={'gray'} borderRadius={"4px"}>
                                    <Img
                                    w={"100%"}
                                    paddingTop={"100%"}
                                     src={data.url} alt="" />
                                </Box>
                                <VStack flex={"1 0 240px"} alignItems={"flex-start"} textAlign={"left"}>
                                    <Heading size="md" textAlign={"center"}>{data.title}</Heading>
                                    <p>優先順位 : {data.rank}</p>
                                    <Link href={`/${pathname}/recommend/${data.id}`} passHref>
                                        <Button>企画書を見る</Button>
                                    </Link>
                                </VStack>
                            </Flex>
                        ))}
                    </VStack>
                    {pathname === "odakaru_minamisoma" ?
                        <>
                            <VStack>
                                <VStack>
                                    <UnorderedList>
                                        <ListItem>参考URL : <Link href="https://www.instagram.com/p/C6DtYD7BDc7/?img_index=1" target='_blank'>https://www.instagram.com/p/C6DtYD7BDc7/?img_index=1</Link></ListItem>
                                        <ListItem>投稿メディアの形式 : 画像複数で漫画形式</ListItem>
                                        <ListItem>ゴールデンウィークあるある</ListItem>
                                        <ListItem>
                                            投稿内容 :
                                            <OrderedList>
                                                <ListItem>最大10連休を過ごせる人が羨ましい</ListItem>
                                                <ListItem>1ヶ月以上前から待ち遠しくてわくわくしがち</ListItem>
                                                <ListItem>円安すぎて海外旅行行けない</ListItem>
                                                <ListItem>渋滞だらけで疲れがち</ListItem>
                                                <ListItem>人混みをさけて引きこもりしがち</ListItem>
                                                <ListItem>大忙しなサービス業</ListItem>
                                                <ListItem>仕事をしたい人には逆に辛い</ListItem>
                                                <ListItem>あっという間に終わり五月病到来</ListItem>
                                            </OrderedList>
                                        </ListItem>
                                    </UnorderedList>

                                    <Heading as="h2" fontSize={24} mt={"1em"}>上記を参考にした内容</Heading>
                                    <Heading as="h3" fontSize={16}>タイトル候補</Heading>
                                    <UnorderedList display={"flex"} flexDirection={"column"} gap={"10px"}>
                                        <ListItem>「小高区の朝日を迎える喜び」</ListItem>
                                        <ListItem>「二拠点生活の新たな一歩：小高区での日々」</ListItem>
                                        <ListItem>「移住先の魅力を再発見：小高区の四季」</ListItem>
                                    </UnorderedList>
                                    <Heading as="h3" fontSize={16} mt={"1em"}>内容候補</Heading>
                                    <UnorderedList display={"flex"} flexDirection={"column"} gap={"10px"}>
                                        <ListItem>写真投稿<br />
                                            小高区の美しい朝景色を撮影した写真を投稿。<br />
                                            キャプションには、移住先での朝の喜びや新たな生活の始まりを感じる内容を記述。</ListItem>
                                        <ListItem>動画投稿<br />
                                            小高区での日常風景や生活の様子を動画で紹介。<br />
                                            キャプションやナレーションで、移住や二拠点生活の魅力を語る。</ListItem>
                                        <ListItem>ストーリーズ形式（画像＆テキスト<br />
                                            小高区での四季折々の風景やイベントをストーリーズ形式で紹介。<br />
                                            テキスト部分で、自身の移住や二拠点生活の体験や感想を綴る。</ListItem>
                                    </UnorderedList>
                                </VStack>
                            </VStack>
                        </>
                        :
                        <>現在新規コンテンツ作成中</>
                    }

                </div> */}
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default RecommendPost;

export async function getStaticPaths() {

    const followers = get_followers();
    const proposalData = await get_proposal();

    const paths = [];

    followers.forEach(follower => {
        proposalData.forEach(proposal => {
            paths.push({
                params: {
                    social_media_username: follower,
                    id: proposal.id
                }
            });
        });
    });

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const id = params.id

    const proposalData = await get_proposal();
    const filteredProposal = proposalData.filter(proposal => proposal.id === id);

    return {
        props: {
            proposal: filteredProposal
        }
    }
}