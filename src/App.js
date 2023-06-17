import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import BlogContact from "./components/BlogContact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={BlogList} element={<BlogList />} />
        <Route
          path="/makaleler/:postId"
          component={BlogPost}
          element={<BlogPost />}
        />
        <Route
          exact
          path="/contact"
          component={BlogContact}
          element={<BlogContact />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
