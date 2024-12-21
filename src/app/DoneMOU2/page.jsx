"use client";
import { useEffect } from 'react';

export default function () {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full">
                <div className="w-full max-w-2xl">
                    <img src="selesai2.png" alt="Placeholder image" className="w-full h-auto mb-6" />
                </div>
                <p className="mb-6 text-center text-black text-2xl font-semibold">
                Terimakasih sudah menyetujui persyaratan
                layanan kami
                </p>
            </div>
        </div>
    );
}