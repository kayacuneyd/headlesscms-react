import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10; // Define the desired number of posts per page
  const visiblePageRange = 5; // Define the desired number of visible pagination buttons
  const halfRange = Math.floor(visiblePageRange / 2);

  // Fetch posts based on the current page
  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://buyutechaber.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${postsPerPage}`
      );
      setPosts(response.data);
      setTotalPages(response.headers["x-wp-totalpages"]);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // Trigger fetchPosts whenever currentPage changes

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Headless Blog</h1>

      {posts.map((post) => (
        <div className="App-header" key={post.id}>
          <Link className="App-link" to={`/makaleler/${post.id}`}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
        </div>
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}
      </div>
      <footer>
        Created by{" "}
        <a href="https://kayacuneyt.com" target="_blank" rel="noreferrer">
          Cüneyt Kaya
        </a>
      </footer>
    </div>
  );
};

export default BlogList;
