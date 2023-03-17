import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions';
import Post from './Post'
import Skeleton from './Skeleton';

function AsyncPosts() {
	const dispatch = useDispatch();
	const posts = useSelector(state => 
		state.posts.fetchedPosts
	)
	const loading = useSelector(state => 
		state.app.postsLoading
	)

	if (loading) {
		return <Skeleton />
	}

	const url = 'https://jsonplaceholder.typ=code.com/posts?_limit=5';
	return (
			<div>
				{posts?.length
					? 
					posts.map((post) => <Post post={post} key={post.id}/>)
					:
					<button onClick={() => dispatch(fetchPosts(url))} className='btn btn-primary'>Load</button>
				}
			</div>
	)
}

export default AsyncPosts