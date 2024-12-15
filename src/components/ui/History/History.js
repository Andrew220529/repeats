import React from 'react'

function History({ data }) {
    return (
        <li>
            <img src={data.localImgUrl} alt={data.localName} />
        </li>
    )
}

export default History