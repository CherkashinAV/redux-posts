import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = {
	posts: postsReducer,
	app: appReducer
}