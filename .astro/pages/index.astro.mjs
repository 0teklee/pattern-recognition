import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/root-layout_DV6a2FIY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$RootLayout, { "title": "HOME", "description": "Pattern Recognition Index" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-theme text-2xl font-bold text-pretty sm:text-3xl">
UNDER CONSTRUCTION
</h1> ` })}`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/index.astro", void 0);

const $$file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/index.astro";
const $$url = "/dist/dev/build-algo.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
