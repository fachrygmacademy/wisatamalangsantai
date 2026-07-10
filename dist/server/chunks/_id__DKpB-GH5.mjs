import { E as createComponent, T as createAstro, V as __exportAll } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
//#region src/pages/admin/destinasi/hapus/[id].astro
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
	if (id) try {
		await db.from("destinasi_malang").delete().eq("id", id);
	} catch (err) {
		console.error("Gagal menghapus:", err);
	}
	return Astro.redirect("/admin");
}, "D:/Astro/Coba-Wisata-Astro/src/pages/admin/destinasi/hapus/[id].astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/admin/destinasi/hapus/[id].astro";
var $$url = "/admin/destinasi/hapus/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/destinasi/hapus/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
