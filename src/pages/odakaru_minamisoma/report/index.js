import React, { useEffect, useState } from 'react';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';

import fsPromises from 'fs/promises';
import path from 'path';

import { Box, Button, Flex, Heading, Image, Select, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { getPosts, getProfile } from '@/lib/igAPI';

import GeneratePDF from '@/components/pdf/report';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Report = (props) => {
    // const router = useRouter();
    const pathname = "odakaru_minamisoma"

    const { profile, posts, followers } = props
    const [isClient, setIsClient] = useState(false)
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');

    const d = new Date();
    // const month = d.getMonth() + 1
    const currentYear = d.getFullYear();
    const currentMonth = d.getMonth() + 1;

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


    const filteredData = posts.filter(post => post.like_count !== undefined)

    const sortedAndFilteredData = filteredData
        .filter(post => {
            const postDate = new Date(post.timestamp);
            const postYear = postDate.getFullYear();
            const postMonth = postDate.getMonth() + 1;
            return (selectedYear === 'all' || postYear === parseInt(selectedYear)) &&
                (selectedMonth === 'all' || postMonth === parseInt(selectedMonth));
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    useEffect(() => {
        setIsClient(true);
    }, []);

    const years = [...new Set(filteredData.map(post => new Date(post.timestamp).getFullYear()))].sort((a, b) => b - a);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Profile name={pathname} data={profile} />
                <Heading as={"h3"} paddingBlock={"10px"} bg={"#D9D9D9"} w={"100%"} fontSize={"18px"} textAlign={"center"} className="sectionTitle mt50">{currentMonth}月レポートを出力する(直近1ヶ月)</Heading>
                <Flex mt={5} alignItems={'center'} justifyContent={'center'}>
                    {isClient &&
                        <PDFDownloadLink document={<GeneratePDF jsonData={followers} />} filename="report.pdf">
                            {({ loading }) => (
                                loading ? 'Loading document...' :
                                    <Button>PDF出力</Button>
                            )}
                        </PDFDownloadLink>
                    }
                </Flex>

                <Flex justifyContent="center" mt={4} mb={4}>
                    <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} mr={2}>
                        <option value="all">全ての年</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}年</option>
                        ))}
                    </Select>
                    <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                        <option value="all">全ての月</option>
                        {months.map(month => (
                            <option key={month} value={month}>{month}月</option>
                        ))}
                    </Select>
                </Flex>

                <div className="cardWrap">
                    <VStack gap={"20px"} w={"100%"}>
                        {sortedAndFilteredData.map((data, index) => {
                            const date = new Date(data.timestamp);
                            const year = date.getFullYear();
                            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
                            const day = date.getDate().toString().padStart(2, '0');
                            const formattedDate = `${year}年${month}月${day}日`;
                            const average = averageByArray()
                            const score = calculateRank(data.like_count)

                            return (
                                <Link href={`/${pathname}/report/${String(data.id)}`} key={index} style={{ display: "block", width: "100%" }}>
                                    <Flex flexWrap={"wrap"} w={"100%"} alignItems={"center"} gap={"20px"}>
                                        <Box className="cardImg" marginInline={"auto"} w={"30%"} minW={"180px"} bg={'gray'} borderRadius={"4px"}>
                                            <Image src={data?.media_url} />
                                        </Box>
                                        <VStack flex={"1 0 240px"} alignItems={"flex-start"} textAlign={"left"}>
                                            <Heading fontSize="18px" fontWeight={"400"}>{formattedDate}投稿</Heading>
                                            <Text fontSize="15px">いいね数：{data.like_count}<br />（アカウント平均：{average}、{parseFloat((data.like_count / averageByArray() * 100).toFixed(2))}%増加）</Text>
                                            <Text fontSize="24px">投稿評価：{score}</Text>
                                        </VStack>
                                    </Flex>
                                </Link>
                            )
                        })}
                        {sortedAndFilteredData.length === 0 && <Box>投稿がありません</Box>}
                    </VStack>
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default Report;

export async function getStaticProps({ params }) {
    const pathname = "odakaru_minamisoma"
    const profile = await getProfile(pathname)
    const posts = await getPosts(pathname);

    const followerFilePath = path.join(process.cwd(), `src/data/${pathname}`, 'follower.json');
    const followerData = await fsPromises.readFile(followerFilePath)
    const followerObjectData = JSON.parse(followerData)

    return {
        props: {
            profile: profile,
            posts: posts,
            followers: followerObjectData
        }
    }
}