import { c as createComponent, m as maybeRenderHead, d as renderSlot, a as renderTemplate, b as createAstro, r as renderComponent } from './astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Tags } from './tags_CKxm9JOp.mjs';

const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full flex-col items-start gap-y-6 px-4 lg:px-6"> ${renderSlot($$result, $$slots["header"])} <article class="prose"> ${renderSlot($$result, $$slots["default"])} </article> </section>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/layouts/post-layout.astro", void 0);

const $$Astro = createAstro("https://patterns.leetekwoo.com");
const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { title, createdAt, tags, path } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="border-border w-full border-b pb-6"> <h1 class="text-primary w-full text-2xl font-bold text-pretty sm:text-3xl"> ${title} </h1> <div class="mt-1 space-y-4"> <p class="text-secondary text-sm">${createdAt}</p> ${renderComponent($$result, "Tags", $$Tags, { "path": path[0], "tags": tags, "size": "base" })} </div> </header>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/post-header.astro", void 0);

export { $$PostLayout as $, $$PostHeader as a };
