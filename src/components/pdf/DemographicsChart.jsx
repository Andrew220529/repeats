import { View, Text, StyleSheet, Font } from '@react-pdf/renderer';



const formatLabel = (value, type) => {
    const styles = StyleSheet.create({
        section: {
            marginTop: 10,
            padding: 15,
            backgroundColor: '#f8f9fa',
            borderRadius: 5,
        },
        title: {
            fontSize: 12,
            fontFamily: 'NotoSansJP-Bold',
            marginBottom: 10,
        },
        barChart: {
            marginTop: 8,
        },
        bar: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
        },
        barLabel: {
            width: '20%',
            fontSize: 8,
            color: '#666',
        },
        barContainer: {
            width: '65%',
            height: 16,
            backgroundColor: '#eee',
            borderRadius: 4,
        },
        barValue: {
            height: '100%',
            backgroundColor: '#fa914d',
            borderRadius: 4,
        },
        barText: {
            width: '15%',
            fontSize: 8,
            marginLeft: 8,
            color: '#333',
        },
    });

    switch (type) {
        case 'age':
            return `${value}歳`;
        case 'gender':
            return value === 'M' ? '男性' : value === 'F' ? '女性' : 'その他';
        default:
            return value;
    }
};

const DemographicsChart = ({ title, data, type }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.barChart}>
                {data.map((item) => {
                    const percentage = (item.value / total) * 100;
                    return (
                        <View style={styles.bar} key={item.dimension_values[0]}>
                            <Text style={styles.barLabel}>
                                {formatLabel(item.dimension_values[0], type)}
                            </Text>
                            <View style={styles.barContainer}>
                                <View
                                    style={[
                                        styles.barValue,
                                        { width: `${percentage}%` },
                                    ]}
                                />
                            </View>
                            <Text style={styles.barText}>{percentage.toFixed(1)}%</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default DemographicsChart;