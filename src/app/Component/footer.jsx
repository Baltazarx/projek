//@ts-check
"use client"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Company Description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-purple-600 text-xl font-bold mb-4">Telasia.</h2>
                        <p className="text-gray-600 text-base">
                            Memberikan manfaat Bunga Telang <br />terbaik dengan komitmen pada kualitas,<br /> kesehatan, dan keberlanjutan lingkungan <br /> untuk kehidupan yang lebih bermakna.
                        </p>
                    </div>
                    
                    {/* Company Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-purple-600 text-lg font-bold mb-4">COMPANY</h3>
                        <ul className="text-gray-600">
                            <li className="mb-2"><Link href={'/'}>Home</Link></li>
                            <li className="mb-2"><Link href={'/Profile'}>Profile</Link></li>
                            <li className="mb-2"><Link href={'/Blog'}>Blog</Link></li>
                            <li className="mb-2"><Link href={'/'}>Education</Link></li>
                        </ul>
                    </div>
                    
                    {/* Product Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-purple-600 text-lg font-bold mb-4">PRODUK</h3>
                        <ul className="text-gray-600">
                            <li className="mb-2"><Link href="#">Telang Kering</Link></li>
                            <li className="mb-2"><Link href="#">Bibit</Link></li>
                            <li className="mb-2"><Link href="#">Extract Bunga</Link></li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-purple-600 text-lg font-bold mb-4">NEWSLETTER</h3>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" 
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm">&copy; 2024, All Rights Reserved</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-600">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-600">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-600">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-600">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
