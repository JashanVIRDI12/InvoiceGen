import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './styles.css'

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                });
            }
            console.log("Successfully registered");
            navigate("/");
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: 'url(https://cdn.pika.style/wallpapers/series-two/series-2-pika-wallpaper-3.png)', backgroundSize: 'cover' }}
        >
            <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-10 border border-gray-600">
                <h2 className="text-3xl text-center font-bold mb-6">Register</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-1 block w-full px-3 py-2 input-background border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-1 block w-full px-3 py-2 input-background border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email:</label>
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
                            className="mt-1 block w-full px-3 py-2 input-background border border-gray-600 mb-5 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-pink-700 to-pink-900 mx-auto w-full text-white font-bold py-2 px-4 rounded-md hover:from-pink-800 hover:to-pink-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}




