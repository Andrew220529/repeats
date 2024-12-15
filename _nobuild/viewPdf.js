import React, { useEffect, useState } from 'react'
import fsPromises from 'fs/promises';
import path from 'path';
import { PDFViewer } from '@react-pdf/renderer';
import GeneratePDF from '@/components/pdf/report';

function viewPdf(props) {
    const { followers } = props

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient &&
                <PDFViewer width={"100%"} height={"1000px"}>
                    <GeneratePDF jsonData={followers} />
                </PDFViewer>}
        </>
    )
}

export default viewPdf

export async function getStaticProps() {
    const pathname = "odakaru_minamisoma"

    const followerFilePath = path.join(process.cwd(), `src/data/${pathname}`, 'follower.json');
    const followerData = await fsPromises.readFile(followerFilePath)
    const followerObjectData = JSON.parse(followerData)

    return {
        props: {
            followers: followerObjectData
        }
    }
}