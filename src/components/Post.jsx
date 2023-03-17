import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/actions';

function Post({post, deletable}) {
	const dispatch = useDispatch();
	return (
		<div className="card mt-2">
			<div className="card-body">
				<div className="row justify-content-between">
					<div className="col">
						<h5>{post.title}</h5>
					</div>
					{deletable && <div className="col-4 d-flex justify-content-end">
						<button onClick={() => dispatch(deletePost(post.id))} className='btn btn-danger float-right'>X</button>
					</div>}
				</div>
			</div>
		</div>
	)
}

export default Post