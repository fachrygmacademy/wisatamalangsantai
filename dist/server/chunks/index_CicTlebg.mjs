import { E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent, v as addAttribute } from "./server_CoTwvy9j.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import { n as ChevronRight, t as $$BlogCard } from "./BlogCard_-cuXP8kc.mjs";
import { n as createLucideIcon_default, r as SITE_DESCRIPTION, t as $$MainLayout } from "./MainLayout_BGWvYflp.mjs";
//#region node_modules/@lucide/astro/src/icons/chevron-left.ts
/**
* @component @name ChevronLeft
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ChevronLeft = createLucideIcon_default("chevron-left", [["path", { "d": "m15 18-6-6 6-6" }]]);
//#endregion
//#region src/components/Pagination.astro
createAstro("https://heal-net-self.vercel.app/");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { page } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="mt-20 flex items-center gap-4">${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-outline">${renderComponent($$result, "ChevronLeft", ChevronLeft, { "size": 18 })}Previous</a>`}<span>Page ${page.currentPage} of ${page.lastPage}</span>${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-outline">Next ${renderComponent($$result, "ChevronRight", ChevronRight, { "size": 18 })}</a>`}</div>`;
}, "D:/Astro/Coba-Wisata-Astro/src/components/Pagination.astro", void 0);
//#endregion
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://heal-net-self.vercel.app/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const pageParam = Astro.url.searchParams.get("page");
	let currentPage = 1;
	if (pageParam && !isNaN(Number(pageParam))) currentPage = Number(pageParam);
	const pageSize = 6;
	const offset = (currentPage - 1) * pageSize;
	const { count: totalItemsCount } = await db.from("blog_malang").select("*", {
		count: "exact",
		head: true
	});
	const lastPage = Math.ceil((totalItemsCount || 0) / pageSize) || 1;
	const { data } = await db.from("blog_malang").select("*").order("created_at", { ascending: false }).range(offset, offset + pageSize - 1);
	const page = {
		data: data || [],
		currentPage,
		lastPage,
		url: {
			prev: currentPage > 1 ? currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}` : void 0,
			next: currentPage < lastPage ? `/blog?page=${currentPage + 1}` : void 0
		}
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": "Blog",
		"description": SITE_DESCRIPTION
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container py-5 lg:py-15"><!-- Breadcrumbs --><div class="breadcrumbs text-sm mb-6"><ul class="flex! flex-wrap"><li><a href="/">Home</a></li><li>Blog</li></ul></div><h1>BLOG</h1><section><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch mt-8">${page.data.map((post) => renderTemplate`<li>${renderComponent($$result, "BlogCard", $$BlogCard, {
		"id": post.slug,
		"slug": "/blog",
		"data": {
			title: post.judul,
			description: post.kutipan,
			pubDate: new Date(post.created_at),
			heroImage: post.foto_url,
			heroImageAlt: post.foto_alt
		}
	})}</li>`)}${page.data.length === 0 && renderTemplate`<li class="col-span-3 text-center py-10 text-gray-500">Belum ada artikel yang dipublikasikan.</li>`}</ul>${page.lastPage > 1 && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { "page": page })}`}</section></div>` })}`;
}, "D:/Astro/Coba-Wisata-Astro/src/pages/blog/index.astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
