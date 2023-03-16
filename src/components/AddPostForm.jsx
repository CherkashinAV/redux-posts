import React, { useRef } from 'react'
import { createPost } from '../redux/actions';
import { connect } from 'react-redux';

function AddPostForm({createPost}) {
	const input = useRef(null)

	function submitHandler(e) {
		e.preventDefault();
		const inputValue = input.current.value
		if (!inputValue) {
			return;
		}
		createPost(input.current.value)
		input.current.value = ''
	}

	return (
		<form onSubmit={submitHandler}>
			<input ref={input} type="text" className="form-control" id="title"></input>
			<button type="submit" className="btn btn-primary mt-2">Add</button>
		</form>
	)
}


const mapDispatchToProps = {
	createPost
} 

export default connect(null, mapDispatchToProps)(AddPostForm)