//@ts-check
"use client";
export default function () {
  return (
    <div className="mt-12">
        <section className="bg-purple-100 text-center py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Bergabung Menjadi Mitra Kami</h1>
                <p className="text-purple-600 mb-6">Mitra kami memiliki kesempatan untuk mendapatkan keuntungan dan akses ke produk bunga telang yang berkualitas tinggi.</p>
                <img src="mitra-bg.png" alt="Two people shaking hands, one holding a tablet" className="w-auto h-auto"/>
            </div>
        </section>
        <section className="bg-purple-600 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img src="mitra-1.png" alt="Two people holding a basket of flowers" className="rounded-lg"/>
                </div>
                <div className="md:w-1/2 md:pl-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Jadilah Mitra Kami dan Mulailah Perjalanan Sukses Anda!</h2>
                    <p className="mb-6">Dengan bergabung sebagai mitra, Anda akan mendapatkan peluang untuk menjual produk bunga telang berkualitas tinggi dan mendapatkan dukungan penuh dari kami. Kami menyediakan semua yang Anda butuhkan untuk mencapai kesuksesan dalam bisnis Anda. Daftar sekarang dan jadikan bunga telang sebagai peluang bisnis menguntungkan!</p>
                    <div className="flex space-x-4">
                        <a href={'/LoginMitra'}><button className="bg-yellow-400 text-purple-700 font-bold py-2 px-4 rounded">Bergabung Sekarang</button></a>
                        <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded">Pelajari Lebih Lanjut...</button>
                    </div>
                </div>
            </div>
        </section>
        <div className="flex justify-center items-center py-10 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">Kemitraan dengan Petani Bunga Telang Berkualitas</h1>
                    <p className="text-gray-700 text-base md:text-lg">
                        Kami menjalin kemitraan strategis dengan petani bunga telang yang memiliki komitmen terhadap kualitas dan keberlanjutan. Melalui kolaborasi ini, kami memberikan dukungan penuh dalam bentuk pembelian langsung hasil panen, sistem pembayaran yang efisien, serta transparansi dalam setiap tahap kerjasama. Petani mitra kami memiliki akses ke pasar yang lebih luas dan stabil, berkat jaringan distribusi kami yang berkembang pesat.
                    </p>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                    <div className="relative">
                        <img src="mitra-2.png" alt="Farmer holding a phone and giving a thumbs up, with a background of Telasia logo" className="rounded-lg shadow-lg" />
                        <div className="absolute inset"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            );
        };