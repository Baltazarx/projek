//@ts-check
"use client";

import { useState } from "react";

export default function Header() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);
    const videoUrls = files.map((file) => URL.createObjectURL(file));
    setVideos((prevVideos) => [...prevVideos, ...videoUrls]);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-white mx-32 mt-20">
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
          <h2 className="text-white bg-purple-600 p-2 rounded-t-lg text-lg font-semibold">Rekomendasi</h2>
          <ul className="p-4">
            <li className="mb-2 text-black">Tambah min. 3 foto produk</li>
            <li className="mb-2 text-black">Tambah video</li>
            <li className="mb-2 text-black">Buat deskripsi dengan min. 100 Karakter</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3">
          <h2 className="text-purple-600 text-lg font-semibold mb-4">Informasi produksi</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Foto Produk <span className="text-red-500">*</span> <span className="text-gray-500">Foto 1:1</span>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-600 hover:file:bg-purple-100"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Uploaded ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">Video Produk</label>
            <input
              type="file"
              accept="video/mp4"
              onChange={handleVideoUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-600 hover:file:bg-purple-100"
            />
            <ul className="text-black text-sm mt-2">
              <li>File maks harus 10mb dengan resolusi tidak melebihi 1280 x 1280 px</li>
              <li>Durasi 10-60 detik</li>
              <li>Format mp4</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-4">
              {videos.map((src, index) => (
                <video key={index} src={src} controls className="w-32 h-32 object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Deskripsi</label>
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-lg text-black"
              placeholder="Isi deskripsi di sini (opsional)"
            ></textarea>
          </div>
          <a href={'/MOU'}><button className="w-full bg-purple-600 text-white py-2 rounded-lg">Selesai</button></a>
        </div>
      </div>
    </>
  );
}