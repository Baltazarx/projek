"use client";

export default function () {
    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full">
                <div className="w-full max-w-2xl">
                    <img src="selesai1.png" alt="Placeholder image" className="w-full h-auto mb-6" />
                </div>
                <p className="mb-6 text-center text-black text-lg font-semibold">
                    Unduh dan print untuk menandai barang yang anda kirim
                </p>
                <div className="flex space-x-6">
                    <a href="#"><button className="px-8 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 text-lg">Unduh</button></a>
                    <a href={'/DoneMOU2'}><button className="px-8 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 text-lg">Selesai</button></a>
                        
                </div>
            </div>
        </div>
    );
}
