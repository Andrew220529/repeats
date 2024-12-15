import { View, Text, StyleSheet, Font } from '@react-pdf/renderer';


const InsightMetrics = ({ metrics, title }) => {
    
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
            marginTop: 20,
        },
        title: {
            fontSize: 14,
            fontFamily: 'NotoSansJP-Bold',
            marginBottom: 10,
        },
        metricsGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
        },
        metricBox: {
            width: '30%',
            padding: 10,
            backgroundColor: '#f5f5f5',
            borderRadius: 5,
        },
        metricLabel: {
            fontSize: 10,
            color: '#666',
        },
        metricValue: {
            fontSize: 12,
            fontFamily: 'NotoSansJP-Bold',
            marginTop: 5,
        },
    });

    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.metricsGrid}>
                {metrics.map(metric => {
                    return (
                        <View style={styles.metricBox} key={metric.name}>
                            <Text style={styles.metricLabel}>{metric.title}</Text>
                            <Text style={styles.metricValue}>
                                {metric.total_value.value}
                            </Text>
                        </View>
                    )
                }
                )}
            </View>
        </View>
    );
};

export default InsightMetrics;