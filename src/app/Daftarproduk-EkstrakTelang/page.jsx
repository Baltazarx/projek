//@ts-check
"use client";

import { useState } from "react";
import Image from "next/image";

export default function DaftarProduk() {
  // Menambahkan state untuk jumlah produk
  const [jumlah, setJumlah] = useState(1);

  // Fungsi untuk menambah jumlah
  const tambahJumlah = () => setJumlah(jumlah + 1);

  // Fungsi untuk mengurangi jumlah
  const kurangJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col mt-10 items-center">
          <Image
            src="/produk-ekstrak telang.png"
            alt="Bunga Telang"
            width={280}
            height={400}
            className="relative z-10"
          />
        </div>
        <div className="lg:w-2/3 lg:pl-8">
          <h1 className="text-xl font-bold text-gray-400 mb-2">
            Ekstrak Bunga Telang | Butterfly Flower Extract
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Telasia – Ekstrak Dari Bunga Telang - 100% Murni
          </h2>
          <p className="text-xl text-gray-600 mb-4">Rp 200.000</p>
          <p className="text-gray-700 mb-4">
            Ekstrak telang ini hasil olahan dari bunga telang (Clitoria ternatea) berkualitas tinggi yang diekstraksi untuk digunakan dalam pengobatan tradisional dan kuliner, terutama di Asia Tenggara dan India, karena kegunaannya sebagai pewarna alami dan bahan kesehatan.
          </p>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Detail</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>10gr Telang</li>
              <li>10ml Aqua</li>
              <li>Vit E</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Kebijakan Pengembalian</h3>
            <p className="text-gray-700">
              Mohon sertakan video pada saat unboxing untuk pengembalian produk cacat, kurang barang atau salah kirim dan infokan ke Customer Service StayCool.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Jumlah</h3>
            <div className="flex items-center space-x-2">
              <button onClick={kurangJumlah} className="px-2 py-1 border border-gray-300">-</button>
              <input type="text" value={jumlah} className="w-12 text-center border border-gray-300" readOnly />
              <button onClick={tambahJumlah} className="px-2 py-1 border border-gray-300">+</button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">MASUKAN KE DALAM KERANJANG</button>
            <a href={'/Checkout'}><button className="px-4 py-2 bg-purple-600 text-white rounded">BELI SEKARANG</button></a>
          </div>
        </div>
      </div>
    </main>
  );
}
