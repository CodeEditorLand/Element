import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot } from '../chunks/astro/server_fhPvbkLD.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Page", null, { "client:only": "solid-js", "client:component-hydration": "only", "client:component-path": "@codeeditorland/wind/Target/Element/Page/Editor.js", "client:component-export": "default" })} </div>`;
}, "D:/Developer/Application/CodeEditorLand/Land/Element/far-fusion/Source/components/Welcome.astro", void 0);

const $$Astro = createAstro("https://editor.land");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-3yx2b3et> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-3yx2b3et> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Developer/Application/CodeEditorLand/Land/Element/far-fusion/Source/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "D:/Developer/Application/CodeEditorLand/Land/Element/far-fusion/Source/pages/index.astro", void 0);

const $$file = "D:/Developer/Application/CodeEditorLand/Land/Element/far-fusion/Source/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
