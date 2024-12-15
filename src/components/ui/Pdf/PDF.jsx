import { Page, Text, Image, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 11,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    image: {
        width: "100%",
    }
});

export default function PDF({ data }) {
    const { report, average, score } = data
    console.log(report);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>
                        {data.id}
                    </Text>
                    <Text>
                        いいね数：{data.like_count}
                    </Text>
                    <Image style={styles.image} src={data.media_url}></Image>
                    <Text>
                        （アカウント平均：{average}、{parseFloat((data.like_count / average * 100).toFixed(2))}%増加）
                    </Text>
                    <Text>
                        投稿評価：{score}
                    </Text>
                </View>
            </Page>
        </Document>
    );
}