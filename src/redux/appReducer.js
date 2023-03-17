import { HIDE_ALERT, HIDE_SKELETON, SHOW_ALERT, SHOW_SKELETON } from "./types"

const initialState = {
	postsLoading: false,
	alert: false
}

export const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_SKELETON:
			return {
				...state,
				postsLoading: true
			}
		case HIDE_SKELETON:
			return {
				...state,
				postsLoading: false
			}
		case SHOW_ALERT:
			return {
				...state,
				alert: true
			}
		case HIDE_ALERT:
			return {
				...state,
				alert: false
			}
		default: 
			return state
	}
}