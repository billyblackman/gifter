import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./providers/PostProvider";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <div className="App">
      <Router>
        <PostProvider>
          <ApplicationViews />
        </PostProvider>
      </Router>
    </div>
  );
}

export default App;