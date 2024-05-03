// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns'; // Make sure to install date-fns if not already installed
import { supabase } from '../supabaseClient';  // Adjust the import path as needed

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) console.error('Error fetching posts', error);
            else setPosts(data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    if (loading) return <div>Loading posts...</div>;
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.content}</p>
                    <p><small>Posted {formatDistanceToNow(new Date(post.created_at))} ago</small></p>
                    <Link to={`/post/${post.id}/comments`}>View Comments</Link>
                </div>
            ))}
        </div>
    );
}

export default PostsList;
