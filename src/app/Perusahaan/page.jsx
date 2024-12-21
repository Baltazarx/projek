"use client";

import { useState } from 'react';

export default function PersonalInfoForm() {
    const [selectedImageKTP, setSelectedImageKTP] = useState(null);
    const [selectedImageNPWP, setSelectedImageNPWP] = useState(null);
    const handleImageChange = (setter) => (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setter(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-full mb-8">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-user"></i>
                        </div>
                        <span className="ml-2 text-purple-500 font-semibold">Informasi Pribadi</span>
                    </div>
                    <div className="flex-grow border-t-2 border-purple-500 mx-4"></div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-check"></i>
                        </div>
                        <span className="ml-2 text-purple-500 font-semibold">Proses Verifikasi</span>
                    </div>
                    <div className="flex-grow border-t-2 border-purple-500 mx-4"></div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <span className="ml-2 text-purple-500 font-semibold">Selesai</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                    <div className="flex flex-col items-center">
                        <label htmlFor="photo-upload-ktp" className="w-full h-40 border-2 border-gray-300 flex items-center justify-center cursor-pointer">
                            {selectedImageKTP ? (
                                <img src={selectedImageKTP} alt="Uploaded KTP" className="w-full h-full object-cover" />
                            ) : (
                                <div>
                                    <i className="fas fa-camera text-purple-500 text-2xl"></i>
                                    <span className="text-purple-500 ml-2">Masukan Foto KTP</span>
                                </div>
                            )}
                        </label>
                        <input id="photo-upload-ktp" type="file" accept="image/*" className="hidden" onChange={handleImageChange(setSelectedImageKTP)} />

                        <label htmlFor="photo-upload-npwp" className="w-full h-40 border-2 border-gray-300 flex items-center justify-center mt-4 cursor-pointer">
                            {selectedImageNPWP ? (
                                <img src={selectedImageNPWP} alt="Uploaded NPWP" className="w-full h-full object-cover" />
                            ) : (
                                <div>
                                    <i className="fas fa-camera text-purple-500 text-2xl"></i>
                                    <span className="text-purple-500 ml-2">Masukan Foto NPWP</span>
                                </div>
                            )}
                        </label>
                        <input id="photo-upload-npwp" type="file" accept="image/*" className="hidden" onChange={handleImageChange(setSelectedImageNPWP)} />
                    </div>
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Bergabung sebagai</label>
                            <select className="w-full border-2 border-gray-300 p-2 mt-1" required>
                                <option>Organisasi</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Nama Lengkap</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Nama" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">NIK</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan NIK Anda" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Alamat Lengkap</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Alamat" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Pekerjaan</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Pekerjaan" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Nama Organisasi</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Nama" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Alamat Lengkap Organisasi</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Alamat" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Nomor NPWP</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan NPWP" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Website (Opsional)</label>
                            <input type="text" className="w-full border-2 border-gray-300 p-2 mt-1" placeholder="Masukan Nama" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Jenis Kelamin</label>
                            <div className="flex items-center mt-1">
                                <input type="radio" name="gender" className="mr-2" />
                                <label className="mr-4">Laki - Laki</label>
                                <input type="radio" name="gender" className="mr-2" />
                                <label>Perempuan</label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Agama</label>
                            <select className="w-full border-2 border-gray-300 p-2 mt-1" required>
                                <option>Agama</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Tanggal Lahir</label>
                            <input type="date" className="w-full border-2 border-gray-300 p-2 mt-1" required />
                        </div>
                    </div>
                </div>
                <a href={'/Proses'}><button className="bg-purple-500 text-white py-2 px-4 mt-8 rounded">Lanjutkan</button></a>
            </div>
        </div>
    );
}