import { CREATE_POST, DELETE_POST } from "./types";

export const createPost = title => ({
	type: CREATE_POST,
	payload: {
		title,
		id: new Date().getTime()
	}
})

export const deletePost = id => ({
	type: DELETE_POST,
	payload: {
		id
	}
})