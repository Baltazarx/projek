//@ts-check
"use client"

export default function Home() {
    return (
        <>
            <main className="container mx-auto px-4 py-8 mt-20">
                <div className="relative mb-8">
                    <img 
                        src="/Telangbg.png" 
                        alt="Blue flowers on a wooden surface" 
                        className="w-full rounded-lg" 
                    />
                    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                        <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">produk</span>
                        <h2 className="text-xl font-bold mt-2">Pemanfaatan bunga telang untuk berbagai macam produk alami</h2>
                        <div className="flex items-center mt-2 text-gray-500 text-sm">
                            <img 
                                src="icon/profile1.png" 
                                alt="Author" 
                                className="w-6 h-6 rounded-full mr-2" 
                            />
                            <span>Jason Francisco</span>
                            <span className="ml-2">August 20, 2022</span>
                        </div>
                    </div>
                </div>
                <section>
                    <h3 className="text-2xl font-bold mb-4">Latest Post</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Post 1 */}
                        <a href={'/Blog-post1'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about1.png" 
                                    alt="Post image 1" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">The Impact of Technology on the Workplace: How Technology is Changing</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 20, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 2 */}
                        <a href={'/Blog-post2'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about2.png" 
                                    alt="Post image 2" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">Exploring Sustainable Agricultural Practices</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 21, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 3 */}
                        <a href={'/Blog-post3'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about3.png" 
                                    alt="Post image 3" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">Advancements in Herbal Medicine</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 22, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 4 */}
                        <a href={'/Blog-post4'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about4.png" 
                                    alt="Post image 4" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">Growing Trends in Eco-Friendly Packaging</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 23, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 5 */}
                        <a href={'/Blog-post5'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about5.png" 
                                    alt="Post image 5" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">How Vertical Farming is Shaping the Future of Agriculture</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 24, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 6 */}
                        <a href={'/Blog-post6'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about6.png" 
                                    alt="Post image 6" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">The Future of Eco-Tourism in Developing Countries</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 25, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 7 */}
                        <a href={'/Blog-post7'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about7.png" 
                                    alt="Post image 7" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">Smart Farming: Integrating AI in Agriculture</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 26, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 8 */}
                        <a href={'/Blog-post8'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about8.png" 
                                    alt="Post image 8" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">How Urban Agriculture is Transforming Cities</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 27, 2022</span>
                                </div>
                            </div>
                        </a>

                        {/* Post 9 */}
                        <a href={'/Blog-post9'}>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96">
                                <img 
                                    src="about9.png" 
                                    alt="Post image 9" 
                                    className="w-full h-52 object-cover rounded-lg mb-4"
                                />
                                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">Farm</span>
                                <h4 className="text-lg font-bold mt-2">Exploring the Benefits of Regenerative Agriculture</h4>
                                <div className="flex items-center mt-2 text-gray-500 text-sm">
                                    <img 
                                        src="icon/profile1.png" 
                                        alt="Author" 
                                        className="w-6 h-6 rounded-full mr-2" 
                                    />
                                    <span>Author Name</span>
                                    <span className="ml-2">August 28, 2022</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">View All Post</button>
                    </div>
                </section>
            </main>
        </>
    );
}
