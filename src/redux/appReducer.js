import { HIDE_ALERT, HIDE_SKELETON, SHOW_ALERT, SHOW_SKELETON } from "./types"

const initialState = {
	postsLoading: false,
	alert: ''
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
				alert: action.payload
			}
		case HIDE_ALERT:
			return {
				...state,
				alert: ''
			}
		default: 
			return state
	}
}