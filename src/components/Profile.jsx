import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async (user) => {
        if (user) {
            try {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching user data:", error.message);
            }
        } else {
            console.log("No user is signed in.");
        }
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            fetchUserData(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    if (!userDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <p className="text-lg">No user details found.</p>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center text-white"
            style={{ backgroundImage: 'url(https://cdn.pika.style/wallpapers/series-two/series-2-pika-wallpaper-3.png)', backgroundSize: 'cover' }}
        >
            <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-10 border border-gray-600">
                <h3 className="text-3xl font-bold mb-4 text-center">Welcome, {userDetails.firstName}</h3>
                <div className="space-y-4">
                    <p><span className="font-semibold">Email:</span> {userDetails.email}</p>
                    <p><span className="font-semibold">First Name:</span> {userDetails.firstName}</p>
                    <p><span className="font-semibold">Last Name:</span> {userDetails.lastName}</p>
                </div>
                <button
                    className="bg-red-600 w-full mt-6 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-100"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;

