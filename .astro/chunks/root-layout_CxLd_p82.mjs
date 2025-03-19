import { c as createComponent, m as maybeRenderHead, a as renderTemplate, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderComponent, b as createAstro, e as addAttribute, k as renderHead, d as renderSlot } from './astro/server_CTjLOdeR.mjs';
import 'kleur/colors';
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z, ZodIssueCode } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
/* empty css                        */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-primary border-border w-full border-t"> <div class="flex flex-col items-center justify-center gap-4 px-4 py-6 md:flex-row lg:justify-end lg:px-8"> <div class="text-center md:text-left"> <p class="text-muted mt-1 text-sm">© 2025 All rights reserved.</p> </div> </div> </footer>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/footer.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_D95z2qEB.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/dist/dev/build-algo", "DEV": true, "MODE": "development", "PROD": false, "SITE": "https://patterns.leetekwoo.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_Jy68m5jE.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_ad1b9lld.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  let store = null;
  globalDataStore.get().then((s) => store = s);
  return function reference(collection) {
    return z.union([
      z.string(),
      z.object({
        id: z.string(),
        collection: z.string()
      }),
      z.object({
        slug: z.string(),
        collection: z.string()
      })
    ]).transform(
      (lookup, ctx) => {
        if (!store) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${ctx.path.join(".")}:** Reference to ${collection} could not be resolved: store not available.
This is an Astro bug, so please file an issue at https://github.com/withastro/astro/issues.`
          });
          return;
        }
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/site/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

createReference({ lookupMap });

const Routes = {
  algorithms: "/algorithms",
  uiux: "/uiux"
};

const $$Astro$1 = createAstro("https://patterns.leetekwoo.com");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const currentPathname = Astro2.url.pathname;
  const algorithmPosts = process.env.SCOPE === "algo" || process.env.SCOPE === "prd" ? await getCollection("algorithms") : [];
  const uiuxPosts = process.env.SCOPE === "uiux" || process.env.SCOPE === "prd" ? await getCollection("uiux") : [];
  function groupContentByFolder(posts) {
    if (posts.length === 0) {
      return [];
    }
    const folderGroups = {};
    posts.forEach((post) => {
      const pathParts = post.id.split("/");
      if (pathParts.length > 1) {
        const folder = pathParts[0];
        if (!folderGroups[folder]) {
          folderGroups[folder] = [];
        }
        folderGroups[folder].push({
          id: post.id,
          title: post.data.title || post.id
        });
      }
    });
    return Object.entries(folderGroups);
  }
  const algoFolders = groupContentByFolder(algorithmPosts);
  const uiuxFolders = groupContentByFolder(uiuxPosts);
  return renderTemplate`${maybeRenderHead()}<aside class="bg-primary-bg text-primary border-border hidden max-w-64 grow border-r p-4 md:block"> <nav class="flex flex-col gap-2"> <!-- Home --> <a href="/" class="hover:text-secondary font-semibold">🏠 Home</a> <!-- Algorithms 섹션 --> <details class="group" open> <summary class="hover:text-secondary flex cursor-pointer items-center justify-between font-semibold">
📂 Algorithms
<span class="group-open:rotate-90">▶</span> </summary> <div class="mt-2 ml-4 flex flex-col gap-1"> <a${addAttribute(Routes.algorithms, "href")} class="hover:text-secondary font-semibold">Index</a> ${algoFolders.map(([folder, files]) => renderTemplate`<details class="group" open> <summary class="hover:text-secondary flex cursor-pointer items-center justify-between">
📁 ${folder} <span class="group-open:rotate-90">▶</span> </summary> <div class="mt-1 ml-4 flex flex-col gap-1"> ${files.map((file) => renderTemplate`<a${addAttribute(`/algorithms/${file.id}`, "href")}${addAttribute(`hover:text-secondary text-sm ${`/algorithms/${file.id}` === currentPathname ? "text-theme" : ""} `, "class")}>
📄 ${file.title} </a>`)} </div> </details>`)} </div> </details> <!-- UI/UX 섹션 --> <details class="group"> <summary class="hover:text-secondary flex cursor-pointer items-center justify-between font-semibold">
🎨 UI/UX
<span class="group-open:rotate-90">▶</span> </summary> <div class="mt-2 ml-4 flex flex-col gap-1"> <a${addAttribute(Routes.uiux, "href")} class="hover:text-secondary font-semibold">Index</a> ${uiuxFolders.map(([folder, files]) => renderTemplate`<details class="group"> <summary class="hover:text-secondary flex cursor-pointer items-center justify-between">
📁 ${folder} <span class="group-open:rotate-90">▶</span> </summary> <div class="mt-1 ml-4 flex flex-col gap-1"> ${files.map((file) => renderTemplate`<a${addAttribute(`/uiux/${file.id}`, "href")} class="hover:text-secondary text-sm">
📄 ${file.id} </a>`)} </div> </details>`)} </div> </details> </nav> </aside>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/sidebar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-background text-primary border-border sticky top-0 z-50 w-full border-b"> <div class="flex items-center justify-between px-4 py-4 lg:px-8"> <a href="/" class="text-lg font-bold break-words sm:text-2xl">PATTERN RECOGNITION</a> <!-- info Mobile Toggle Menu --> <details class="group relative md:hidden"> <summary class="text-primary hover:text-theme cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg> </summary> <nav${addAttribute(`
        absolute top-0 right-0 -translate-x-1/2
        flex w-fit flex-col gap-4 p-4 
        group-open:opacity-100 opacity-0
        transition-opacity duration-300 
        bg-background border-primary text-primary 
        rounded-sm border shadow-md`, "class")}> <a href="/" class="hover:text-theme">Home</a> <a href="/algorithms" class="hover:text-theme">Algorithms</a> <a href="/uiux" class="hover:text-theme">UI/UX</a> </nav> </details> </div> </header>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/header.astro", void 0);

const $$Astro = createAstro("https://patterns.leetekwoo.com");
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, description } = Astro2.props;
  const titleString = `Pattern Recognition${title ? ` - ${title}` : ""}`;
  const descriptionString = description ? `${description}` : "";
  return renderTemplate`<html lang="kr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${titleString} Pattern Recognition</title><meta name="description"${addAttribute(descriptionString, "content")}>${renderHead()}</head> <body class="bg-background text-primary flex h-full min-h-dvh flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <div class="flex w-full grow"> <!-- info Side Nav --> ${renderComponent($$result, "Sidebar", $$Sidebar, {})} <!-- info 페이지 컨텐츠 컨테이너 --> <main class="flex-1 p-4 sm:p-6"> <!-- info 개별 페이지 동적 컨텐츠 주입 dynamic contents injection--> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/layouts/root-layout.astro", void 0);

export { $$RootLayout as $, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, DEFAULT_HASH_PROPS as a, getCollection as g, renderEntry as r };
