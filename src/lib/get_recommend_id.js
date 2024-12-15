const recommend_data = [
    {
        "id": 1,
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "title": "企画名企画名企画名",
        "rank": "A"
    },
    {
        "id": 2,
        "url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "title": "企画名企画名企画名",
        "rank": "B"
    }
]

function get_recommend_data() {
    return recommend_data
}

export { get_recommend_data }

function get_recommend_ids(id) {
    const recommend_ids = recommend_data.map(data => data.id) 
    return recommend_ids
}
export default get_recommend_ids