import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Videosection from './Components/Videosection';
import v1 from './Images/v1.mp4';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import PostSection from './Components/PostSection';
import AdminPost from './Components/AdminPost';
import GetVideo from "./Components/GetVideo";
import PostNav from "./Components/PostNav"; // Fixed import path (no space)

function App() {
  const location = useLocation();

  const path = location.pathname;

  // Conditions
  const showNav = path !== '/login' && path !== '/admin' && path !== '/post' && path !== '/gallery';
  const showPostNav = path === '/post' || path === '/gallery';

  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <>
      {/* Show background video only on Home page */}
      {path === "/" && (
        <div className="background-video-wrapper">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={v1} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Show Main Nav */}
      {showNav && <Nav />}

      {/* Show PostNav for post and gallery routes */}
      {showPostNav && <PostNav />}

      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/post" element={<PostSection />} />
        <Route path="/gallery" element={<GetVideo />} />
      </Routes>
    </>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
