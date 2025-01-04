import { useEffect, useMemo, useState } from 'react';
import { Flex, Select } from '@chakra-ui/react';

const FilterBar = ({ posts, onFilterChange }) => {
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');

    const years = useMemo(() => {
        return [...new Set(posts.map(post => new Date(post.timestamp).getFullYear()))].sort((a, b) => b - a);
    }, [posts])

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    
    useEffect(() => {
        const filteredData = posts.filter(post => {
            if (post.like_count === undefined) return false;
    
            const postDate = new Date(post.timestamp);
            const postYear = postDate.getFullYear();
            const postMonth = postDate.getMonth() + 1;
    
            return (selectedYear === 'all' || postYear === parseInt(selectedYear)) &&
                (selectedMonth === 'all' || postMonth === parseInt(selectedMonth));
        })

        onFilterChange(filteredData)
    }, [posts, selectedYear, selectedMonth])

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <Flex justifyContent="center" mt={4} mb={4}>
            <Select value={selectedYear} onChange={handleYearChange} mr={2}>
                <option value="all">全ての年</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}年</option>
                ))}
            </Select>
            <Select value={selectedMonth} onChange={handleMonthChange}>
                <option value="all">全ての月</option>
                {months.map(month => (
                    <option key={month} value={month}>{month}月</option>
                ))}
            </Select>
        </Flex>
    );
};

export default FilterBar;