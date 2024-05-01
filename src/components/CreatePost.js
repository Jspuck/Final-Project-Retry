import React, { useState } from 'react';
import { supabase } from '../supabaseClient';  // Adjust the import path as needed

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');  // State to hold feedback message

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('Creating post...');  // Set a loading message
        const { error } = await supabase
            .from('posts')
            .insert([
                { title, content }
            ]);

        if (error) {
            console.error('Error creating post:', error);
            setMessage('Failed to create post. Please try again.');  // Display error message
        } else {
            setMessage('Post created successfully!');  // Display success message
            setTitle('');
            setContent('');
            setTimeout(() => setMessage(''), 3000);  // Clear message after 3 seconds
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <button type="submit">Create Post</button>
            {message && <div style={{ marginTop: '10px' }}>{message}</div>} {/* Display the message */}
        </form>
    );
}

export default CreatePost;
