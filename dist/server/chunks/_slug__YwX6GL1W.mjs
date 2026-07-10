import { C as unescapeHTML, E as createComponent, T as createAstro, V as __exportAll, f as renderTemplate, g as maybeRenderHead, i as renderComponent, l as renderSlot } from "./server_CoTwvy9j.mjs";
import { a as $$Image } from "./_astro_assets_DuFCZO3c.mjs";
import "./compiler_DWKY1NWp.mjs";
import { t as db } from "./db_DzqpBJ2g.mjs";
import { n as ChevronRight, r as $$FormattedDate, t as $$BlogCard } from "./BlogCard_-cuXP8kc.mjs";
import { t as $$MainLayout } from "./MainLayout_BGWvYflp.mjs";
//#region src/layouts/BlogPost.astro
createAstro("https://heal-net-self.vercel.app/");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title, description, pubDate, updatedDate, heroImage, heroImageAlt = "", breadcrumbParent, date = true, book = false } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, {
		"title": title,
		"description": description,
		"image": heroImage
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="container py-5 lg:py-15"><div class="breadcrumbs text-sm mb-5"><ul class="flex! flex-wrap"><li><a href="/">Home</a></li><li><a href="./">${breadcrumbParent}</a></li><li>${title}</li></ul></div><article><div class="text-center"><div class="date">${date && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })}`}${updatedDate && renderTemplate`<div class="last-updated-on">Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })}</div>`}</div><h1>${title}</h1><hr></div><div>${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 1020,
		"height": 510,
		"src": heroImage,
		"format": "webp",
		"fetchpriority": "high",
		"quality": "low",
		"loading": "eger",
		"alt": heroImageAlt || title,
		"class": "rounded-lg aspect-2/1 object-cover w-full my-10"
	})}`}</div><div class="page max-w-5xl mx-auto">${renderSlot($$result, $$slots["default"])}${book && renderTemplate`<a href="#" class="mt-5 btn bg-[linear-gradient(125deg,var(--color-main-100),var(--color-main-200))] text-white border-0 shadow-xl hover:shadow-2xl w-full">Book an appointment ${renderComponent($$result, "ChevronRight", ChevronRight, {})}</a>`}</div></article></div>` })}`;
}, "D:/Astro/Coba-Wisata-Astro/src/layouts/BlogPost.astro", void 0);
//#endregion
//#region src/pages/blog/[slug].astro
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
	const { data: rows, error } = await db.from("blog_malang").select("*").eq("slug", slug);
	if (error || !rows || rows.length === 0) return Astro.redirect("/404");
	const post = rows[0];
	const mappedData = {
		title: post.judul,
		description: post.kutipan,
		pubDate: new Date(post.created_at),
		heroImageAlt: post.foto_alt,
		author: post.penulis
	};
	const { data: otherRowsData } = await db.from("blog_malang").select("*").neq("slug", slug).eq("kategori", post.kategori || "").limit(20);
	let allRelated = [...(otherRowsData || []).sort(() => .5 - Math.random()).slice(0, 5)];
	if (allRelated.length < 5) {
		const excludeSlugs = [slug, ...allRelated.map((r) => r.slug)];
		const { data: moreRowsData } = await db.from("blog_malang").select("*").not("slug", "in", `(${excludeSlugs.join(",")})`).limit(20);
		const moreRows = (moreRowsData || []).sort(() => .5 - Math.random()).slice(0, 5 - allRelated.length);
		allRelated = [...allRelated, ...moreRows];
	}
	const relatedPosts = allRelated.slice(0, 3);
	const bacaJugaPosts = allRelated.slice(3, 5);
	let contentHtml = post.konten || "";
	if (!contentHtml.includes("<p>") && !contentHtml.includes("<br>") && !contentHtml.includes("<h")) contentHtml = contentHtml.split(/\n\s*\n/).map((p) => "<p>" + p.replace(/\n/g, "<br>") + "</p>").join("");
	const toc = [];
	contentHtml = contentHtml.replace(/<h([23])>(.*?)<\/h\1>/gi, (match, level, text) => {
		const cleanText = text.replace(/<[^>]+>/g, "").trim();
		const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
		toc.push({
			id,
			text: cleanText,
			level: parseInt(level)
		});
		return "<h" + level + " id=\"" + id + "\" class=\"scroll-mt-24 font-bold text-white\">" + text + "</h" + level + ">";
	});
	let paragraphs = contentHtml.split("</p>").filter((p) => p.trim() !== "").map((p) => p + "</p>");
	let tocHtml = "";
	if (toc.length > 0) {
		tocHtml = "<details class=\"my-8 p-6 border-2 border-emerald-500 bg-emerald-50 rounded-xl shadow-sm not-prose\" open>";
		tocHtml += "<summary class=\"list-none [&::-webkit-details-marker]:hidden text-lg font-bold text-emerald-800 cursor-pointer outline-none hover:text-emerald-600 transition-colors select-none\"><div class=\"inline-flex items-center gap-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line></svg> Daftar Isi <span class=\"text-xs font-normal text-emerald-600 ml-2\">(Klik untuk buka/tutup)</span></div></summary>";
		tocHtml += "<div class=\"mt-4 pt-4 border-t border-emerald-200\"><ul class=\"list-none pl-0 m-0 space-y-2\">";
		toc.forEach((item) => {
			const padding = item.level === 3 ? "ml-4 border-l-2 border-emerald-200 pl-2" : "";
			tocHtml += "<li class=\"" + padding + "\"><a href=\"#" + item.id + "\" class=\"text-emerald-700 hover:text-emerald-500 font-medium hover:underline transition-colors block py-1\">" + item.text + "</a></li>";
		});
		tocHtml += "</ul></div></details>";
	}
	let bacaJugaHtml = "";
	if (bacaJugaPosts.length > 0) bacaJugaHtml = "<div class=\"my-8 p-5 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl shadow-sm not-prose\"><span class=\"text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2\">Baca Juga:</span><div class=\"flex flex-col gap-2\">" + bacaJugaPosts.map((p) => "<a href=\"/blog/" + p.slug + "\" class=\"text-lg font-bold text-gray-800 hover:text-emerald-600 transition-colors inline-block no-underline\">" + p.judul + "</a>").join("") + "</div></div>";
	let newParagraphs = [];
	if (post.foto_url) {
		let coverCaptionHtml = "";
		if (post.foto_alt) coverCaptionHtml = "<p class=\"text-center text-sm text-emerald-600 mt-3 italic font-medium\">" + post.foto_alt + "</p>";
		newParagraphs.push("<div class=\"mb-8 not-prose\"><img src=\"" + post.foto_url + "\" alt=\"" + (post.foto_alt || post.judul) + "\" class=\"w-full rounded-xl object-cover max-h-[500px]\" />" + coverCaptionHtml + "</div>");
	}
	let h2Count = 0;
	let innerImageInserted = false;
	let bacaJugaInserted = false;
	for (let i = 0; i < paragraphs.length; i++) {
		const p = paragraphs[i];
		if (p.includes("<h2")) {
			h2Count++;
			if (h2Count === 1 && !bacaJugaInserted && bacaJugaHtml) {
				newParagraphs.push(bacaJugaHtml);
				bacaJugaInserted = true;
			}
			if (h2Count === 2 && !innerImageInserted && post.foto_konten_url) {
				let captionHtml = post.foto_konten_alt ? "<p class=\"text-center text-sm text-emerald-600 mt-3 italic font-medium\">" + post.foto_konten_alt + "</p>" : "";
				newParagraphs.push("<div class=\"my-10 not-prose\"><img src=\"" + post.foto_konten_url + "\" alt=\"" + (post.foto_konten_alt || post.judul) + "\" class=\"w-full rounded-xl object-cover max-h-[500px]\" />" + captionHtml + "</div>");
				innerImageInserted = true;
			}
		}
		newParagraphs.push(p);
		if (i === 0 && tocHtml) newParagraphs.push(tocHtml);
	}
	if (bacaJugaHtml && !bacaJugaInserted) newParagraphs.push(bacaJugaHtml);
	if (post.foto_konten_url && !innerImageInserted) {
		let captionHtml = post.foto_konten_alt ? "<p class=\"text-center text-sm text-emerald-600 mt-3 italic font-medium\">" + post.foto_konten_alt + "</p>" : "";
		newParagraphs.push("<div class=\"my-10 not-prose\"><img src=\"" + post.foto_konten_url + "\" alt=\"" + (post.foto_konten_alt || post.judul) + "\" class=\"w-full rounded-xl object-cover max-h-[500px]\" />" + captionHtml + "</div>");
	}
	contentHtml = newParagraphs.join("");
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, {
		...mappedData,
		"breadcrumbParent": "Blog"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="prose max-w-none">${unescapeHTML(contentHtml)}</div>${relatedPosts.length > 0 && renderTemplate`<div class="mt-16 pt-10 border-t border-gray-200"><h3 class="text-2xl font-bold text-gray-800 mb-8">Artikel Terkait</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">${relatedPosts.map((rp) => renderTemplate`<div>${renderComponent($$result, "BlogCard", $$BlogCard, {
		"id": rp.slug,
		"slug": "/blog",
		"data": {
			title: rp.judul,
			description: rp.kutipan,
			pubDate: new Date(rp.created_at),
			heroImage: rp.foto_url,
			heroImageAlt: rp.foto_alt
		}
	})}</div>`)}</div></div>`}` })}`;
}, "D:/Astro/Coba-Wisata-Astro/src/pages/blog/[slug].astro", void 0);
var $$file = "D:/Astro/Coba-Wisata-Astro/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
