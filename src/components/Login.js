// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (response.data.success) {
                setMessage('Login successful!');
                navigate('/Event'); // Redirect to the /Event page upon success
            } else {
                setMessage(response.data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h2>Login Page</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign In</button>
                {message && <p className="error-message">{message}</p>}
            </form>
        </div>
    );
}

export default Login;