import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Auth from './components/Auth';
import './components/styles.css'; // Ensure this path is correct

function App() {
    console.log("App component rendering");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} /> {/* Ensure this component is correctly imported and spelled */}
                <Route path="/post/:id" element={<Post />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default App;
