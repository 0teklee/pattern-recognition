import { c as createComponent, m as maybeRenderHead, d as renderSlot, a as renderTemplate, b as createAstro, s as spreadAttributes, e as addAttribute, r as renderComponent, f as renderScript } from './astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Tags } from './tags_CKxm9JOp.mjs';

const $$ListLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-start gap-y-12 px-4 lg:px-6"> <header class="border-border w-full border-b pb-6"> <h1 class="text-primary text-2xl font-bold text-pretty sm:text-3xl"> ${renderSlot($$result, $$slots["title"])} </h1> </header> <div class="container flex grow flex-col items-start gap-y-4"> ${renderSlot($$result, $$slots["list"])} </div> </section>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/layouts/list-layout.astro", void 0);

const $$Astro$3 = createAstro("https://patterns.leetekwoo.com");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$2 = createAstro("https://patterns.leetekwoo.com");
const $$RefreshCw = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RefreshCw;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "refresh-cw", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path> <path d="M21 3v5h-5"></path> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path> <path d="M8 16H3v5"></path> ` })}`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/node_modules/lucide-astro/dist/RefreshCw.astro", void 0);

const $$Astro$1 = createAstro("https://patterns.leetekwoo.com");
const $$Filter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Filter;
  const { items } = Astro2.props;
  const paths = [...new Set(items.map((item) => item.id.split("/")[0]))];
  const tagKeys = [
    ...new Set(
      items.flatMap(
        (item) => Object.keys(item.data.tags || {}).filter((key) => key !== "category")
      )
    )
  ];
  const tagValues = {};
  tagKeys.forEach((key) => {
    tagValues[key] = [
      ...new Set(
        items.flatMap(
          (item) => item.data.tags && item.data.tags[key] ? [item.data.tags[key]] : []
        )
      )
    ];
  });
  return renderTemplate`${maybeRenderHead()}<div class="container mb-6"> <search id="filter-count" class="text-secondary mb-2 text-sm">
Result : ${items.length} Posts
</search> <div class="flex flex-col flex-wrap items-start gap-4 sm:flex-row"> <div class="relative"> <label class="mb-1 block text-sm font-medium" for="category-filter">Category</label> <select id="category-filter" class="bg-primary-bg text-primary border-border min-w-[200px] rounded border px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"> <option value="">All</option> <optgroup label="Category"> ${paths.map((path) => renderTemplate`<option${addAttribute(path, "value")}>${path}</option>`)} </optgroup> </select> </div> <!-- 각 태그 타입별 필터 --> ${tagKeys.length > 0 && renderTemplate`<div class="tag-filters flex flex-col gap-1"> <label class="mb-1 block text-sm font-medium">Tags</label> <div class="flex flex-wrap sm:flex-row"> ${tagKeys.map((tagKey) => renderTemplate`<details class="tag-filter-group group"> <summary${addAttribute(`${tagKey} mb-1 block w-fit cursor-pointer rounded px-1 py-0.5 text-sm font-medium`, "class")}> ${tagKey} </summary> <div class="tag-options border-border bg-background absolute z-10 flex max-w-64 flex-col flex-wrap gap-2 overflow-y-auto rounded border p-2 opacity-0 transition-opacity duration-150 group-open:opacity-100"> ${tagValues[tagKey].map((value) => renderTemplate`<label class="tag-option flex cursor-pointer items-center gap-1"> <input type="checkbox"${addAttribute(`tag-${tagKey}`, "name")}${addAttribute(value, "value")} class="tag-checkbox bg-theme"${addAttribute(tagKey, "data-tag-key")}> <span class="text-sm">${value}</span> </label>`)} </div> </details>`)} </div> </div>`} <button id="reset-filter" class="text-theme mt-6 hidden text-xs hover:underline"> <div class="flex items-center gap-1"> ${renderComponent($$result, "RefreshCw", $$RefreshCw, { "size": 16 })} <span>Reset</span> </div> </button> </div> </div> ${renderScript($$result, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/filter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/filter.astro", void 0);

const $$Astro = createAstro("https://patterns.leetekwoo.com");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const { items } = Astro2.props;
  const subRoute = items[0]?.data.path[0];
  return renderTemplate`${maybeRenderHead()}<ol class="flex w-full flex-col gap-4 sm:gap-6"> ${items?.map((item) => {
    const itemTags = item.data.tags || {};
    const itemTagsValues = Object.values(item.data.tags || {}).filter((tag) => tag && typeof tag === "string").join(",");
    const itemCategory = item.data.tags.category;
    const itemDataAttr = Object.entries(itemTags).reduce(
      (attrs, [key, value]) => {
        attrs[`data-tag-${key}`] = value;
        return attrs;
      },
      {}
    );
    return renderTemplate`<li${addAttribute(item.data.id, "id")} class="ring-theme group hover:border-theme w-full border-separate border-b py-2 transition-all duration-200 hover:ring sm:border-s-4 sm:border-b-0 sm:pl-3 md:py-3"${addAttribute(itemCategory, "data-category")}${addAttribute(itemTagsValues, "data-tags")}${spreadAttributes(itemDataAttr)}> <a class="group-hover:text-theme"${addAttribute(`/${subRoute}/${item.id}`, "href")}> ${item.data.title} </a> ${renderComponent($$result, "Tags", $$Tags, { "path": subRoute, "tags": item.data.tags, "size": "sm" })} <p class="text-sm">${item.data?.description}</p> </li>`;
  })} </ol>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/list.astro", void 0);

export { $$ListLayout as $, $$Filter as a, $$List as b };
