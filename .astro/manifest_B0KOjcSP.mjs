import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CTjLOdeR.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/tekwoo/Desktop/work/code-projects/pattern-recognition/","cacheDir":"file:///Users/tekwoo/Desktop/work/code-projects/pattern-recognition/node_modules/.astro/","outDir":"file:///dist/dev/build-algo/","srcDir":"file:///Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/","publicDir":"file:///Users/tekwoo/Desktop/work/code-projects/pattern-recognition/public/","buildClientDir":"file:///dist/dev/build-algo/client/","buildServerDir":"file:///dist/dev/build-algo/server/","adapterName":"","routes":[{"file":"file:///dist/dev/build-algo/algorithms.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/algorithms","isIndex":true,"type":"page","pattern":"^\\/algorithms\\/?$","segments":[[{"content":"algorithms","dynamic":false,"spread":false}]],"params":[],"component":"site/pages/algorithms/index.astro","pathname":"/algorithms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///dist/dev/build-algo/uiux.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/uiux","isIndex":true,"type":"page","pattern":"^\\/uiux\\/?$","segments":[[{"content":"uiux","dynamic":false,"spread":false}]],"params":[],"component":"site/pages/uiux/index.astro","pathname":"/uiux","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///dist/dev/build-algo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"site/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://patterns.leetekwoo.com","base":"/dist/dev/build-algo","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/sidebar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/layouts/root-layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/algorithms/[...id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:site/pages/algorithms/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/algorithms/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:site/pages/algorithms/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:site/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/[...id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:site/pages/uiux/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/pages/uiux/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:site/pages/uiux/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:site/pages/algorithms/index@_@astro":"pages/algorithms.astro.mjs","\u0000@astro-page:site/pages/algorithms/[...id]@_@astro":"pages/algorithms/_---id_.astro.mjs","\u0000@astro-page:site/pages/uiux/index@_@astro":"pages/uiux.astro.mjs","\u0000@astro-page:site/pages/uiux/[...id]@_@astro":"pages/uiux/_---id_.astro.mjs","\u0000@astro-page:site/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B0KOjcSP.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/.astro/content-modules.mjs":"chunks/content-modules_ad1b9lld.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D95z2qEB.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Chc7-W16.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/130-surrounded-regions.mdx?astroPropagatedAssets":"chunks/130-surrounded-regions_CS6lXBot.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/2-add-two-numbers.mdx?astroPropagatedAssets":"chunks/2-add-two-numbers_D_t_jrwt.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/3-longest-substring.mdx?astroPropagatedAssets":"chunks/3-longest-substring_DH7Be31W.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/4-median-of-two-sorted-array.mdx?astroPropagatedAssets":"chunks/4-median-of-two-sorted-array_DXw5nYNg.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/5-longest-palindromic-substring.mdx?astroPropagatedAssets":"chunks/5-longest-palindromic-substring_DaY06rrs.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/94-binary-tree-inorder-traverse.mdx?astroPropagatedAssets":"chunks/94-binary-tree-inorder-traverse_Wa_j7bKI.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/79-word-search.mdx?astroPropagatedAssets":"chunks/79-word-search_CkifTmcK.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/130-surrounded-regions.mdx":"chunks/130-surrounded-regions_B2GEaxkS.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/2-add-two-numbers.mdx":"chunks/2-add-two-numbers__C-cmSNp.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/3-longest-substring.mdx":"chunks/3-longest-substring_aIT5qsOA.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/4-median-of-two-sorted-array.mdx":"chunks/4-median-of-two-sorted-array_CQ521BsU.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/5-longest-palindromic-substring.mdx":"chunks/5-longest-palindromic-substring_pB_6Q-5Y.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/94-binary-tree-inorder-traverse.mdx":"chunks/94-binary-tree-inorder-traverse_abcYBva0.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/79-word-search.mdx":"chunks/79-word-search_SYFV7oGj.mjs","/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/filter.astro?astro&type=script&index=0&lang.ts":"asset/filter.astro_astro_type_script_index_0_lang.6ISfOxUN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/components/filter.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"category-filter\"),o=document.querySelectorAll(\".tag-checkbox\"),l=document.getElementById(\"reset-filter\"),f=document.getElementById(\"filter-count\"),y=new URLSearchParams(window.location.search),h=y.get(\"category\")||\"\",m={};o.forEach(a=>{const t=a.getAttribute(\"data-tag-key\"),c=a.value;t&&y.get(t)===c&&(a.checked=!0,m[t]=c)});h&&(i.value=h);(Object.keys(m).length>0||h)&&l.classList.remove(\"hidden\");function r(){const a=i.value,t={};o.forEach(e=>{if(e.checked){const s=e.getAttribute(\"data-tag-key\");s&&(t[s]||(t[s]=[]),t[s].push(e.value))}});const c=document.querySelectorAll(\"ol > li\");let u=0;c.forEach(e=>{const s=e.getAttribute(\"data-category\");let d=!s&&!a||s&&s.startsWith(a);if(d&&Object.keys(t).length>0)for(const g in t){const v=e.getAttribute(`data-tag-${g}`),E=t[g].some(w=>v===w);if(t[g].length>0&&!E){d=!1;break}}d?(e.classList.remove(\"hidden\"),u++):e.classList.add(\"hidden\")}),f.textContent=`Result : ${u} Posts`;const n=new URL(window.location.href);a?n.searchParams.set(\"category\",a):n.searchParams.delete(\"category\"),new Set(Array.from(o).map(e=>e.getAttribute(\"data-tag-key\"))).forEach(e=>{e&&n.searchParams.delete(e)});for(const e in t)t[e].length>0&&n.searchParams.set(e,t[e].join(\",\"));window.history.pushState({},\"\",n),a||Object.keys(t).some(e=>t[e].length>0)?l.classList.remove(\"hidden\"):l.classList.add(\"hidden\")}i.addEventListener(\"change\",r);o.forEach(a=>{a.addEventListener(\"change\",r)});l.addEventListener(\"click\",()=>{i.value=\"\",f.textContent=\"\",o.forEach(a=>{a.checked=!1}),r()});window.addEventListener(\"load\",r);"]],"assets":["/dist/dev/build-algo/file:///dist/dev/build-algo/algorithms.html","/dist/dev/build-algo/file:///dist/dev/build-algo/uiux.html","/dist/dev/build-algo/file:///dist/dev/build-algo/index.html"],"buildFormat":"file","checkOrigin":false,"serverIslandNameMap":[],"key":"RkW1KtBff7GD++PkJVkKo4fupS+tDeN1X+Sz9X7LnyY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
