//@ts-check
"use client";

import { useState } from "react";

export default function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah reload halaman saat form disubmit

        // Validasi input
        if (!email || !password) {
            setError("Email dan kata sandi tidak boleh kosong!");
            return;
        }

        // Logic untuk autentikasi/login, bisa panggil API atau lakukan validasi lain di sini
        console.log("Email:", email);
        console.log("Password:", password);
        // Contoh redirect setelah berhasil login
        window.location.href = '/Dasbord'; // Redirect ke dashboard atau halaman lainnya
    };

    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex min-h-screen">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-20 bg-white">
                    <button className="text-2xl mb-8">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <h1 className="text-3xl font-semibold mb-2 text-black">Masuk</h1>
                    <p className="text-black mb-8">Masuk dan kelola Dashboard anda</p>
                    <form className="w-full" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="mb-4">
                            <label className="block text-black mb-2">Email atau Nomor Telepon</label>
                            <input 
                                type="email" 
                                placeholder="Masukan Email atau Nomor Telepon Anda" 
                                className="w-full p-3 border rounded-md text-black" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-black mb-2">Kata Sandi</label>
                            <input 
                                type="password" 
                                placeholder="Masukan Kata Sandi Anda" 
                                className="w-full p-3 border rounded-md text-black" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-md">
                            Masuk
                        </button>
                    </form> 
                    <p className="mt-4 text-black">Belum Menjadi Mitra? <a href={'/GabungMitra'} className="text-purple-600">Gabung Mitra</a></p>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src="LoginMitra.png" alt="A woman in a red and green headscarf picking flowers in a garden" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
