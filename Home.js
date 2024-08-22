import React from 'react';
 import PostList from '../components/PostList';
import './Home.css';  

function Home() {
  return (
    <div className="home">
      <br></br>
      <img src="rose.webp" alt="Hero" className="hero-image"  />
      
      <h1>Blog Posts</h1>
      <PostList />
      <section className="info">
        <h2>About Our Blog</h2>
        <p>
          Welcome to our blog, where we share the latest updates and insights on various topics. 
          Stay tuned for exciting content and engaging posts that cater to your interests.
        </p>
      </section>
    </div>
  );
}

export default Home;
