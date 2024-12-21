"use client";

import { useEffect } from 'react';

export default function () {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/Home';
        }, 800);

        return () => clearTimeout(timer);
    }, []);

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
                        <span className="ml-2 text-purple-500 font-semibold">Selesai</span>
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                        <a href={'/Selesai'}><img src="selesai3.png" alt="Illustration of a person standing next to a large checkmark" className="w-auto h-72"/></a>
                    </div>
                    <p className="text-lg mb-4 text-dray-900 text-center text-black">Data Anda telah kami terima dan sedang dalam proses verifikasi. Proses ini biasanya memerlukan<br></br> waktu 1-2 hari kerja.Anda akan menerima notifikasi setelah verifikasi selesai.</p>
                </div>
        </div>
    );
}