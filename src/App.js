import { useSelector } from "react-redux";
import AddPostForm from "./components/AddPostForm";
import AsyncPosts from "./components/AsyncPosts";
import Posts from "./components/Posts";

function App() {
  const alert = useSelector(state => state.app.alert)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Input</h1>
          <AddPostForm />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md">
          <h1>Sync posts</h1>
          <Posts />
        </div>
        <div className="col-md">
          <h1>Async posts</h1>
          <AsyncPosts />
        </div>
      </div>
      {alert && <div class="alert alert-danger fixed-bottom" role="alert">
        This is a danger alert—check it out!
      </div>}
    </div>
  );
}

export default App;
