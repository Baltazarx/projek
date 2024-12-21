//@ts-check
"use client";

import { useState } from "react";

export default function () {
    const [selectedRole, setSelectedRole] = useState("");

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedRole === "Perorangan") {
            window.location.href = "/Perorangan";
        } else if (selectedRole === "Perusahaan") {
            window.location.href = "/Perusahaan";
        }
    };

    return (
        <div
            className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="flex flex-col justify-center items-start p-8 md:w-1/2 bg-white">
                    <button className="text-2xl mb-4">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <h1 className="text-3xl font-bold mb-2 text-black">Gabung Menjadi Mitra</h1>
                    <p className="text-black mb-6">Masukkan Informasi Anda untuk Bergabung sebagai Mitra</p>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="namaLengkap">
                                *Nama Lengkap
                            </label>
                            <input className="w-full px-3 py-2 border rounded text-black" id="namaLengkap" type="text" placeholder="Masukan Nama Lengkap Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="email">
                                *Alamat Email
                            </label>
                            <input className="w-full px-3 py-2 border rounded text-black" id="email" type="email" placeholder="Masukan Email Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="telepon">
                                *Nomor Telepon
                            </label>
                            <input className="w-full px-3 py-2 border rounded text-black" id="telepon" type="tel" placeholder="Masukan Nomor Telepon Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="kataSandi">
                                *Kata Sandi
                            </label>
                            <input className="w-full px-3 py-2 border rounded text-black" id="kataSandi" type="password" placeholder="Masukan Kata Sandi Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="konfirmasiKataSandi">
                                *Konfirmasi Kata Sandi
                            </label>
                            <input className="w-full px-3 py-2 border rounded text-black" id="konfirmasiKataSandi" type="password" placeholder="Masukan Kata Sandi Anda" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2 text-red-500" htmlFor="bergabungSebagai">
                                *Bergabung sebagai
                            </label>
                            <select className="w-full px-3 py-2 border rounded text-black" id="bergabungSebagai" onChange={handleRoleChange}>
                                <option value="">Pilih...</option>
                                <option value="Perorangan">Perorangan</option>
                                <option value="Perusahaan">Perusahaan</option>
                            </select>
                        </div>
                        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Gabung Sekarang</button>
                    </form>
                    <p className="mt-4 text-black">Sudah Punya Akun? <a href={'/LoginMitra'} className="text-blue-500">Masuk</a></p>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src="LoginMitra.png" alt="A woman in traditional attire picking flowers in a garden" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
