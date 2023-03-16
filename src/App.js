import AddPostForm from "./components/AddPostForm";
import AsyncPosts from "./components/AsyncPosts";
import Posts from "./components/Posts";

function App() {
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
    </div>
  );
}

export default App;
