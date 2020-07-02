import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import { NewPostForm } from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <NewPostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;