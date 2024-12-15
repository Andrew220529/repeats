import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { getPosts } from '@/lib/igAPI';
// import { UsePrintButton } from '@/components/usePrintButton';

const RecommendPost = (props) => {
    const pathname = "odakaru_minamisoma"

    const data = props.post[0]
    const average = props.average

    const calculateRank = (like_count) => {
        const ratio = like_count / average;

        if (ratio >= 1.5) {
            return 'A';
        } else if (ratio >= 1 && ratio < 1.5) {
            return 'B';
        } else {
            return 'C';
        }
    };

    
    const date = new Date(data.timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}年${month}月${day}日`;
    const score = calculateRank(data.like_count)

    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <VStack gap={"30px"}>
                    <Box>
                        <Image src={data.media_url} />
                    </Box>
                    <VStack alignItems={"flex-start"} textAlign={"left"} w={"100%"}>
                        <Heading fontSize="18px" fontWeight={"400"}>{formattedDate}投稿</Heading>
                        <Text fontSize="15px">いいね数：{data.like_count}<br />（アカウント平均：{average}、{parseFloat((data.like_count / average * 100).toFixed(2))}%増加）</Text>
                        <Text fontSize="24px">投稿評価：{score}</Text>
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
    const pathname = "odakaru_minamisoma"

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
    const pathname = "odakaru_minamisoma"

    const posts = await getPosts(pathname);
    
    const filteredPosts = posts.filter(post => post.id === id);

    const averageByArray = function () {
        const array = posts.map((obj) => obj.like_count);
        var result = 0, index = 0;
        for (index in array) {
            result = result + array[index];
        }
        return result / array.length;
    };

    return {
        props: {
            post: filteredPosts,
            average: averageByArray()
        }
    }
}