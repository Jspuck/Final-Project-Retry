import React, { useEffect, useState, useCallback } from 'react'; // Import useCallback
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Post() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Use useCallback to memoize fetchPost function
    const fetchPost = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single();
        setLoading(false);
        if (error) {
            console.error('Error fetching post:', error);
        } else {
            setPost(data);
            setTitle(data.title);
            setContent(data.content);
        }
    }, [id]); // Depend on id, as it's used inside the function

    // Effect for fetching post details
    useEffect(() => {
        fetchPost();
    }, [fetchPost]); // Include fetchPost as a dependency

    const handleDelete = async () => {
        const { error } = await supabase
            .from('posts')
            .delete()
            .match({ id });
        if (error) {
            console.error('Error deleting post:', error);
        } else {
            alert('Post deleted successfully!');
            navigate('/');
        }
    };

    const handleUpdate = async () => {
        const { error } = await supabase
            .from('posts')
            .update({ title, content })
            .match({ id });
        if (error) {
            console.error('Error updating post:', error);
        } else {
            alert('Post updated successfully!');
            setEditMode(false);
            fetchPost();
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Post not found.</div>;

    return (
        <div>
            {editMode ? (
                <>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

export default Post;
