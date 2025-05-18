import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/style/main.css'; // Still optional, in case you use custom styles

const OurPost = () => {
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4019/admin/getPost")
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data);
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

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:4019/admin/postDelete/${postId}`);
      if (response.status === 200) {
        setPosts(posts.filter(post => post._id !== postId));
        alert("Post deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("Error deleting post!");
    }
  };

  return (
    <section id="OutPost" className="py-5">
      <div className="container mb-4">
        <h2 className="text-center">Our Posts</h2>
      </div>

      <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={`../../src/Images/${post.post_image}`}
                  className="card-img-top"
                  alt={post.title}
                  style={{
  height: "300px",
  width: "100%",
  objectFit: "contain",  // 👈 yeh cover ki jagah use karo
  backgroundColor: "#f8f9fa", // Optional: thoda sa grey background agar image chhoti ho
  cursor: "pointer"
}}
                  onClick={() => openImage(`../../src/Images/${post.post_image}`)}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <button
                    onClick={() => deletePost(post._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div className="fullscreen-overlay" style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <button
            className="btn btn-light"
            onClick={closeImage}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              fontSize: '2rem'
            }}
          >
            &times;
          </button>
          <img src={selectedImage} alt="Full View" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </section>
  );
};

export default OurPost;
