import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

function Posts({posts}) {
  return (
	 <div>
		{posts?.length
			? 
			posts.map((post) => <Post post={post} deletable={true} key={post.id}/>)
			:
			<h5>No posts available</h5>
		}
	 </div>
  )
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts.posts
	}
}

export default connect(mapStateToProps)(Posts)