import { E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as $$AdminLayout } from "./AdminLayout_C-m_7sIV.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import path from "node:path";
import fs from "node:fs/promises";
//#region src/pages/admin/artikel/tambah.astro
var tambah_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tambah,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Tambah = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tambah;
	let errorMsg = "";
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		const judul = data.get("judul");
		const slug = data.get("slug");
		const kategori = data.get("kategori");
		const penulis = data.get("penulis") || "Admin Malang Raya";
		const kutipan = data.get("kutipan");
		const konten = data.get("konten");
		let foto_url = "";
		const fotoFile = data.get("foto_file");
		if (fotoFile && fotoFile.size > 0) {
			const buffer = Buffer.from(await fotoFile.arrayBuffer());
			const fileName = Date.now() + "-" + fotoFile.name.replace(/\s+/g, "-");
			const filePath = path.join(process.cwd(), "public", "img", fileName);
			await fs.writeFile(filePath, buffer);
			foto_url = "/img/" + fileName;
		} else foto_url = data.get("foto_url") || "";
		let foto_konten_url = "";
		const fotoKontenFile = data.get("foto_konten_file");
		if (fotoKontenFile && fotoKontenFile.size > 0) {
			const buffer = Buffer.from(await fotoKontenFile.arrayBuffer());
			const fileName = Date.now() + "-konten-" + fotoKontenFile.name.replace(/\s+/g, "-");
			const filePath = path.join(process.cwd(), "public", "img", fileName);
			await fs.writeFile(filePath, buffer);
			foto_konten_url = "/img/" + fileName;
		} else foto_konten_url = data.get("foto_konten_url") || "";
		const foto_konten_alt = data.get("foto_konten_alt") || "";
		const foto_alt = data.get("foto_alt") || "";
		const { error } = await db.from("blog_malang").insert([{
			judul,
			slug,
			kutipan,
			konten,
			penulis,
			kategori,
			foto_url,
			foto_alt,
			foto_konten_url,
			foto_konten_alt
		}]);
		if (error) throw error;
		return Astro.redirect("/admin/artikel");
	} catch (error) {
		errorMsg = "Gagal menyimpan data: " + error.message;
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Tambah Artikel Baru",
		"activeMenu": "artikel"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4"><h1 class="text-xl font-bold text-gray-800">📝 Tambah Artikel Baru</h1><a href="/admin/artikel" class="text-sm text-gray-500 hover:text-gray-800 font-medium">✕ Batal</a></div>${errorMsg && renderTemplate`<div class="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm font-medium">${errorMsg}</div>`}<form method="POST" enctype="multipart/form-data" class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Judul Artikel *</label><input type="text" name="judul" required placeholder="Contoh: 5 Tips Liburan ke Batu" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Slug URL (Unik/Tanpa Spasi) *</label><input type="text" name="slug" required placeholder="Contoh: 5-tips-liburan-batu" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Kategori *</label><input type="text" name="kategori" required placeholder="Contoh: Tips Wisata" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Penulis</label><input type="text" name="penulis" value="Admin Malang Raya" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div></div><div class="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Upload Foto Cover</label><input type="file" name="foto_file" accept="image/*" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 bg-white"><p class="text-xs text-gray-500 mt-1">Pilih gambar dari komputer Anda.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Atau Path Foto / URL Gambar (Manual)</label><input type="text" name="foto_url" placeholder="/img/bromo_sunrise.jpg atau https://..." class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Alt Text Foto Cover</label><input type="text" name="foto_alt" placeholder="Deskripsi foto cover..." class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div></div></div><div class="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Foto Dalam Isi Artikel (Opsional)</label><input type="file" name="foto_konten_file" accept="image/*" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 bg-white"><p class="text-xs text-blue-500 mt-1">Foto ini akan ditampilkan di dalam isi artikel jika diisi.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Atau URL Foto Konten (Manual)</label><input type="text" name="foto_konten_url" placeholder="https://..." class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Teks Alternatif / Caption (Alt Text)</label><input type="text" name="foto_konten_alt" placeholder="Deskripsi foto konten..." class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></div></div></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Kutipan (Meta Deskripsi)</label><textarea name="kutipan" rows="2" placeholder="Tuliskan ringkasan singkat artikel ini..." class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"></textarea></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Konten Lengkap</label><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"><div class="border border-gray-300 rounded-xl overflow-hidden"><div id="editor-container" class="bg-white text-gray-900" style="height: 400px;"></div></div><input type="hidden" name="konten" id="konten_input"></div><div class="flex justify-end gap-3 pt-4 border-t border-gray-100"><a href="/admin/artikel" class="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">Batal</a><button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition">Simpan Artikel</button></div></form></div>` })}<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"><\/script><script>
  document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#editor-container', {
      theme: 'snow',
      placeholder: 'Tuliskan isi artikel lengkap di sini...',
      modules: {
        toolbar: [
          [{ 'header': [2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'blockquote'],
          ['clean']
        ]
      }
    });

    var form = document.querySelector('form');
    form.addEventListener('submit', function() {
      var kontenInput = document.querySelector('#konten_input');
      // Set the hidden input to the HTML content of the editor
      kontenInput.value = quill.root.innerHTML;
    });
  });
<\/script>`;
}, "D:/Astro/Coba-Wisata-Astro/src/pages/admin/artikel/tambah.astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/admin/artikel/tambah.astro";
var $$url = "/admin/artikel/tambah";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/artikel/tambah@_@astro
var page = () => tambah_exports;
//#endregion
export { page };
