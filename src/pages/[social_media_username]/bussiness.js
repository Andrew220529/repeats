import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Profile from '@/components/ui/Profile/Profile'
import Card from '@/components/ui/Card/Card'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';

import { getProfile } from '@/pages/api/instagram';
import { getAllUserDirectories, getFollowerData } from '@/pages/api/fileSystemUtils';

const BusinessFollower = (props) => {
    const router = useRouter();
    const pathname = router.query.social_media_username

    const { followers, profile } = props
    const filteredUsertype = followers.filter((item) => item.usertype === "business")
    const unknownInterestItems = filteredUsertype.filter((item) => item.interests === "不明");
    const filteredList = filteredUsertype.filter((item) => item.interests !== "不明");
    const rearrangedList = [...filteredList, ...unknownInterestItems];

    const [sortedData, setSortedData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFollowers = rearrangedList.filter(follower => {
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
                            <Fragment key={user.username}>
                                <Card data={user} />
                            </Fragment>
                        )
                    })}
                </div>
            </main>
            <Footer path={pathname} />
        </div>
    );
};

export default BusinessFollower;

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
    const username = params.social_media_username
    const profile = await getProfile(username)
    const followers = await getFollowerData(username)

    return {
        props: {
            profile: profile,
            followers: followers
        }
    }
}