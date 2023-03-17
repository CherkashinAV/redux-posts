import { CREATE_POST, DELETE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_SKELETON, SHOW_ALERT, SHOW_SKELETON } from "./types";

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

export function fetchPosts(url) {
	return async dispatch => {
		dispatch(showLoader());
		let jsonResp;
		try {
			const resp = await fetch(url);
			jsonResp = await resp.json();
		}
		catch (e) {
			jsonResp = [];
			dispatch(showAlert('Something went wrong with fetching!'));
		}
		finally {
			setTimeout(() => {
				dispatch({
					type: FETCH_POSTS,
					payload: jsonResp
				});
				dispatch(hideLoader());
			}, 500)
		}
	}
}

export function showLoader() {
	return {
		type: SHOW_SKELETON
	}
}

export function hideLoader() {
	return {
		type: HIDE_SKELETON
	}
}


export function showAlert(text) {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text
		})
		setTimeout(() => {
			dispatch(hideAlert())
		}, 2000)
	}
}

export function hideAlert(text) {
	return {
		type: HIDE_ALERT
	}
}