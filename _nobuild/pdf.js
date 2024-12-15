import React, { useEffect, useState } from 'react'
import fsPromises from 'fs/promises';
import path from 'path';

import GeneratePDF from '@/components/pdf/report';

import { Button } from '@chakra-ui/react';
import { PDFDownloadLink, PDFViewer, BlobProvider } from '@react-pdf/renderer';

function pdf(props) {
    const { followers } = props

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handlePrintPdf = (url) => {
        if (url) {
            const newWindow = window.open(url, "_blank");
        } else {
            alert("URL is null");
        }
    };

    return (
        <>
            <div>pdf</div>
            {isClient &&
                <BlobProvider document={<GeneratePDF jsonData={followers} />}>
                    {({ url }) => (
                        <div onClick={() => handlePrintPdf(url)}>
                            <span>印刷する</span>
                        </div>
                    )}
                </BlobProvider>
            }
            {isClient &&
                <PDFDownloadLink document={<GeneratePDF jsonData={followers} />} filename="report.pdf">
                    {({ loading }) => (
                        loading ? 'Loading document...' :
                            <Button>PDF出力</Button>
                    )}
                </PDFDownloadLink>
            }
        </>
    )
}

export default pdf

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