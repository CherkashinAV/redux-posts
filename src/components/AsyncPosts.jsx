import React from 'react'
import Post from './Post'

function AsyncPosts({posts}) {
  return (
		<div>
			{posts?.length
				? 
				posts.map((post) => <Post title={post}/>)
				:
				<h5>No posts available</h5>
			}
		</div>
  )
}

export default AsyncPosts