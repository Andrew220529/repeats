import React, { useEffect, useState } from 'react';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import GeneratePDF from '@/components/pdf/report-dailykonan';
import { PDFDownloadLink } from '@react-pdf/renderer';
import FilterBar from '@/components/Molecules/FilterBar';

const Report = (props) => {
    const pathname = "dailykonan"

    const { profile, posts } = props
    const [isClient, setIsClient] = useState(false)

    const date = new Date();
    const currentMonth = date.getMonth() + 1;

    const [filteredPosts, setFilteredPosts] = useState(posts)

    const handleFilterChange = (filteredData) => {
        filteredData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        setFilteredPosts(filteredData);
    };

    const averageByArray = function () {
        const array = posts.map((obj) => obj.like_count);
        var result = 0, index = 0;
        for (index in array) {
            result = result + array[index];
        }
        return result / array.length;
    };

    const calculateRank = (like_count) => {
        const ratio = like_count / averageByArray();

        if (ratio >= 1.5) {
            return 'A';
        } else if (ratio >= 1 && ratio < 1.5) {
            return 'B';
        } else {
            return 'C';
        }
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    // getStaticPropsで下記情報を取得
    // profile情報
    // insights情報
    // post情報
    const pdfData = {
        profile: profile,
        posts: posts
    }

    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Profile name={pathname} data={profile} />
                <Heading
                    as={"h3"}
                    paddingBlock={"10px"}
                    bg={"#D9D9D9"}
                    w={"100%"}
                    fontSize={"18px"}
                    textAlign={"center"}
                    className="sectionTitle mt50">
                    {currentMonth}月レポートを出力する(直近1ヶ月)
                </Heading>
                <Flex mt={5} alignItems={'center'} justifyContent={'center'}>
                    {isClient &&
                        <PDFDownloadLink document={<GeneratePDF jsonData={pdfData} />} filename="report.pdf">
                            {({ loading }) => (
                                loading ? 'Loading document...' :
                                    <Button>PDF出力</Button>
                            )}
                        </PDFDownloadLink>
                    }
                </Flex>
                <FilterBar posts={posts} onFilterChange={handleFilterChange} />

                <div className="cardWrap">
                    <VStack gap={"20px"} w={"100%"}>
                        {filteredPosts.map((data, index) => {
                            const date = new Date(data.timestamp);
                            const year = date.getFullYear();
                            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
                            const day = date.getDate().toString().padStart(2, '0');
                            const formattedDate = `${year}年${month}月${day}日`;
                            const average = averageByArray()
                            const score = calculateRank(data.like_count)

                            const insights = data.insights;

                            return (
                                <Link href={`/${pathname}/report/${String(data.id)}`} key={index} style={{ display: "block", width: "100%" }}>
                                    <Flex flexWrap={"wrap"} w={"100%"} alignItems={"center"} gap={"20px"}>
                                        <Box className="cardImg" marginInline={"auto"} w={"30%"} minW={"180px"} bg={'gray'} borderRadius={"4px"}>
                                            {
                                                data.media_product_type === 'REELS' ?
                                                    <Image src={data?.thumbnail_url} /> :
                                                    <Image src={data?.media_url} />
                                            }
                                        </Box>
                                        <VStack flex={"1 0 240px"} alignItems={"flex-start"} textAlign={"left"}>
                                            <Heading fontSize="18px" fontWeight={"400"}>{formattedDate}投稿</Heading>
                                            <Text fontSize="15px">アカウント平均いいね：{average}、{parseFloat((data.like_count / averageByArray() * 100).toFixed(2))}%増加</Text>
                                            {insights.map((i, i_index) => {
                                                return (
                                                    <Text key={i_index}>{i.title} : {i.values[0].value}</Text>
                                                )
                                            })}
                                            <Text fontSize="24px">投稿評価：{score}</Text>
                                        </VStack>
                                    </Flex>
                                </Link>
                            )
                        })}
                        {filteredPosts.length === 0 && <Box>投稿がありません</Box>}
                    </VStack>
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default Report;

export async function getStaticProps({ params }) {
    const pathname = "dailykonan"
    // const profile = await getProfile(pathname)

    const today = new Date();

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const stop_time = Math.floor(yesterday.getTime() / 1000);
    const start_time = Math.floor(thirtyDaysAgo.getTime() / 1000);

    const fetchDemographics = async (metric, breakdown) => {
        const response = await fetch(
            `https://graph.facebook.com/v21.0/${ig.id}/insights?access_token=${ig.access_token}&metric=${metric}&period=lifetime&timeframe=prev_month&breakdown=${breakdown}&metric_type=total_value`
        );
        return (await response.json()).data[0];
    };

    const ig = {
        id: '17841402902001430',
        access_token: 'EAAL6ZAgqUPhkBO0BBAzXUFhGojl3SCsIPv4Vmkv59ZCU1C3B1M1rZAFugbmSiFJyI8gAZAg8HMZCARtx1Xc1LbMLJJGlk7htKgJxNx0Kp2tYZChg8MlCKZCYDtteWt80EajQBmXZCeLhWlpi7MPVGdOxXMOzhSu9r8vo6upf44GQeMwVmiFt6j5xLtmr'
    }

    // Basic profile data
    const profileResponse = await fetch(
        `https://graph.facebook.com/v21.0/${ig.id}?access_token=${ig.access_token}&fields=id,name,username,followers_count,profile_picture_url`
    );
    const profileData = await profileResponse.json();

    // Insights data - followers, impressions, reach
    const insights01Response = await fetch(
        `https://graph.facebook.com/v21.0/${ig.id}/insights?access_token=${ig.access_token}&metric=follower_count,impressions,reach&period=day&since=${start_time}&until=${stop_time}`
    );
    const insights01Data = await insights01Response.json();

    // Insights data - interactions, engagement, etc.
    const insights02Response = await fetch(
        `https://graph.facebook.com/v21.0/${ig.id}/insights?access_token=${ig.access_token}&metric=total_interactions,accounts_engaged,likes,comments,saves,shares,replies&period=day&since=${start_time}&until=${stop_time}&metric_type=total_value`
    );
    const insights02Data = await insights02Response.json();

    // Fetch all demographic data
    const demographicTypes = ['engaged_audience_demographics', 'reached_audience_demographics', 'follower_demographics'];
    const breakdowns = ['age', 'city', 'country', 'gender'];

    const demographics = {
        engaged: {
            'age': [],
            'city': [],
            'country': [],
            'gender': []
        },
        reached: {
            'age': [],
            'city': [],
            'country': [],
            'gender': []
        },
        follower: {
            'age': [],
            'city': [],
            'country': [],
            'gender': []
        },
    };

    // // Fetch demographics for each type and breakdown
    // for (const type of demographicTypes) {
    //     const shortType = type.split('_')[0]; // 'engaged', 'reached', or 'follower'

    //     for (const breakdown of breakdowns) {
    //         const data = await fetchDemographics(type, breakdown);
    //         demographics[shortType][breakdown] = data.total_value.breakdowns[0].results;
    //     }
    // }

    const combinedProfile = {
        ...profileData,
        insights: {
            metrics: insights01Data.data,
            engagement: insights02Data.data,
            // demographics
        },
    };


    const postsjson = await fetch(`https://graph.facebook.com/v21.0/${ig.id}?access_token=${ig.access_token}&fields=media.limit(10){id,username,caption,like_count,media_product_type,media_url,thumbnail_url,permalink , timestamp}`)
        .then((res) => res.json())
        .catch((error) => console.error(error))

    const posts = postsjson.media.data

    const updatedPosts = await Promise.all(
        posts.map(async (post) => {
            const insightsJson = await fetch(`https://graph.facebook.com/v21.0/${post.id}/insights?access_token=${ig.access_token}&metric=clips_replays_count,plays,ig_reels_aggregated_all_plays_count,comments,likes,saved,shares`)
                .then((res) => res.json())
                .catch((error) => console.error(error));
            return { ...post, insights: insightsJson.data };
        })
    );

    return {
        props: {
            profile: combinedProfile,
            posts: updatedPosts,
        }
    }
}