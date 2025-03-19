import { b as createAstro, c as createComponent, a as renderTemplate, g as defineScriptVars, e as addAttribute, m as maybeRenderHead } from './astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://patterns.leetekwoo.com");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, size = "base", path } = Astro2.props;
  const arrTags = Object.entries(tags).filter(([key, val]) => !!key && !!val);
  return renderTemplate(_a || (_a = __template(["", '<div id="tags-container"', "> ", " </div> <script>(function(){", '\n  const buttonContainer = document.getElementById("tags-container");\n\n  const eventClick = (e) => {\n    const button = e.target.closest(".tag-button");\n    if (!button) return;\n\n    const key = button?.dataset.key;\n    const value = button?.dataset.value;\n    const params = new URLSearchParams(window.location.search);\n\n    if (params.get(key) === value) {\n      params.delete(key);\n    } else {\n      params.set(key, value);\n    }\n\n    window.location.replace(`/${path}?${params.toString()}`);\n  };\n\n  buttonContainer.addEventListener("click", (e) => eventClick(e));\n  window.addEventListener("popstate", (e) => {\n    console.log("tag popstate", e);\n  });\n})();<\/script>'], ["", '<div id="tags-container"', "> ", " </div> <script>(function(){", '\n  const buttonContainer = document.getElementById("tags-container");\n\n  const eventClick = (e) => {\n    const button = e.target.closest(".tag-button");\n    if (!button) return;\n\n    const key = button?.dataset.key;\n    const value = button?.dataset.value;\n    const params = new URLSearchParams(window.location.search);\n\n    if (params.get(key) === value) {\n      params.delete(key);\n    } else {\n      params.set(key, value);\n    }\n\n    window.location.replace(\\`/\\${path}?\\${params.toString()}\\`);\n  };\n\n  buttonContainer.addEventListener("click", (e) => eventClick(e));\n  window.addEventListener("popstate", (e) => {\n    console.log("tag popstate", e);\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(`flex flex-wrap items-center mt-1 mb-2 gap-x-4 ${size === "sm" ? "text-xs" : "text-sm"}`, "class"), arrTags.map(
    ([key, val]) => !!val ? () => {
      return renderTemplate`<button${addAttribute(`${key}=${val}`, "id")}${addAttribute(`tag-button ${key} cursor-pointer rounded-sm ${size === "sm" ? "px-1 py-0" : "px-2 py-1"} `, "class")}${addAttribute(`link to tag: ${key}`, "aria-description")}${addAttribute(key, "data-key")}${addAttribute(val, "data-value")}> ${val} </button>`;
    } : null
  ), defineScriptVars({ path }));
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/tags.astro", void 0);

export { $$Tags as $ };
