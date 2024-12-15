import React, { useEffect, useState } from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import Profile from '@/components/ui/Profile/Profile'
import Card from '@/components/ui/Card/Card'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';
import get_followers from '@/lib/get_followers';
import { getProfile } from '@/lib/igAPI';

const index = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username
    
    const {followers, profile} = props
    const filteredUsertype = followers.filter((item) => item.usertype === "private")
    // const not_interest_list = usertypelist.filter((item) => item.interests !== "不明")

    const [sortedData, setSortedData] = useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredFollowers = filteredUsertype.filter(follower => {
        return (
            follower.tag.age.includes(searchTerm) ||
            follower.interests.includes(searchTerm)
        );
    });

    useEffect(() => {
        const sorted = [...filteredFollowers].sort((a, b) => b.heart - a.heart);
        setSortedData(sorted);
    }, [searchTerm]);

    return (
        <div className='wrap'>
            <Header path={pathname} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <main>
                <Profile name={pathname} data={profile} />
                <h3 className="sectionTitle mt50">再来する可能性が高いフォロワー</h3>
                <div className="cardWrap">
                    {sortedData.map((user) => {
                        return (
                            <React.Fragment key={user.username}>
                                <Card data={user} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default index;

export async function getStaticPaths() {
    const followers = get_followers();
    const paths = followers.map(follower => ({
        params: { social_media_username: follower },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pathname = params.social_media_username
    const profile = await getProfile(pathname)

    const followerFilePath = path.join(process.cwd(), `src/data/${pathname}`, 'follower.json');
    const followerData = await fsPromises.readFile(followerFilePath)
    const followerObjectData = JSON.parse(followerData)

    return {
        props: { 
            profile: profile,
            followers: followerObjectData
        }
    }
}