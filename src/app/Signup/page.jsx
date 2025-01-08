"use client";

import { useState } from "react";

export default function () {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);

        // Validasi apakah confirm password sesuai dengan password
        if (e.target.value !== password) {
            setError("Passwords do not match");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error && password && confirmPassword) {
            alert("Password confirmed successfully!");
            // Logika submit di sini
        } else {
            alert("Please fix the errors before submitting.");
        }
    };

    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-2 text-black">Back to your digital life</h1>
                <p className="text-center text-gray-600 mb-6">Choose one of the options to go</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Masukan Email"
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <p className="text-center text-gray-600 mb-4">Or continue with</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                            <img src="icon/GOOGLE.png" alt="Google logo" />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                            <img src="icon/FB2.png" alt="Facebook logo" />
                        </button>
                    </div>
                    <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}