//import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BlogContact = () => {
  /* const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://baltikpostasi.com/wp-json/wp/v2/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  } */

  return (
    <div className="App">
      <div className="App-header">
        <Link className="App-link" to={`/`}>
          CONTACT Page
        </Link>
      </div>
    </div>
  );
};

export default BlogContact;
