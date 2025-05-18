import { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/style/postSection.css'; // Import the CSS file for styling

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For full screen

  useEffect(() => {
    axios.get('https://indore-corpo-backed-4.onrender.com/api/getMedia')
      .then((res) => {
        setPosts(res.data.data);
        res.data.data.forEach((post) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  const openImage = (imgPath) => {
    setSelectedImage(imgPath);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='containerPost pb-3' id='Post'>
      <div className="post-list-container mt-0">
        <h2 className="heading">All Posts</h2>
        <div className="post-grid">
          {posts.map((post, index) => (
            <div className="post-card" key={index}>
              <div className="post_cart_image">

             
              <img
                src={`https://indore-corpo-backed-4.onrender.com${post.post_image}`}
                alt={post.title}
                className="post-image"
                onClick={() => openImage(`https://indore-corpo-backed-4.onrender.com${post.post_image}`)}
              />
              <div className="post-content p-0">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.content}</p>
              </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={closeImage}>×</button>
          <img src={selectedImage} alt="Full View" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}

export default PostList;
