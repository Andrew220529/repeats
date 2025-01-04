import { Fragment, useState } from 'react';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Post from '@/components/ui/Post/Post';
import Header from '@/components/base/Header/Header';
import { useRouter } from 'next/router';

import { getProfile, getPosts } from '@/pages/api/instagram';
import { getAllUserDirectories } from '@/pages/api/fileSystemUtils';
import FilterBar from '@/components/molecules/FilterBar';


const PostRanking = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username

    const { posts, profile } = props
    const [filteredPosts, setFilteredPosts] = useState(posts)

    const handleFilterChange = (filteredData) => {
        filteredData.sort((a, b) => b.like_count - a.like_count);

        setFilteredPosts(filteredData);
    };



    return (
        <div className='wrap'>
            <Header path={pathname} />
            <main>
                <Profile name={pathname} data={profile} />
                <h3 className="sectionTitle mt50">おすすめ投稿</h3>
                <FilterBar posts={posts} onFilterChange={handleFilterChange} />
                <div className="cardWrap">
                    {filteredPosts.map((post) => {
                        return (
                            <Fragment key={post.id}>
                                <Post data={post} />
                            </Fragment>
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
    const userDirectories = await getAllUserDirectories();
    const paths = userDirectories.map(username => ({
        params: { social_media_username: username },
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const username = params.social_media_username;
    const profile = await getProfile(username);
    const posts = await getPosts(username);

    return {
        props: {
            profile: profile,
            posts: posts
        }
    }
}