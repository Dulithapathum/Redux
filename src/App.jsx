import { useDispatch, useSelector } from "react-redux";
import { getPost, selectAllPosts } from "./Store/Reducer/postSlice";

const App = () => {
  // Use Redux's useSelector to get the entire posts object from the store
  const postObj = useSelector(selectAllPosts);

  // Use dispatch to trigger actions (like the async thunk getPost)
  const dispatch = useDispatch();

  // Log the posts object to track state changes
  console.log(postObj);

  return (
    <div>
      {/* Display loading or completed status based on the state */}
      {(postObj.loading === "pending" && <p>Loading......</p>) ||
        (postObj.loading === "completed" && <p>Fetch completed....</p>)}

      {/* Button to dispatch the getPost action to fetch data */}
      <button onClick={() => dispatch(getPost())}>Get Post</button>

      <hr />

      {/* Section to display all fetched posts */}
      <h1>All Posts</h1>
      {postObj.data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default App;
