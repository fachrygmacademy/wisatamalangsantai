import { C as unescapeHTML, E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent, o as Fragment, v as addAttribute } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as $$AdminLayout } from "./AdminLayout_C-m_7sIV.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import path from "node:path";
import fs from "node:fs/promises";
//#region src/pages/admin/artikel/edit/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	let errorMsg = "";
	const { data: rows, error: fetchError } = await db.from("blog_malang").select("*").eq("id", id);
	if (fetchError || !rows || rows.length === 0) return Astro.redirect("/admin/artikel");
	const item = rows[0];
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		let foto_url = data.get("foto_url");
		const fotoFile = data.get("foto_file");
		if (fotoFile && fotoFile.size > 0) {
			const buffer = Buffer.from(await fotoFile.arrayBuffer());
			const fileName = Date.now() + "-" + fotoFile.name.replace(/\s+/g, "-");
			const filePath = path.join(process.cwd(), "public", "img", fileName);
			await fs.writeFile(filePath, buffer);
			foto_url = "/img/" + fileName;
		}
		let foto_konten_url = data.get("foto_konten_url");
		const fotoKontenFile = data.get("foto_konten_file");
		if (fotoKontenFile && fotoKontenFile.size > 0) {
			const buffer = Buffer.from(await fotoKontenFile.arrayBuffer());
			const fileName = Date.now() + "-konten-" + fotoKontenFile.name.replace(/\s+/g, "-");
			const filePath = path.join(process.cwd(), "public", "img", fileName);
			await fs.writeFile(filePath, buffer);
			foto_konten_url = "/img/" + fileName;
		}
		const foto_konten_alt = data.get("foto_konten_alt") || "";
		const foto_alt = data.get("foto_alt") || "";
		const { error: updateError } = await db.from("blog_malang").update({
			judul: data.get("judul"),
			slug: data.get("slug"),
			kutipan: data.get("kutipan"),
			konten: data.get("konten"),
			penulis: data.get("penulis"),
			kategori: data.get("kategori"),
			foto_url,
			foto_alt,
			foto_konten_url,
			foto_konten_alt
		}).eq("id", id);
		if (updateError) throw updateError;
		return Astro.redirect("/admin/artikel");
	} catch (error) {
		errorMsg = "Gagal mengupdate data: " + error.message;
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Edit Artikel",
		"activeMenu": "artikel"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4"><h1 class="text-xl font-bold text-gray-800">✏️ Edit Artikel: ${item.judul}</h1><a href="/admin/artikel" class="text-sm text-gray-500 hover:text-gray-800 font-medium">✕ Batal</a></div>${errorMsg && renderTemplate`<div class="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm font-medium">${errorMsg}</div>`}<form method="POST" enctype="multipart/form-data" class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Judul Artikel *</label><input type="text" name="judul"${addAttribute(item.judul, "value")} required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Slug URL *</label><input type="text" name="slug"${addAttribute(item.slug, "value")} required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Kategori *</label><input type="text" name="kategori"${addAttribute(item.kategori, "value")} required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm bg-white"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Penulis</label><input type="text" name="penulis"${addAttribute(item.penulis, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div></div><div class="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Upload Foto Cover Baru (Opsional)</label><input type="file" name="foto_file" accept="image/*" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm bg-white"><p class="text-xs text-gray-500 mt-1">Biarkan kosong jika tidak ingin mengubah foto.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Atau Path Foto / URL (Manual)</label><input type="text" name="foto_url"${addAttribute(item.foto_url, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Alt Text Foto Cover</label><input type="text" name="foto_alt"${addAttribute(item.foto_alt || "", "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div></div></div><div class="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Update Foto Dalam Isi Artikel (Opsional)</label><input type="file" name="foto_konten_file" accept="image/*" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm bg-white"><p class="text-xs text-blue-500 mt-1">Foto ini akan ditampilkan di dalam isi artikel jika diisi.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Atau URL Foto Konten (Manual)</label><input type="text" name="foto_konten_url"${addAttribute(item.foto_konten_url || "", "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Teks Alternatif / Caption (Alt Text)</label><input type="text" name="foto_konten_alt"${addAttribute(item.foto_konten_alt || "", "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm"></div></div></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Kutipan (Meta Deskripsi)</label><textarea name="kutipan" rows="2" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 text-sm">${item.kutipan}</textarea></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Konten Lengkap</label><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"><div class="border border-gray-300 rounded-xl overflow-hidden"><div id="editor-container" class="bg-white text-gray-900" style="height: 400px;">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(item.konten || "")}` })}</div></div><input type="hidden" name="konten" id="konten_input"${addAttribute(item.konten || "", "value")}></div><div class="flex justify-end gap-3 pt-4 border-t border-gray-100"><a href="/admin/artikel" class="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">Batal</a><button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-md transition">Update Artikel</button></div></form></div>` })}<script src="https://cdn.quilljs.com/1.3.6/quill.min.js"><\/script><script>
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
}, "D:/Astro/Coba-Wisata-Astro/src/pages/admin/artikel/edit/[id].astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/admin/artikel/edit/[id].astro";
var $$url = "/admin/artikel/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/artikel/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
