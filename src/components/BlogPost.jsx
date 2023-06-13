import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://buyutechaber.com/wp-json/wp/v2/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>{post.title.rendered}</h1>

        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
      </div>
    </div>
  );
};

export default BlogPost;
