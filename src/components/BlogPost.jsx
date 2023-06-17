import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

  //const mediaBaseUrl = "https://buyutechaber.com/?attachment_id="

  return (
    <div className="App">
      <div className="App-header">
        <Link className="App-link" to={`/`}>
          Previous Page
        </Link>
        <h1
          className="app-title-blog"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
      </div>
      <div className="post-image">
            {post.featured_media && (
              <img src={post.guid.rendered} alt={post.title.rendered} />
            )}
          </div>
      <div className="App-content">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
      <footer>
        Created by{" "}
        <a href="https://kayacuneyt.com" target="_blank" rel="noreferrer">
          Cüneyt Kaya
        </a>{" "}
        - 2023
      </footer>
    </div>
  );
};

export default BlogPost;
