import { View, Text, StyleSheet, Font } from '@react-pdf/renderer';
import DemographicsChart from './DemographicsChart';


const DemographicsSection = ({ demographics }) => {
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

    const styles = StyleSheet.create({
        section: {
            marginTop: 30,
        },
        title: {
            fontSize: 16,
            fontFamily: 'NotoSansJP-Bold',
            marginBottom: 15,
        },
        categoryTitle: {
            fontSize: 14,
            fontFamily: 'NotoSansJP-Bold',
            marginTop: 20,
            marginBottom: 10,
            color: '#666',
        },
    });

    return (
        <View style={styles.section}>
            <Text style={styles.title}>ユーザー属性分析</Text>

            <Text style={styles.categoryTitle}>エンゲージメントの高いオーディエンスの利用者層データ</Text>
            <DemographicsChart title="年齢層" data={demographics.engaged.age} type="age" />
            <DemographicsChart title="都市" data={demographics.engaged.city} type="city" />
            <DemographicsChart title="国" data={demographics.engaged.country} type="country" />
            <DemographicsChart title="性別" data={demographics.engaged.gender} type="gender" />

            <Text style={styles.categoryTitle}>リーチしたオーディエンスの利用者層データ</Text>
            <DemographicsChart title="年齢層" data={demographics.reached.age} type="age" />
            <DemographicsChart title="都市" data={demographics.reached.city} type="city" />
            <DemographicsChart title="国" data={demographics.reached.country} type="country" />
            <DemographicsChart title="性別" data={demographics.reached.gender} type="gender" />

            <Text style={styles.categoryTitle}>フォロワーの利用者層データ</Text>
            <DemographicsChart title="年齢層" data={demographics.follower.age} type="age" />
            <DemographicsChart title="都市" data={demographics.follower.city} type="city" />
            <DemographicsChart title="国" data={demographics.follower.country} type="country" />
            <DemographicsChart title="性別" data={demographics.follower.gender} type="gender" />
        </View>
    );
};

export default DemographicsSection;