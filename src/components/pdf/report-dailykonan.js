import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    Font
} from '@react-pdf/renderer';

import InsightMetrics from './InsightMetrics';
import EngagementMetrics from './EngagementMetrics';
import DemographicsSection from './DemographicsSection';




const GeneratePDF = ({ jsonData }) => {

    Font.register({
        family: "Nasu-Regular",
        src: "../../fonts/Nasu-Regular.ttf"
    })

    Font.register({
        family: "NotoSansJP-Regular",
        src: "../../fonts/NotoSansJP-Regular.ttf"
    })
    Font.register({
        family: "NotoSansJP-Bold",
        src: "../../fonts/NotoSansJP-Bold.ttf"
    })

    const BORDER_STYLE = "solid";
    const BORDER_COLOR = "#dbdbdb";

    const styles = StyleSheet.create({
        body: {
            paddingTop: 30,
            paddingBottom: 65,
            paddingHorizontal: 20,
            fontFamily: "NotoSansJP-Regular",
        },
        orangebox: {
            backgroundColor: "#fa914d",
            paddingVertical: 10,
            textAlign: "center",
        },
        meta: {
            marginTop: 12,
            fontSize: 12,
        },
        metaList: {
            marginTop: 12,
            marginLeft: 12,
        },
        metaListItemElement02: {
            marginLeft: 12,
        },
        metaText: {
            marginTop: 24,
        },
        metaText02: {
            marginTop: 64,
        },
        title: {
            fontSize: 24,
            fontFamily: "NotoSansJP-Bold",
            color: "#0c3c64",
            lineHeight: 1.5,
        },
        table: {
            width: "100%",
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            fontFamily: "NotoSansJP-Regular",
            borderWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 1,
            flexDirection: "column"　　　　// ★テーブル本体の上の線を非表示にする
        },
        tableRow: {
            // margin: "auto",
            flexDirection: "row"
        },
        tableItem: {
            width: "12%",
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 0,
        },
        tableItemFlex1: {
            width: "28%",
            borderStyle: BORDER_STYLE,
            borderColor: BORDER_COLOR,
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 0,
        },
        tableCell: {
            fontSize: 6,
            padding: 5,
            minHeight: 25
        },
    })

    const getMonthString = () => {
        let dt = new Date();
        let y = dt.getFullYear();
        let m = ('00' + (dt.getMonth() + 1)).slice(-2);
        let d = ("00" + dt.getDate()).slice(-2);
        const result = y + '年' + m + '月' + d + '日';
        return result;
    }

    const profile = jsonData.profile;

    return (
        <Document>
            {/* <Page size="A4" style={styles.body} wrap> */}
            <Page size="A4" style={styles.body} wrap>
                <View style={styles.orangebox}>
                    <Text style={styles.title}>おだかるSNS運用</Text>
                    <Text style={styles.title}>月次SNS効果測定レポート</Text>
                    <Text style={styles.title}>Repeats</Text>
                </View>
                <View style={styles.meta}>
                    <Text>{getMonthString()}</Text>
                    <Text style={styles.metaText}>アカウント名 : {profile.name}</Text>
                    <Text style={styles.metaText}>よく使われるタグ</Text>
                    <View style={styles.metaList}>
                        <View style={styles.metaListItem}>
                            <Text style={styles.metaListItemElement01}>- 写真撮影 : 45</Text>
                            <Text style={styles.metaListItemElement02}>- 類似タグ : フォトグラフィ、カメラ技術、写真編集、風景写真</Text>
                        </View>
                        <View style={styles.metaListItem}>
                            <Text style={styles.metaListItemElement01}>- 旅行 : 40</Text>
                            <Text style={styles.metaListItemElement02}>- 類似タグ : 旅行計画、観光スポット、旅行体験、旅行ガイド</Text>
                        </View>
                        <View style={styles.metaListItem}>
                            <Text style={styles.metaListItemElement01}>- 料理 : 36</Text>
                            <Text style={styles.metaListItemElement02}>- 類似タグ : 料理レシピ、クッキング、料理教室、食事準備</Text>
                        </View>
                        <View style={styles.metaListItem}>
                            <Text style={styles.metaListItemElement01}>- イベント参加 : 22</Text>
                            <Text style={styles.metaListItemElement02}>- 類似タグ : イベント参加体験、イベント情報、イベントプランニング、イベントコーディネート</Text>
                        </View>
                        <View style={styles.metaListItem}>
                            <Text style={styles.metaListItemElement01}>- ファッション : 17</Text>
                            <Text style={styles.metaListItemElement02}>- 類似タグ : スタイル、衣服、ブランド、イベント</Text>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4" style={styles.body} wrap>
                <View>
                    {/* <InsightMetrics
                        metrics={profile.insights.metrics}
                        title="主要メトリクス"
                    />

                    <EngagementMetrics
                        metrics={profile.insights.engagement}
                        title="エンゲージメント指標"
                    /> */}

                    {/* <DemographicsSection demographics={profile.insights.demographics} /> */}
                </View>
            </Page>

        </Document>
    )

};

export default GeneratePDF