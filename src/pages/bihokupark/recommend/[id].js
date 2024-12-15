import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { YouTubeEmbed } from '@next/third-parties/google'
// import { useRouter } from 'next/router';
import get_proposal from '@/lib/get_proposal';
import { Box, Button, Center, Flex, Heading, Img, List, ListItem, OrderedList, Text, UnorderedList, VStack } from '@chakra-ui/react';

const RecommendPost = (props) => {
    // const router = useRouter();
    // const pathname = router.query.social_media_username
    const pathname = "bihokupark"

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
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default RecommendPost;

export async function getStaticPaths() {
    const pathname = "bihokupark"
    const proposalData = await get_proposal(pathname);

    const paths = [];

    proposalData.forEach(proposal => {
        paths.push({
            params: {
                id: proposal.id
            }
        });
    });

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pathname = "bihokupark"
    const id = params.id

    const proposalData = await get_proposal(pathname);
    const filteredProposal = proposalData.filter(proposal => proposal.id === id);

    return {
        props: {
            proposal: filteredProposal
        }
    }
}