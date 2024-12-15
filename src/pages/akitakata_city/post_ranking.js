import React, { useEffect, useState } from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import Profile from '@/components/ui/Profile/Profile'
import Footer from '@/components/base/Footer/Footer';
import Post from '@/components/ui/Post/Post';
import Header from '@/components/base/Header/Header';

const instagram_name = "akitakata_city"

const PostRanking = (props) => {
    const data = props.data

    const filteredData = data.filter(post => post.like_count !== undefined);

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const sorted = [...filteredData].sort((a, b) => b.like_count - a.like_count);
        setSortedData(sorted);
    }, []);

    return (
        <>
            <Header path={instagram_name}/>
            <main>
                <Profile name={instagram_name} />
                <h3 className="sectionTitle mt50">おすすめ投稿</h3>
                <div className="cardWrap">
                    {sortedData.map((post) => {
                        return (
                            <React.Fragment key={post.id}>
                                <Post data={post}/>
                            </React.Fragment>
                        )
                    })}
                </div>
            </main>
            <Footer path={instagram_name} />
        </>
    );
};

export default PostRanking;

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), `src/pages/${instagram_name}`, 'post.json');
    const data = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(data)
    

    return {
        props: { data: objectData }
    }
}