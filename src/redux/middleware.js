import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const badWords = [
	'fuck',
	'shit',
	'python'
]

export function wordsCheckerMiddleware({ dispatch }) {
	console.log('here')
	return function(next) {
		return function(action) {
			if (action.type === CREATE_POST) {
				const foundedBadWords = badWords.filter((word) => action.payload.title.toLowerCase().includes(word))
				if (foundedBadWords.length) {
					return dispatch(showAlert(`We located some bad words: ${foundedBadWords.join(', ')}. Post won't be added.`))
				}
			}
			return next(action)
		}
	}
}