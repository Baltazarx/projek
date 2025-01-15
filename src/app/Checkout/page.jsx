//@ts-check
"use client"
import { useState } from "react";
import Image from "next/image";

export default function DaftarProduk() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSaveInfo, setIsSaveInfo] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePaymentChange = (e) => setSelectedPaymentMethod(e.target.value);
  const handleSaveInfoChange = (e) => setIsSaveInfo(e.target.checked);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-purple-600 text-xl font-bold mb-4">Kontak</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email atau nomor HP"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-sm">
                Email saya dengan berita dan penawaran
              </label>
            </div>
          </div>
          <h2 className="text-purple-600 text-xl font-bold mb-4">Pengiriman</h2>
          <div className="mb-4">
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Negara</option>
            </select>
          </div>
          <div className="mb-4 flex space-x-4">
            <input
              type="text"
              placeholder="Nama Depan (Bebas)"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Nama Belakang"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Alamat"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Apartemen, suite, dll"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <input
              type="text"
              placeholder="Kota"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Kode Pos"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <select className="w-1/2 p-2 border border-gray-300 rounded">
              <option>Provinsi</option>
            </select>
            <input
              type="text"
              placeholder="Nomor HP"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="save-info"
              checked={isSaveInfo}
              onChange={handleSaveInfoChange}
              className="mr-2"
            />
            <label htmlFor="save-info" className="text-sm">
              Simpan informasi ini untuk lain kali
            </label>
          </div>
          <h2 className="text-purple-600 text-xl font-bold mb-4">Pembayaran</h2>
          <p className="text-sm mb-4">Semua transaksi aman dan terenkripsi</p>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="payment-method-gopay"
                name="payment-method"
                value="gopay"
                onChange={handlePaymentChange}
                checked={selectedPaymentMethod === "gopay"}
                className="mr-2"
              />
              <label htmlFor="payment-method-gopay" className="text-sm">
                Pembayaran melalui Mitra
              </label>
            </div>
            <div className="flex space-x-2">
              <img
                src="Rectangle 765.png"
                alt="Gopay logo"
                className="h-8"
              />
              <img
                src="Rectangle 766.png"
                alt="OVO logo"
                className="h-8"
              />
              <img
                src="Rectangle 767.png"
                alt="DANA logo"
                className="h-8"
              />
              <img
                src="Rectangle 768.png"
                alt="Livin logo"
                className="h-8"
              />
              <img
                src="Rectangle 769.png"
                alt="BCA logo"
                className="h-8"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Masukkan No Rekening"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <a href="#">
            <button className="w-full bg-purple-600 text-white p-2 rounded">
              Bayar Sekarang
            </button>
          </a>
        </div>
        <div className="w-full md:w-1/3 p-6 bg-gray-50">
          <div className="flex items-center mb-4">
            <img
              src="ekstrak telang.png"
              alt="Product image"
              className="h-16 w-16 object-cover rounded"
            />
            <div className="ml-4">
              <h3 className="text-sm font-semibold">
                Telasia - Ekstrak Dari Bunga Telang - 100% Murni
              </h3>
              <p className="text-sm">Rp 00.000</p>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Jumlah Keseluruhan</span>
              <span className="text-sm">Rp 00.000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Pengiriman</span>
              <span className="text-sm">Masukkan alamat pengiriman</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rp 00.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
