import "../App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://buyutechaber.com/wp-json/wp/v2/posts`
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Headless Blog</h1>

      {posts.map((post) => (
        <div className="App-header" key={post.id}>
          <Link className="App-link" to={`/post/${post.id}`}>
            <h2>{post.title.rendered}</h2>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
        </div>
      ))}
    </div>
  );
};

export default App;
