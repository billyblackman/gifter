import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const apiUrl = "/api/post";

  const getToken = () => firebase.auth().currentUser.getIdToken();

  const [posts, setPosts] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged((u) => {
        setIsLoggedIn(!!u);
        setIsFirebaseReady(true);
      });
    }, []);

  const getAllPosts = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setPosts));
  
        
  const userPosts = (id) =>
    getToken().then((token) => 
      fetch(`${apiUrl}/getbyuser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.json())
        .then(setPosts));

  const getPost = (id) => 
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.json()));

  const addPost = (post) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }));

  return (
    <PostContext.Provider value={{ posts, getPost, userPosts, getAllPosts, addPost }}>
    {isFirebaseReady  
      ? props.children
      : <Spinner className="app-spinner dark"/>}
    </PostContext.Provider>
  );
};