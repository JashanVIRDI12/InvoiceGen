import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useCallback } from "react";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setError("");
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("User logged in successfully");
                window.location.href = "/";
            } catch (error) {
                setError(error.message);
                console.log(error.message);
            }
        },
        [email, password]
    );

    return (
        <div
            className="min-h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: 'url(https://cdn.pika.style/wallpapers/series-two/series-2-pika-wallpaper-3.png)', backgroundSize: 'cover' }}
        >
            <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-10 border border-gray-600">
                <h3 className="text-3xl text-center font-bold mb-6">Login</h3>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email address:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 input-background border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 input-background mb-5 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 mx-auto w-full text-white font-bold py-2 px-4 rounded-md hover:from-blue-800 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition">
                        Submit
                    </button>
                    <p className="forgot-password text-right">
                        New user? <a href="/register" className="text-gray-300 hover:text-gray-400 transition duration-100 mt-5 underline">Register Here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;



