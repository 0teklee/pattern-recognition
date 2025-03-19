import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import { $ as $$PostLayout, a as $$PostHeader } from '../../chunks/post-header_Da67GyUM.mjs';
import { r as renderEntry, $ as $$RootLayout, g as getCollection } from '../../chunks/root-layout_DV6a2FIY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://patterns.leetekwoo.com");
const getStaticPaths = async () => {
  const posts = process.env.SCOPE === "algo" || process.env.SCOPE === "prd" ? [] : await getCollection("uiux");
  return posts.map((post) => ({
    params: { id: post.id },
    props: post
  }));
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const props = Astro2.props;
  const { Content } = await renderEntry(props);
  return renderTemplate`<!--TODO 타입 추론 개선-->${renderComponent($$result, "BaseLayout", $$RootLayout, { "title": "UI/UX", "description": "Pattern Recognition - UI/UX" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, {}, { "default": async ($$result3) => renderTemplate`  ${renderComponent($$result3, "Content", Content, {})} `, "header": async ($$result3) => renderTemplate`${renderComponent($$result3, "PostHeader", $$PostHeader, { "title": props?.data.title, "createdAt": props?.data.createdAt, "tags": props?.data.tags, "slot": "header" })}` })} ` })}`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/[...id].astro", void 0);

const $$file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/[...id].astro";
const $$url = "/dist/dev/build-algo/uiux/[...id].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
