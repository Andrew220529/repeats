import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { getPosts } from '@/lib/igAPI';
// import { UsePrintButton } from '@/components/usePrintButton';

const RecommendPost = (props) => {
    const pathname = "dailykonan"
    const data = props.post[0]

    const date = new Date(data.timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}年${month}月${day}日`;

    const insights = data.insights;

    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <VStack gap={"30px"}>
                    <Box>
                        {
                            data.media_product_type === 'REELS' ?
                                <Image src={data?.thumbnail_url} /> :
                                <Image src={data?.media_url} />
                        }
                    </Box>
                    <VStack alignItems={"flex-start"} textAlign={"left"} w={"100%"}>
                        <Heading fontSize="18px" fontWeight={"400"}>{formattedDate}投稿</Heading>
                        {insights.map((i, i_index) => {
                            return (
                                <Text key={i_index}>{i.title} : {i.values[0].value}</Text>
                            )
                        })}
                    </VStack>
                    {/* <UsePrintButton data={dataObj} /> */}
                    {/* <Button>PDFダウンロード</Button> */}
                </VStack>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default RecommendPost;

export async function getStaticPaths() {
    const pathname = "dailykonan"

    const posts = await getPosts(pathname);
    const paths = [];

    posts.forEach(post => {
        paths.push({
            params: {
                id: post.id
            }
        });
    });

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const pathname = "dailykonan"

    const posts = await getPosts(pathname);

    const ig = {
        id: '17841402902001430',
        access_token: 'EAAL6ZAgqUPhkBO0BBAzXUFhGojl3SCsIPv4Vmkv59ZCU1C3B1M1rZAFugbmSiFJyI8gAZAg8HMZCARtx1Xc1LbMLJJGlk7htKgJxNx0Kp2tYZChg8MlCKZCYDtteWt80EajQBmXZCeLhWlpi7MPVGdOxXMOzhSu9r8vo6upf44GQeMwVmiFt6j5xLtmr'
    }

    const filteredPosts = posts.filter(post => post.id === id);

    const updatedPosts = await Promise.all(
        filteredPosts.map(async (post) => {
            const insightsJson = await fetch(`https://graph.facebook.com/v21.0/${post.id}/insights?access_token=${ig.access_token}&metric=clips_replays_count,plays,ig_reels_aggregated_all_plays_count,ig_reels_avg_watch_time,ig_reels_video_view_total_time,comments,likes,reach,saved,shares,total_interactions`)
                .then((res) => res.json())
                .catch((error) => console.error(error));
            return { ...post, insights: insightsJson.data };
        })
    );

    return {
        props: {
            post: updatedPosts,
        }
    }
}