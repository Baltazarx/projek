"use client";

import { useState } from "react";

export default function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex justify-center items-center bg-white min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
                <div className="text-gray-800">
                    <p className="mb-4">
                        <strong>Pasal 1: Maksud dan Tujuan</strong><br />
                        MoU ini dibuat untuk mengatur kesepakatan pengiriman barang antara Pihak Pengirim dan Pihak Penerima, serta untuk mengantisipasi potensi penyusutan berat barang yang dapat terjadi selama pengiriman.
                    </p>
                    <p className="mb-4">
                        <strong>Pasal 2: Deskripsi Barang dan Pengiriman</strong><br />
                        • Jenis Barang: [Jenis Barang]<br />
                        • Berat Awal Barang: [1 kg] (sesuai kondisi sebelum pengiriman)<br />
                        • Berat Minimum Diterima: Pihak Penerima sepakat untuk menerima barang dengan asumsi bahwa penyusutan terjadi akibat faktor transportasi, penyimpanan, atau kondisi lain yang wajar.
                    </p>
                    <p className="mb-4">
                        <strong>Pasal 3: Penyusutan Berat</strong><br />
                        • Pihak Pengirim dan Pihak Penerima memahami bahwa barang yang dikirim mungkin mengalami penyusutan berat selama proses pengiriman hingga 50% dari berat awal.<br />
                        • Pihak Penerima menyatakan persetujuan untuk menerima barang dengan berat yang berkurang hingga mencapai batas minimum 0,5 kg.
                    </p>
                    <p className="mb-4">
                        <strong>Pasal 4: Pengembalian dan Kompensasi</strong><br />
                        • Jika berat barang yang diterima kurang dari 0,5 kg, maka Pihak Penerima berhak mengajukan permintaan kompensasi atau pengiriman ulang barang sesuai kesepakatan lebih lanjut antara kedua belah pihak.<br />
                        • Pihak Pengirim bertanggung jawab atas penanganan kompensasi atau pengiriman ulang barang yang tidak memenuhi ketentuan berat minimum tersebut.
                    </p>
                    <p className="mb-4">
                        <strong>Pasal 5: Penutup</strong><br />
                        MoU ini disepakati oleh kedua belah pihak dan berlaku sebagai acuan dasar dalam proses pengiriman barang terkait ketentuan penyusutan berat.
                    </p>
                </div>
                <div className="flex items-center mt-4">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        className="mr-2" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                    />
                    <label htmlFor="terms" className="text-gray-700">Setuju dengan Syarat & Ketentuan</label>
                </div>
                <a href={'/DoneMOU1'}><button 
                    className={`mt-4 w-full py-2 rounded-lg ${isChecked ? 'bg-purple-600' : 'bg-gray-400'} text-white`}
                    disabled={!isChecked}
                >
                    Lanjut Untuk Pengiriman
                </button>
                </a>
            </div>
        </div>
    );
}