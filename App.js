import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  
import Home from './pages/Home';           
import About from './pages/About';       
// import PostDetail from './components/PostDetail';  
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        {/* <Route path="/post/:id" element={<PostDetail />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;