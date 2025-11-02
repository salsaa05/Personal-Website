import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
				projects
			</h3>

			{/* === Proyek 1 === */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/kasir.png"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Web Aplikasi Manajemen Kasir 
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Web Aplikasi Manajemen Kasir ini dirancang untuk membantu proses transaksi penjualan di toko 
						agar lebih cepat, efisien, dan terorganisir. Sistem dikembangkan menggunakan 
						PHP Native, MySQL, dan Bootstrap dengan antarmuka yang responsif serta mudah digunakan oleh kasir maupun admin.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							PHP
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							MySQL
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Bootstrap
						</span>
					</div>
				</div>
			</div>

			{/* === Proyek 2 === */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/bukutamu.png" 
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Web Sistem Buku Tamu Perpustakaan
					</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Proyek ini merupakan aplikasi berbasis web yang dirancang untuk membantu pengelolaan data 
						buku tamu di perpustakaan. Sistem ini memungkinkan pengunjung untuk mengisi data kunjungan 
						secara digital, sehingga mempermudah proses pencatatan dan rekapitulasi data tamu. 
						Dibangun menggunakan PHP Native, MySQL, 
						dan Bootstrap dengan tampilan antarmuka yang responsif dan mudah digunakan..
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Web App
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							PHP
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							MySQL
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

