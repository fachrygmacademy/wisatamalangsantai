import { E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent, v as addAttribute } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as $$AdminLayout } from "./AdminLayout_C-m_7sIV.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import path from "node:path";
import fs from "node:fs/promises";
//#region src/pages/admin/kuliner/edit/[id].astro
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
	const { data: rows, error: fetchError } = await db.from("kuliner_malang").select("*").eq("id", id);
	if (fetchError || !rows || rows.length === 0) return Astro.redirect("/admin/kuliner");
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
		const { error: updateError } = await db.from("kuliner_malang").update({
			nama_tempat: data.get("nama_tempat"),
			slug: data.get("slug"),
			kategori: data.get("kategori"),
			kisaran_harga: data.get("kisaran_harga"),
			lokasi: data.get("lokasi"),
			foto_url,
			rating: data.get("rating"),
			deskripsi: data.get("deskripsi")
		}).eq("id", id);
		if (updateError) throw updateError;
		return Astro.redirect("/admin/kuliner");
	} catch (error) {
		errorMsg = "Gagal mengupdate data: " + error.message;
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Edit Kuliner",
		"activeMenu": "kuliner"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100"><div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4"><h1 class="text-xl font-bold text-gray-800">✏️ Edit Kuliner: ${item.nama_tempat}</h1><a href="/admin/kuliner" class="text-sm text-gray-500 hover:text-gray-800 font-medium">✕ Batal</a></div>${errorMsg && renderTemplate`<div class="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm font-medium">${errorMsg}</div>`}<form method="POST" enctype="multipart/form-data" class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Nama Tempat Makan *</label><input type="text" name="nama_tempat"${addAttribute(item.nama_tempat, "value")} required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Slug URL *</label><input type="text" name="slug"${addAttribute(item.slug, "value")} required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Kategori *</label><select name="kategori" required class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm bg-white"><option value="Legendaris"${addAttribute(item.kategori === "Legendaris", "selected")}>Legendaris</option><option value="Cafe &amp; Nongkrong"${addAttribute(item.kategori === "Cafe & Nongkrong", "selected")}>Cafe & Nongkrong</option><option value="Makanan Berat"${addAttribute(item.kategori === "Makanan Berat", "selected")}>Makanan Berat</option><option value="Jajanan"${addAttribute(item.kategori === "Jajanan", "selected")}>Jajanan</option><option value="Oleh-oleh"${addAttribute(item.kategori === "Oleh-oleh", "selected")}>Oleh-oleh</option></select></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Kisaran Harga</label><input type="text" name="kisaran_harga"${addAttribute(item.kisaran_harga, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-gray-700 mb-2">Lokasi / Alamat</label><input type="text" name="lokasi"${addAttribute(item.lokasi, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Rating</label><input type="number" step="0.1" min="1" max="5" name="rating"${addAttribute(item.rating, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Upload Foto Kuliner Baru (Opsional)</label><input type="file" name="foto_file" accept="image/*" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm bg-white"><p class="text-xs text-gray-400 mt-1">Biarkan kosong jika tidak ingin mengubah foto.</p></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Atau Path Foto / URL (Manual)</label><input type="text" name="foto_url"${addAttribute(item.foto_url, "value")} class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm"></div><div><label class="block text-sm font-bold text-gray-700 mb-2">Deskripsi Kuliner</label><textarea name="deskripsi" rows="4" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 text-sm">${item.deskripsi}</textarea></div><div class="flex justify-end gap-3 pt-4 border-t border-gray-100"><a href="/admin/kuliner" class="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition">Batal</a><button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-md transition">Update Kuliner</button></div></form></div>` })}`;
}, "D:/Astro/Coba-Wisata-Astro/src/pages/admin/kuliner/edit/[id].astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/admin/kuliner/edit/[id].astro";
var $$url = "/admin/kuliner/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/kuliner/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
