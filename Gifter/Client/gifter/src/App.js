import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./providers/PostProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";
import { UserProfileProvider } from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <UserProfileProvider>
            <Header />
            <ApplicationViews />
          </UserProfileProvider>
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;