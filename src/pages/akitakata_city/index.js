import React, { useEffect, useState } from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';
import Profile from '@/components/ui/Profile/Profile'
import Card from '@/components/ui/Card/Card'
import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';

const instagram_name = "akitakata_city"

const Private = (props) => {
    const data = props.data
    const private_list = data.filter((item) => item.usertype === "private")

    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const sorted = [...private_list].sort((a, b) => b.heart - a.heart);
        setSortedData(sorted);
    }, []);

    return (
        <>
        <Header path={instagram_name} />
            <main>
                <Profile name={instagram_name} />
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
                {/* <h3 className="sectionTitle">アンケート回答しているフォロワー</h3> */}
            </main>
            <Footer path={instagram_name} />
        </>
    );
};

export default Private;

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), `src/pages/${instagram_name}`, 'follower.json');
    const data = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(data)

    return {
        props: { data: objectData }
    }
}