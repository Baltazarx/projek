//@ts-check
"use client";
export default function () {
    return (
        <div className="p-6 bg-white text-black mt-20">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Hallo Dinda 👋</h1>
                <img src="https://placehold.co/50x50" alt="User profile" className="w-12 h-12 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full mb-4"></div>
                    <div className="text-center">
                        <p className="text-gray-500">Total Penghasilan</p>
                        <p className="text-2xl font-bold">Rp5,7Jt</p>
                        <p className="text-green-500">↑ 16% Bulan Ini</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full mb-4"></div>
                    <div className="text-center">
                        <p className="text-gray-500">Pengiriman</p>
                        <p className="text-2xl font-bold">24</p>
                        <p className="text-red-500">↓ 1% Bulan Ini</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-full mb-4"></div>
                    <div className="text-center">
                        <p className="text-gray-500">Aktif</p>
                        <p className="text-2xl font-bold">189</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Semua History</h2>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                        <a href={'/Send'}>
                            <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg">Kirim Barang</button>
                        </a>
                        <select className="bg-gray-100 px-4 py-2 rounded-lg">
                            <option>Sort by: Newest</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Tanggal Panen</th>
                                <th className="py-2 px-4 border-b">Jumlah Panen (Kg)</th>
                                <th className="py-2 px-4 border-b">Harga per Kg</th>
                                <th className="py-2 px-4 border-b">Total Penjualan</th>
                                <th className="py-2 px-4 border-b">Metode Pembayaran</th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { date: '2024-08-15', amount: '35.44 Kg', price: 'Rp205.450', total: 'Rp7.763.955', method: 'Transfer Bank', status: 'Lunas' },
                                { date: '2024-09-05', amount: '6.99 Kg', price: 'Rp205.450', total: 'Rp1.436.096', method: 'Transfer Bank', status: 'Belum Lunas' },
                                { date: '2024-10-03', amount: '25.29 Kg', price: 'Rp205.450', total: 'Rp5.195.830', method: 'Transfer Bank', status: 'Belum Lunas' },
                                { date: '2024-10-26', amount: '45.44 Kg', price: 'Rp205.450', total: 'Rp9.335.648', method: 'Transfer Bank', status: 'Lunas' },
                                { date: '2024-11-22', amount: '26.25 Kg', price: 'Rp205.450', total: 'Rp5.393.062', method: 'Transfer Bank', status: 'Lunas' },
                                { date: '2024-12-13', amount: '13.45 Kg', price: 'Rp205.450', total: 'Rp2.763.302', method: 'Transfer Bank', status: 'Lunas' },
                                { date: '2025-01-07', amount: '44.78 Kg', price: 'Rp205.450', total: 'Rp9.200.051', method: 'Transfer Bank', status: 'Lunas' },
                                { date: '2025-01-31', amount: '28.01 Kg', price: 'Rp205.450', total: 'Rp5.754.654', method: 'Transfer Bank', status: 'Belum Lunas' },
                            ].map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{item.date}</td>
                                    <td className="py-2 px-4 border-b">{item.amount}</td>
                                    <td className="py-2 px-4 border-b">{item.price}</td>
                                    <td className="py-2 px-4 border-b">{item.total}</td>
                                    <td className="py-2 px-4 border-b">{item.method}</td>
                                    <td className="py-2 px-4 border-b">
                                        <span className={`px-2 py-1 rounded-lg ${item.status === 'Lunas' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-500">Menampilkan data 1 hingga 8 dari 40 entri</p>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-purple-600 text-white rounded-lg">1</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">2</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">3</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">4</button>
                        <span className="px-3 py-1">...</span>
                        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg">40</button>
                    </div>
                </div>
            </div>
        </div>
    );
}