import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import { useParams } from "react-router-dom";

const UserPostList = () => {
    
  //const [posts, userPosts] = useState();
  const [ posts, setPosts ] = useState([]);
  const { userPosts } = useContext(PostContext);
  const { id } = useParams();

  useEffect(() => {
    userPosts(id).then(setPosts);
  }, []);
  debugger

  if (!posts) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPostList;