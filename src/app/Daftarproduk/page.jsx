//@ts-check
"use client";

import Link from "next/link"; // Import Link dari Next.js

export default function DaftarProduk() {
  const products = [
    {
      image: "/produk-bibit telang.png",
      title: "Bibit Telang | Butterfly Pea Seeds",
      price: "Rp 36.900",
      discount: "",
      originalPrice: "",
      location: "",
      rating: "4.5",
      sold: "10RB+ Terjual",
      badge: "",
      ad: "",
      description: "Bibit telang berkualitas tinggi ini siap ditanam untuk menghasilkan...",
      link: "/Daftarproduk-BibitTelang", // Ubah link untuk produk pertama
    },
    {
      image: "/produk-telang kering.png",
      title: "Telang Kering | Dried Butterfly Pea Flower",
      price: "Rp 2.198.000",
      discount: "",
      originalPrice: "",
      location: "",
      rating: "5.0",
      sold: "10 Terjual",
      badge: "",
      ad: "",
      description: "Telang kering ini berasal dari bunga telang (Clitoria ternatea) pilihan...",
      link: "/Daftarproduk-TelangKering", // Ubah link untuk halaman produk
    },
    {
      image: "/produk-ekstrak telang.png",
      title: "Ekstrak Bunga Telang | Butterfly Flower Extract",
      price: "Rp 169.000",
      discount: "",
      originalPrice: "",
      location: "",
      rating: "4.9",
      sold: "10RB+ Terjual",
      badge: "",
      ad: "",
      description: "Ekstrak telang ini hasil olahan dari bunga telang (Clitoria ternatea)...",
      link: "/Daftarproduk-EkstrakTelang", // Ubah link untuk produk ketiga
    },
  ];

  function ProductCard({ product }) {
    return (
      <a href={product.link}>
      <div className="border p-4 rounded-lg shadow-md w-64 hover:shadow-xl hover:border-purple-600 hover:scale-105 transform transition duration-300">
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
        <div className="text-sm text-gray-500 mb-2">{product.description}</div>
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <div className="text-red-500 font-bold text-xl mb-2">{product.price}</div>
        <div className="text-gray-500 line-through mb-2">{product.originalPrice}</div>
        <div className="text-yellow-500 font-bold mb-2">{product.discount}</div>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">
            <i className="fas fa-star"></i>
          </span>
          <span>{product.rating}</span>
          <span className="text-gray-500 ml-2">{product.sold}</span>
        </div>
        <div className="text-gray-500 mb-2">{product.location}</div>
        {product.badge && (
          <div className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs inline-block mb-2">
            {product.badge}
          </div>
        )}
        {product.ad && (
          <div className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs inline-block">
            {product.ad}
          </div>
        )}
      </div>
      </a>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold text-center mb-8">Daftar Produk Terbaik</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
}
