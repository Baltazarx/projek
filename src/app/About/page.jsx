"use client";
export default function () {
    const teamMembers = [
        { name: "Agus Eko Musantono", role: "Founder", image: "agus eko musantono.png" },
        { name: "Rhegysa Alvyanthi J", role: "Founder", image: "sasa.png" },
        { name: "Dandi Ajusta D.P.S", role: "Founder", image: "dandi.png" },
        { name: "Muhammad Riyo N.S", role: "Founder", image: "riyo.png" },
        { name: "Arienta Aulia H", role: "Founder", image: "arienta.png" },
        { name: "Kiky Restu N", role: "Founder", image: "kiky.png" },
        { name: "Erdiyanto Luthfi S", role: "Founder", image: "luthfi.png" },
        { name: "Pasya Wahyu P.N", role: "Founder", image: "pasya.png" }
    ];
    return (
        <div className="min-h-screen bg-gray-50 mt-20">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center">
                    <h1 className="text-3xl font-bold text-purple-600">Kami Menyediakan Produk Bunga Telang</h1>
                    <p className="text-xl text-purple-600">#Bungatelang</p>
                    <img src="tangan.png" alt="Hands holding purple flowers" className="mx-auto my-4"/>
                    <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 space-x-8">
                        <a href="#"><button className="flex items-center"><img src="icon/TT1.PNG" alt="TikTok" className="w-6 h-6 mx-2"/><span className="text-black"> TikTok</span></button></a>
                        <a href="#"><button className="flex items-center"><img src="icon/YT2.png" alt="YouTube" className="w-6 h-6 mx-2"/><span className="text-black"> YouTube</span></button></a>
                        <a href="#"><button className="flex items-center"><img src="icon/IG1.png" alt="Instagram" className="w-6 h-6 mx-2"/><span className="text-black"> Instagram</span></button></a>
                        <a href="#"><button className="flex items-center"><img src="icon/FB1.png" alt="Facebook" className="w-6 h-6 mx-2"/><span className="text-black"> Facebook</span></button></a>
                    </div>
                </section>
                <section className="text-gray-700 text-justify my-8">
                    <p>Selamat datang di Telasia, platform yang menyediakan produk Bunga Telang berkualitas tinggi bagi Anda yang peduli pada kesehatan dan keberlanjutan. Kami percaya bahwa solusi alami adalah cara terbaik untuk merawat tubuh sekaligus menjaga kelestarian lingkungan. Oleh karena itu, kami menghadirkan Bunga Telang sebagai produk unggulan, yang tidak hanya memiliki manfaat kesehatan tetapi juga memberi nilai estetika pada berbagai kebutuhan sehari-hari.</p>
                    <p>Bunga Telang telah lama dikenal akan khasiatnya dalam menjaga keseimbangan tubuh. Kandungan antioksidannya yang tinggi membantu melindungi tubuh dari radikal bebas dan memperlambat proses penuaan. Selain itu, bunga ini juga dikenal memiliki sifat anti-inflamasi yang dapat membantu mengurangi peradangan dan nyeri, tanpa efek samping yang mungkin timbul dari obat kimia berbahaya. Kami menyertakan produk kami dengan teliti dalam proses produksi untuk memastikan setiap produk yang Anda terima adalah yang terbaik.</p>
                    <p>Melalui platform ini, kami juga berupaya mengedukasi masyarakat tentang pentingnya mengonsumsi bahan-bahan alami dan kesehatan sehari-hari. Temukan berbagai tips dan artikel seputar kesehatan dari kami yang mudah diakses setiap hari. Dengan menyediakan informasi yang tepat, kami berharap dapat membantu Anda membuat keputusan yang lebih baik untuk mendukung kesehatan tubuh. Temukan berbagai produk kami dan rasakan manfaatnya untuk kesehatan dan kesejahteraan Anda.</p>
                </section>
                <section className="text-gray-700 my-8">
                    <h2 className="text-2xl font-bold text-purple-600">Tentang Kami?</h2>
                    <p>Kami adalah penyedia bibit, dan produk berbasis bunga telang (Clitoria ternatea) berkualitas tinggi. Bunga telang yang kaya antioksidan ini tak hanya cantik sebagai tanaman hias tetapi juga bermanfaat sebagai pewarna alami dan bahan herbal. Kami menyediakan bibit unggul yang mudah ditanam serta berbagai produk olahan bunga telang seperti teh bunga telang dan pewarna alami. Dengan komitmen pada kualitas, kami siap memenuhi kebutuhan Anda akan tanaman dan produk bunga telang.</p>
                </section>
                <img src="Tim.png" alt="Silhouette of people raising hands" className="w-full"/>
                <div className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-2/3">
                        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">Dari Mana Kita Mendaptkan Bunga Telang ?</h1>
                        <p className="text-base md:text-lg text-gray-700">
                        Kami bekerja sama dengan jejaring petani pilihan sebagai bagian dari infrastruktur penyediaan bunga telang berkualitas tinggi, setara dengan standar di negara-negara maju. Kami percaya bahwa dengan mengintegrasikan sektor pertanian lokal ini ke dalam ekosistem kami, kita dapat mempercepat tujuan bersama untuk menghadirkan produk telang berkualitas dan ramah lingkungan bagi masyarakat luas.
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <img src="kakek.png" alt="A farmer holding a tool, wearing a blue shirt and a straw hat" className="w-full h-auto"/>
                    </div>
                </div>
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-8">Profil Tim</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative">
                                    <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-lg mb-2" />
                                </div>
                                <div className="text-lg font-semibold text-black">{member.name}</div>
                                <div className="text-sm text-black">{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
