import { E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent, v as addAttribute } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import { t as $$MainLayout } from "./MainLayout_BGWvYflp.mjs";
//#region src/pages/destinasi/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	let query = db.from("destinasi_malang").select("*");
	if (!isNaN(Number(slug))) query = query.or(`slug.eq.${slug},id.eq.${slug}`);
	else query = query.eq("slug", slug);
	const { data: rows } = await query.limit(1);
	const destinasi = rows && rows.length > 0 ? rows[0] : null;
	if (!destinasi) return Astro.redirect("/404");
	const gmapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destinasi.lokasi)}`;
	const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(`Halo admin, saya tertarik dan ingin bertanya tentang destinasi wisata ${destinasi.nama_destinasi}`)}`;
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {
		"title": `${destinasi.nama_destinasi} - Wisata Malang Raya`,
		"description": destinasi.deskripsi
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative w-full h-[50vh] min-h-[400px] flex items-end"><div class="absolute inset-0 z-0"><img${addAttribute(destinasi.foto_url || "/img/hero.jpg", "src")}${addAttribute(destinasi.nama_destinasi, "alt")} class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div></div><div class="container mx-auto px-4 relative z-10 pb-12"><div class="flex flex-wrap items-center gap-3 mb-4"><span class="bg-emerald-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">${destinasi.kategori}</span><span class="bg-black/40 backdrop-blur-md text-yellow-400 font-bold text-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg border border-white/10"><span>★</span> ${destinasi.rating}</span></div><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl">${destinasi.nama_destinasi}</h1><div class="flex items-center gap-3 text-white/90 text-lg drop-shadow-md bg-black/20 p-3 rounded-2xl w-fit backdrop-blur-sm border border-white/10"><span class="text-2xl">📍</span><p class="truncate max-w-xl md:max-w-3xl">${destinasi.lokasi}</p></div></div></section><section class="py-16 bg-base-100 min-h-[50vh]"><div class="container mx-auto px-4"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><!-- Main Description --><div class="lg:col-span-2 space-y-8"><div class="bg-base-200 p-8 lg:p-10 rounded-3xl shadow-sm border border-base-300"><h2 class="text-3xl font-bold text-base-content mb-6 pb-4 border-b border-base-300">Tentang ${destinasi.nama_destinasi}</h2><div class="prose max-w-none prose-lg text-base-content/80"><p class="leading-relaxed whitespace-pre-line text-lg">${destinasi.deskripsi}</p></div></div></div><!-- Sidebar Info --><div class="space-y-6"><!-- Quick Info Card --><div class="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden sticky top-8"><div class="absolute top-0 right-0 w-32 h-32 bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] opacity-10 rounded-bl-[100px] -mr-4 -mt-4"></div><h3 class="text-2xl font-bold mb-8 text-gray-800">Informasi Kunjungan</h3><div class="space-y-6"><div class="bg-gray-50 p-4 rounded-2xl border border-gray-100"><p class="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Tiket Masuk</p><p class="text-2xl font-black text-emerald-600">${destinasi.harga_tiket}</p></div><div class="bg-gray-50 p-4 rounded-2xl border border-gray-100"><p class="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">Jam Operasional</p><div class="flex items-center gap-3 text-gray-800 font-bold text-lg"><span class="text-2xl text-blue-500">🕒</span>${destinasi.jam_operasional || "08:00 - 17:00"}</div></div></div><hr class="my-8 border-gray-100"><div class="space-y-4"><a${addAttribute(waLink, "href")} target="_blank" class="btn w-full bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 hover:shadow-xl rounded-2xl h-auto py-4 text-lg flex items-center justify-center gap-2 transition-all"><span class="text-2xl">💬</span> Hubungi Admin</a><a${addAttribute(gmapsLink, "href")} target="_blank" class="btn w-full bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm rounded-2xl h-auto py-4 text-lg flex items-center justify-center gap-2 transition-all"><span class="text-2xl">🗺️</span> Buka di Maps</a></div></div></div></div></div></section>` })}`;
}, "D:/Astro/Coba-Wisata-Astro/src/pages/destinasi/[slug].astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/destinasi/[slug].astro";
var $$url = "/destinasi/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/destinasi/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
