import { E as createComponent, T as createAstro, f as renderTemplate, g as maybeRenderHead, i as renderComponent, v as addAttribute } from "./server_CoTwvy9j.mjs";
import { a as $$Image } from "./_astro_assets_DuFCZO3c.mjs";
import "./compiler_DWKY1NWp.mjs";
import { n as createLucideIcon_default } from "./MainLayout_BGWvYflp.mjs";
//#region src/components/FormattedDate.astro
createAstro("https://heal-net-self.vercel.app/");
var $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FormattedDate;
	const { date } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>${date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</time>`;
}, "D:/Astro/Coba-Wisata-Astro/src/components/FormattedDate.astro", void 0);
//#endregion
//#region node_modules/@lucide/astro/src/icons/chevron-right.ts
/**
* @component @name ChevronRight
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ChevronRight = createLucideIcon_default("chevron-right", [["path", { "d": "m9 18 6-6-6-6" }]]);
//#endregion
//#region src/components/card/BlogCard.astro
createAstro("https://heal-net-self.vercel.app/");
var $$BlogCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogCard;
	const { id, data, slug = "/blog", date = true, book = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="group h-full flex flex-col overflow-hidden rounded-xl bg-white text-gray-800 shadow-md hover:shadow-2xl transition-all duration-300">${data.heroImage && renderTemplate`<a${addAttribute(`${slug}/${id}`, "href")} class="block overflow-hidden h-52">${renderComponent($$result, "Image", $$Image, {
		"src": data.heroImage,
		"alt": data.heroImageAlt || data.title,
		"width": "500",
		"height": "250",
		"format": "webp",
		"quality": 80,
		"class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
	})}</a>`}<div class="flex flex-col flex-1 p-6 text-left">${date && renderTemplate`<div class="flex items-center gap-2 text-sm text-gray-500 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><time${addAttribute(data.pubDate.toISOString(), "datetime")}>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": data.pubDate })}</time></div>`}<a${addAttribute(`${slug}/${id}`, "href")} class="block mb-3"><h3 class="font-bold text-xl leading-snug hover:text-emerald-600 transition-colors">${data.title}</h3></a><p class="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">${data.description}</p><a${addAttribute(`${slug}/${id}`, "href")} class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mt-auto w-fit">Baca Selengkapnya<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></article>`;
}, "D:/Astro/Coba-Wisata-Astro/src/components/card/BlogCard.astro", void 0);
//#endregion
export { ChevronRight as n, $$FormattedDate as r, $$BlogCard as t };
