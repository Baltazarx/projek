//@ts-check
export default function DaftarProduk() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 mx-96">
            <div className="flex flex-col items-center md:items-start md:w-1/3 p-4">
                <img src="dandi.jpg" alt="Profile picture of a person standing with arms crossed" className="rounded-lg mb-4 w-60 h-42" />
                <div className="text-left">
                    <h2 className="text-lg font-semibold mb-2">My email Address</h2>
                    <div className="flex items-center mb-1">
                        <i className="fas fa-envelope text-blue-600 mr-2"></i>
                        <span className="text-sm">DandiAjusata88@gmail.com</span>
                    </div>
                    <p className="text-gray-500 text-xs">1 month ago</p>
                    <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">+Add Email Address</button>
                </div>
            </div>
            <div className="md:w-2/3 p-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-gray-700">Nama</label>
                        <input type="text" value="Dandi ajusta" className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700">Jenis Kelamin</label>
                        <input type="text" value="Laki-Laki" className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700">Sebagai</label>
                        <input type="text" value="Mitra/Konsumen" className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    </div>
                    <div>
                        <label className="block text-gray-700">Kota</label>
                        <input type="text" value="Banyuwangi" className="w-full p-2 border rounded-lg bg-gray-100" readOnly />
                    </div>
                </div>
                <div className="flex mt-4">
                    <a href={'/Profile2'} className="button mr-2 flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-center"><button className="button1">Edit profile</button></a>
                    <a href={'/Dasbord'} className="button flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-center"><button className="button1">Dashbord mitra</button></a>
                </div>
            </div>
        </div>
    );
}
