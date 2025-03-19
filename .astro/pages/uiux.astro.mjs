import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment } from '../chunks/astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$RootLayout } from '../chunks/root-layout_DV6a2FIY.mjs';
import { $ as $$ListLayout, a as $$Filter, b as $$List } from '../chunks/list_vAbKUMkD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("uiux");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$RootLayout, { "title": "Algorithms", "description": "Pattern Recognition - Algorithms" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ListLayout", $$ListLayout, {}, { "list": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "list" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Filter", $$Filter, { "items": posts, "route": "algorithms" })} ${renderComponent($$result4, "List", $$List, { "items": posts, "route": "algorithms" })} ` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate` Algorithms Patterns` })}` })} ` })}`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/index.astro", void 0);

const $$file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/index.astro";
const $$url = "/dist/dev/build-algo/uiux.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
