//@ts-check
"use client";

export default function () {
    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-full mb-8">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-user"></i>
                        </div>
                        <span className="ml-2 text-purple-500 font-semibold">Informasi Pribadi</span>
                    </div>
                    <div className="flex-grow border-t-2 border-purple-500 mx-4"></div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-check"></i>
                        </div>
                        <span className="ml-2 text-purple-500 font-semibold">Proses Verifikasi</span>
                    </div>
                    <div className="flex-grow border-t-2 border-purple-500 mx-4"></div>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <button className="ml-2 text-purple-500 font-semibold">Selesai</button>
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                        <img src="selesai2.png" alt="Illustration of a person standing next to a large checkmark" className="w-auto h-80"/>
                    </div>
                    <p className="text-lg mb-4 text-black text-center">Verifikasi Sukses! Selamat sudah menjadi Mitra kami. Anda kini dapat melanjutkan ke Dashboard<br></br> sebagai Mitra.</p>
                    <a href={'/Dasbord'}><button className="bg-purple-500 text-white py-2 px-4 mt-8 rounded">Lanjutkan</button></a>
                </div>
        </div>
    );
}