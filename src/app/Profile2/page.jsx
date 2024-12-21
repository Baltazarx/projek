//@ts-check
export default function DaftarProduk() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 mx-96">
            <div className="flex flex-col items-center md:items-start md:w-1/3 p-4">
                <img src="https://placehold.co/300x400" alt="Person standing with arms crossed" className="rounded-lg mb-4" />
                <div className="text-left">
                    <h2 className="text-lg font-semibold mb-2">My email Address</h2>
                    <div className="flex items-center mb-2">
                        <i className="fas fa-envelope text-blue-600 mr-2"></i>
                        <div>
                            <p className="text-sm font-medium">DandiAjussta88@gmail.com</p>
                            <p className="text-xs text-gray-500">1 month ago</p>
                        </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md mt-2">+Add Email Address</button>
                </div>
            </div>
            <div className="md:w-2/3 p-4">
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Nama</label>
                        <input type="text" value="Dandi ajusta" className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700">Jenis Kelamin</label>
                        <select className="w-full p-2 border rounded-lg bg-gray-100">
                            <option>Laki-Laki</option>
                            <option>Wanita</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Sebagai</label>
                        <select className="w-full p-2 border rounded-lg bg-gray-100">
                            <option>Konsumen</option>
                            <option>Mitra</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Kota</label>
                        <select className="w-full p-2 border rounded-lg bg-gray-100">
                            <option>Banyuwangi</option>
                            <option>Gendo</option>
                            <option>Klatak</option>
                            <option>Dadapan</option>
                            <option>Bakungan</option>
                            <option>Kebalenan</option>
                        </select>
                    </div>
                    <div className="flex space-x-4">
                    <a href={'/Profile'} className="button mr-2 flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-center"><button className="button1">Simpan</button></a>
                    <a href="" className="button flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-center"><button className="button1">Batal</button></a>
                    </div>
                </form>
            </div>
        </div>
    );
}
