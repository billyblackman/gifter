import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import { NewPostForm } from "./PostForm";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
          <NewPostForm />
      </Route>

      <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>
    </Switch>
  );
};

export default ApplicationViews;