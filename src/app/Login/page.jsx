"use client";

export default function () {
    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-center mb-2 text-black">Gabung Bersama Kami dan Dapatkan Produk</h1>
                    <p className="text-center text-gray-600 mb-6">Pilih Opsi Sesuai Kebutuhanmu</p>
                    <input
                        type="email"
                        placeholder="Masukan Email"
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <p className="text-center text-gray-600 mb-4">Atau Lanjutkan Dengan</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                            <img src="icon/GOOGLE.png" alt="Google logo" />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                            <img src="icon/FB2.png" alt="Facebook logo" />
                        </button>
                    </div>
                    <a href={'/Profile'}><button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</button></a>
                    <div className="flex justify-center mt-5">
                        <p>don't have account? </p><a href={'/Signup'} className="text-blue-600">Create</a>
                    </div>
                </div>
        </div>
    );
}