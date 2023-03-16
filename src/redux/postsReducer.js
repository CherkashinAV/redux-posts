import { CREATE_POST, DELETE_POST } from "./types";

const initialState = {
	posts: []
}

export const postsReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_POST:
			return {...state, posts: [...state.posts, action.payload]}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload.id)
			}
		default:
			return state;
	}
}