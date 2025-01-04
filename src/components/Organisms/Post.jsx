import React, { Fragment } from 'react'
import PostCard from '@/components/Molecules/PostCard';

function Post({ data }) {
    return (
        <div className="cardWrap">
            {data.map((post) => {
                return (
                    <Fragment key={post.id}>
                        <PostCard data={post} />
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Post