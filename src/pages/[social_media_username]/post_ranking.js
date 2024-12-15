import React, { useEffect, useState } from 'react';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Post from '@/components/ui/Post/Post';
import Header from '@/components/base/Header/Header';
import { useRouter } from 'next/router';
import get_followers from '@/lib/get_followers';
import { getPosts, getProfile } from '@/lib/igAPI';
import { Flex, Select } from '@chakra-ui/react';


const PostRanking = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username

    const { posts, profile } = props
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');

    const years = [...new Set(posts.map(post => new Date(post.timestamp).getFullYear()))].sort((a, b) => b - a);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    const filteredAndSortedData = posts
        .filter(post => {
            if (post.like_count === undefined) return false;

            const postDate = new Date(post.timestamp);
            const postYear = postDate.getFullYear();
            const postMonth = postDate.getMonth() + 1;

            return (selectedYear === 'all' || postYear === parseInt(selectedYear)) &&
                (selectedMonth === 'all' || postMonth === parseInt(selectedMonth));
        })
        .sort((a, b) => b.like_count - a.like_count);

    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Profile name={pathname} data={profile} />
                <h3 className="sectionTitle mt50">おすすめ投稿</h3>
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
                    {filteredAndSortedData.map((post) => {
                        return (
                            <React.Fragment key={post.id}>
                                <Post data={post} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default PostRanking;

export async function getStaticPaths() {
    const followers = get_followers();
    const paths = followers.map(follower => ({
        params: { social_media_username: follower },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pathname = params.social_media_username;
    const profile = await getProfile(pathname);
    const posts = await getPosts(pathname);

    return {
        props: {
            profile: profile,
            posts: posts
        }
    }
}