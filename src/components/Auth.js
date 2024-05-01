import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signIn({ email, password });
        if (error) console.error('Error logging in:', error);
        else alert('Logged in successfully!');
        setLoading(false);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) console.error('Error signing up:', error);
        else alert('Signup successful!');
        setLoading(false);
    };

    return (
        <div>
            <h1>Sign Up / Log In</h1>
            <form onSubmit={handleSignup}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" disabled={loading}>Sign Up</button>
            </form>
            <button onClick={handleLogin} disabled={loading}>Log In</button>
        </div>
    );
}

export default Auth;
