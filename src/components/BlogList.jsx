import "../App.css";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10; // Define the desired number of posts per page
  const visiblePageRange = 5; // Define the desired number of visible pagination buttons
  const halfRange = Math.floor(visiblePageRange / 2);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://baltikpostasi.com/wp-json/wp/v2/posts?page=${currentPage}&per_page=${postsPerPage}`
        );
        setPosts(response.data);
        setTotalPages(response.headers["x-wp-totalpages"]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [currentPage, postsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginationRange = () => {
    let startPage = currentPage - halfRange;
    let endPage = currentPage + halfRange;

    if (startPage < 1) {
      startPage = 1;
      endPage = visiblePageRange;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - visiblePageRange + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const paginationRange = getPaginationRange();
  const mediaBaseUrl = "https://baltikpostasi.com/?attachment_id="

  return (
    <div className="App">
      <h1>Headless Blog</h1>

      {posts.map((post) => (
        <div className="App-header" key={post.id}>
          <Link className="App-link" to={`/makaleler/${post.id}`}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          </Link>
          <div className="post-image">
            {post.featured_media && (
              <img src={mediaBaseUrl + post.featured_media} alt={post.title.rendered} />
            )}
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
        </div>
      ))}

      <div className="pagination">
        {paginationRange.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
