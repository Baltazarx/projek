//@ts-check
export default function Home() {
  const testimonials = [
    {
        name: "Dandi Donda",
        image: "https://placehold.co/50x50",
        text: "Saya sangat senang dengan pembelian ini. Barangnya sesuai dengan deskripsi, kualitasnya bagus, dan pengirimannya cepat. Penjual juga sangat ramah dan responsif terhadap pertanyaan saya. Paket datang dengan aman, karena dibungkus dengan sangat rapi dan teliti. Harga yang ditawarkan sangat terjangkau dibandingkan toko lain. Saya sudah mencoba produk ini, dan hasilnya benar-benar sesuai harapan! Sangat direkomendasikan bagi siapa saja yang mencari produk seperti ini. Terima kasih banyak, saya pasti akan kembali belanja di toko ini!",
        rating: 5
    },
    {
        name: "Sosa Siso",
        image: "https://placehold.co/50x50",
        text: "Teh telang ini tuh next level sih! Nggak cuma enak tapi literally bikin mood naik. Boleh lah buat daily routine pas lagi butuh vibe tenang dan damai.",
        rating: 4
    },
    {
        name: "Tom Holand",
        image: "https://placehold.co/50x50",
        text: "Gokil, ini teh telang tuh beneran hidden gem! Warnanya satisfying banget dan taste-nya soft banget, nggak ada aftertaste aneh. Worth every sip!",
        rating: 5
    }
];
return (
    <div className="bg-white">
        <div className="flex justify-center items-center py-10 bg-white gap-96 mt-20">
            <div className="flex flex-col items-start mr-96">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Rasakan Kebaikan</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-600">Bunga Telang</h2>
                <p className="text-gray-600 mt-2">Rasakan manfaat alami bunga telang untuk kesehatan Anda.</p>
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full flex items-center">
                    <i className="fas fa-shopping-cart mr-2"></i> Dapatkan Produk
                </button>
            </div>
            <div className="">
                <img src="LDTelang.png" alt="Bunga Telang" className="w-70 h-70 object-cover rounded-full" />
            </div>
        </div>
        <div className="flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-lg">
                <img src="Telang.png" alt="A bowl of vibrant blue butterfly pea flowers" className="w-65 h-auto rounded-lg" />
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <h2 className="text-xl font-bold text-purple-700">Bunga Telang Di kenal Akan Manfaatnya</h2>
                    <p className="mt-2 text-gray-600">
                        Bunga telang tidak hanya dikenal karena keindahan warnanya, tetapi juga memiliki sejumlah manfaat kesehatan dan kegunaan lainnya, terutama dalam pengobatan tradisional dan kuliner.
                    </p>
                    <a href={'/About'} className="mt-4 inline-flex items-center text-purple-600 hover:underline">
                        Pelajari Selanjutnya <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 bg-white">
            <h1 className="text-purple-600 text-2xl font-bold mb-2">Produk kami</h1>
            <p className="text-gray-600 mb-8">Kami menawarkan produk dari hasil pengolahan telang</p>
            <div className="flex flex-col items-center">
            <a href={'/Daftarproduk'}><img src="ekstrak telang.png" alt="Produk utama" className="mb-8" /></a>
                <div className="flex space-x-4">
                    <img src="https://placehold.co/50x50" alt="Produk 1" className="rounded-lg" />
                    <img src="https://placehold.co/50x50" alt="Produk 2" className="rounded-lg" />
                    <img src="https://placehold.co/50x50" alt="Produk 3" className="rounded-lg" />
                </div>
            </div>
        </div>
        <div className="display display-flex justify-center p-10 m-12">
            <h1 className="text-3xl font-bold text-purple-600">Testimoni</h1>
            <p className="text-gray-600 mb-6">Don't take our word for it. Trust our customers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={testimonial.image} alt={`Profile picture of ${testimonial.name}`} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h2 className="font-bold text-lg text-black ">{testimonial.name}</h2>
                                <div className="flex">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <i key={i} className="fas fa-star text-black"></i>
                                    ))}
                                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                        <i key={i} className="fas fa-star text-black"></i>
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
                <img src="video1.png" alt="Video 1" className="w-1/4 h-60 bg-gray-300 rounded-lg opacity-50"></img>
                <div className="w-1/2 h-96 bg-gray-300 rounded-lg"></div>
                <div className="w-1/4 h-60 bg-gray-300 rounded-lg opacity-50"></div>
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
