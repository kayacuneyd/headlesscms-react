import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={BlogList} element={<BlogList />} />
        <Route
          path="/post/:postId"
          component={BlogPost}
          element={<BlogPost />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
