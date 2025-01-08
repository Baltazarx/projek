//@ts-check
"use client"

import React, { useState, useEffect } from 'react';

export default function Post8() {
    return (
        <div id="root">
            <Blog />
        </div>
    );
}

const Carousel = ({ images }) => {
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
            <div className="overflow-hidden relative h-96 rounded-xl">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

const Blog = () => {
    const images = [
        { src: "about1.png", alt: "A beautiful sunrise over a mountain range" },
        { src: "about2.png", alt: "A serene beach with crystal clear water" },
        { src: "about3.png", alt: "A bustling cityscape at night with bright lights" },
        { src: "about4.png", alt: "A tranquil forest with tall trees and sunlight filtering through" },
        { src: "about5.png", alt: "A picturesque countryside with rolling hills and a clear blue sky" }
    ];

    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-4xl font-bold text-center mb-8">Advancements in Herbal Medicine</h1>
            <Carousel images={images} />
            <div className="mt-8">
                <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci ipsum, efficitur a consectetur a, condimentum vestibulum mauris. Aenean luctus id arcu non vulputate. In et justo non mauris condimentum mattis. Vestibulum vitae augue interdum, vehicula est consequat, posuere tellus. Aenean urna dui, rutrum vitae ornare eu, condimentum sed quam. In dolor felis, efficitur ut finibus molestie, blandit non lectus. Nunc scelerisque eu velit nec accumsan. Praesent nec lacinia lectus. Integer ut velit quis pretium vulputate sagittis a velit. Sed pulvinar tincidunt metus, nec luctus diam. Suspendisse nec metus eleifend, imperdiet metus eu, commodo ex. Duis ex lectus, euismod non convallis et, scelerisque at purus.
                </p><br />
                <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci ipsum, efficitur a consectetur a, condimentum vestibulum mauris. Aenean luctus id arcu non vulputate. In et justo non mauris condimentum mattis. Vestibulum vitae augue interdum, vehicula est consequat, posuere tellus. Aenean urna dui, rutrum vitae ornare eu, condimentum sed quam. In dolor felis, efficitur ut finibus molestie, blandit non lectus. Nunc scelerisque eu velit nec accumsan. Praesent nec lacinia lectus. Integer ut velit quis pretium vulputate sagittis a velit. Sed pulvinar tincidunt metus, nec luctus diam. Suspendisse nec metus eleifend, imperdiet metus eu, commodo ex. Duis ex lectus, euismod non convallis et, scelerisque at purus.
                </p><br />
                <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci ipsum, efficitur a consectetur a, condimentum vestibulum mauris. Aenean luctus id arcu non vulputate. In et justo non mauris condimentum mattis. Vestibulum vitae augue interdum, vehicula est consequat, posuere tellus. Aenean urna dui, rutrum vitae ornare eu, condimentum sed quam. In dolor felis, efficitur ut finibus molestie, blandit non lectus. Nunc scelerisque eu velit nec accumsan. Praesent nec lacinia lectus. Integer ut velit quis pretium vulputate sagittis a velit. Sed pulvinar tincidunt metus, nec luctus diam. Suspendisse nec metus eleifend, imperdiet metus eu, commodo ex. Duis ex lectus, euismod non convallis et, scelerisque at purus.
                </p><br />
                <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci ipsum, efficitur a consectetur a, condimentum vestibulum mauris. Aenean luctus id arcu non vulputate. In et justo non mauris condimentum mattis. Vestibulum vitae augue interdum, vehicula est consequat, posuere tellus. Aenean urna dui, rutrum vitae ornare eu, condimentum sed quam. In dolor felis, efficitur ut finibus molestie, blandit non lectus. Nunc scelerisque eu velit nec accumsan. Praesent nec lacinia lectus. Integer ut velit quis pretium vulputate sagittis a velit. Sed pulvinar tincidunt metus, nec luctus diam. Suspendisse nec metus eleifend, imperdiet metus eu, commodo ex. Duis ex lectus, euismod non convallis et, scelerisque at purus.
                </p>
            </div>
        </div>
    );
};