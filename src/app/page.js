//@ts-check
"use client";

import React, { useState, useEffect } from 'react';

// Komponen Carousel untuk Produk
const ProductCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-full object-contain mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Home() {
    const testimonials = [
        {
            name: "Dandi Donda",
            image: "dandi.jpg",
            text: "Saya sangat senang dengan pembelian ini. Barangnya sesuai dengan deskripsi, kualitasnya bagus, dan pengirimannya cepat. Penjual juga sangat ramah dan responsif terhadap pertanyaan saya. Paket datang dengan aman, karena dibungkus dengan sangat rapi dan teliti. Harga yang ditawarkan sangat terjangkau dibandingkan toko lain. Saya sudah mencoba produk ini, dan hasilnya benar-benar sesuai harapan! Sangat direkomendasikan bagi siapa saja yang mencari produk seperti ini. Terima kasih banyak, saya pasti akan kembali belanja di toko ini!",
            rating: 5
        },
        {
            name: "Sosa Siso",
            image: "dandi.jpg",
            text: "Teh telang ini tuh next level sih! Nggak cuma enak tapi literally bikin mood naik. Boleh lah buat daily routine pas lagi butuh vibe tenang dan damai.",
            rating: 4
        },
        {
            name: "Njpasya",
            image: "dandi.jpg",
            text: "Gokil, ini teh telang tuh beneran hidden gem! Warnanya satisfying banget dan taste-nya soft banget, nggak ada aftertaste aneh. Worth every sip!",
            rating: 5
        }
    ];

    const productImages = [
        { src: "ekstrak telang.png", alt: "Produk utama" },
        { src: "bibit telang.png", alt: "Produk 1" },
        { src: "telang kering.png", alt: "Produk 2" }
    ];

    return (
        <div className="bg-white" style={{ paddingTop: '60px' }}>
            <div className="flex justify-center items-center py-10 bg-white">
                <div className="flex flex-col items-start mr-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Rasakan Kebaikan</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-600">Bunga Telang</h2>
                    <p className="text-gray-600 mt-2">Rasakan manfaat alami bunga telang untuk kesehatan Anda.</p>
                    <a href={'/Daftarproduk'}>
                        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full flex items-center">
                            <i className="fas fa-shopping-cart mr-2"></i> Dapatkan Produk
                        </button>
                    </a>
                </div>
                <div>
                    <img src="LDTelang.png" alt="Bunga Telang" className="w-70 h-70 object-cover rounded-full" />
                </div>
            </div>
            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-lg">
                    <img src="Telang.png" alt="A bowl of vibrant blue butterfly pea flowers" className="w-65 h-auto rounded-lg" />
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <h2 className="text-xl font-bold text-purple-700">Bunga Telang Di kenal Akan Manfaatnya</h2>
                        <p className="mt-2 text-gray-600">
                            Bunga telang tidak hanya dikenal karena keindahan warnanya, tetapi juga memiliki sejumlah manfaat
                        </p>
                        <p className="mt-2 text-gray-600">
                            kesehatan dan kegunaan lainnya, terutama dalam pengobatan tradisional dan kuliner.
                        </p>
                        <a href={'/About'} className="mt-4 inline-flex items-center text-purple-600 hover:underline">
                        Pelajari Selanjutnya <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div> *\\\\*
            <section className="bg-purple-600 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <ProductCarousel images={productImages} />
                </div>
                <div className="md:w-1/2 md:pl-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Produk Kami</h2>
                    <p className="mb-6 text-justify">Kami menawarkan rangkaian produk berkualitas berbahan dasar bunga telang, yaitu Butterfly Pea Flower Dried, Butterfly Pea Flower Extract, dan Butterfly Pea Flower Extract, untuk memenuhi kebutuhan Anda akan bahan alami yang bermanfaat. Telang kering kami diproses alami, cocok untuk teh herbal, pewarna makanan, dan minuman sehat. Ekstrak telang kami hadir dengan konsentrasi tinggi, praktis digunakan sebagai pewarna makanan, minuman, hingga bahan kosmetik. Sementara itu, bibit telang berkualitas unggul kami memungkinkan Anda menanam keindahan dan manfaat bunga telang sendiri di rumah. Semua produk kami dijamin alami, higienis, dan siap mendukung gaya hidup sehat Anda. Pesan sekarang untuk pengalaman unik dari bunga telang!</p>
                    <div className="flex space-x-4">
                        <a href={'/Blog'}><button className="bg-yellow-400 text-purple-700 font-bold py-2 px-4 rounded">Pelajari Lebih Lanjut...</button></a>
                    </div>
                </div>
            </div>
        </section>
            <div className="display display-flex justify-center p-10 m-12">
                <h1 className="text-3xl font-bold text-purple-600">Testimoni</h1>
                <p className="text-gray-600 mb-6">Don't take our word for it. Trust our customers</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt={`Profile picture of ${testimonial.name}`} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h2 className="font-bold text-lg text-black ">{testimonial.name}</h2>
                                    <div className="flex">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <i key={i} className="fas fa-star text-yellow-500"></i>
                                        ))}
                                        {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                            <i key={i} className="fas fa-star text-yellow-500"></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center py-12">
                <h1 className="text-3xl font-bold text-black py-8">Video Product</h1>
                <div className="flex justify-center items-center space-x-4">
                    {/* Gambar 1 */}
                    <img src="video1.png" alt="Video 1" className="w-1/4 h-60 object-cover rounded-lg" />
                    
                    {/* Gambar 2 */}
                    <div className="w-1/2 h-96">
                        {/* Gambar kedua dengan object-cover agar mengisi seluruh kontainer */}
                        <img src="video2.png" alt="Video 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    
                    {/* Gambar 3 */}
                        <img src="video3.png" alt="Video 3" className="w-1/4 h-60 object-cover rounded-lg" />
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}