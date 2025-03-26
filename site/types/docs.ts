import { type RouteKeyType, type RouteType } from "@site/types/routes.ts";

/* NOTE : Type Docs
 *  - jsdoc으로 타입에 주석을 추가합니다.
 *  - Type comments with jsdoc
 * */

/** Note 1 - Query Key Type Docs**/

/**
 * @typedef {Record<"key-name", "key-name">} QueryKeyTypes
 * @desc ## **Query Key Types**
 * {@link Queries}에 속한 개별 키의 목적을 설명합니다. <br>
 * ---
 * @prop {category} category
 * @prop {lang} lang
 * @prop {platform} platform
 * @prop {level} level
 * @prop {pattern} pattern
 * @prop {framework} framework
 * @prop {component} component
 * @prop {style} style
 */

/**
 * @typedef {"category"} category
 * @readonly
 * @desc
 * **IMPORTANT**:
 * query의 category는 {@link BaseSchema}의 <code><b color="orange">{@link ContentFilePath}</b></code> 기반입니다. <br>
 * - <code>@content/algorithm|uiux/<b color="lime">{category}</b></code>
 * - 파일, 폴더 기반의 경로
 * - <b>`category`</b> is path of a content src
 **/

/**
 * @typedef {"lang"} lang
 * @readonly
 * @desc
 * - 프로그래밍 언어 Programming language
 * - e.g. JavaScript, TypeScript, & more
 */

/**
 * @typedef {"platform"} platform
 * @readonly
 * @desc
 * - 알고리즘 문제 풀이 플랫폼 (예: LeetCode, Programmers 등)
 */

/**
 * @typedef {"level"} level
 * @readonly
 * @desc
 * - 난이도 (문제 난이도, 러닝 커브 등)
 */

/**
 * @typedef {"pattern"} pattern
 * @readonly
 * @desc
 * - 알고리즘 및 디자인 패턴 (예: Atomic Design, Island, MVC 등)
 */

/**
 * @typedef {"framework"} framework
 * @readonly
 * @desc
 * - 프레임워크 및 라이브러리 (예: React, Next.js, Astro, Vue 등)
 */

/**
 * @typedef {"component"} component
 * @readonly
 * @desc
 * -  컴포넌트 관련 키 (예: 버튼, 모달, 카드 등)
 */

/**
 * @typedef {"style"} style
 * @readonly
 * @desc
 * - 스타일 및 애니메이션
 * - `CSS`, `pre/post-processors`, `animation`, `CSS-In-JS` & more..
 */

/** Note 2 - Schema Type Docs**/

/**
 * @summary **BaseSchema** is a interface refers to metadata from `@content/*`<br>
 * @desc 컨텐츠 스키마 Base 타입
 * ###### MDX front matter(metadata) + 문서 경로(path) 기반 <br>
 * ---
 * ###### Properties
 * - **`title`**: {@link ContentMeta} content 제목 (frontmatter)
 * - **`description`**: {@link ContentMeta} content desc (frontmatter)
 * - **`createdAt`**: {@link ContentMeta} content 작성일 (frontmatter)<br>
 * ---
 * **Typed Properties:** <br>
 * **`path`**: {@link dynamicRef} content file 경로
 *    - _Read More: {@link ContentFilePath}_<br>
 * **`tags`**: {@link dynamicRef} content 태그
 *    - 개별 content의 관계를 나타내는 태그. URL SearchParam 등 쿼리로 사용됨.
 *    - Tags are typed values to connect between contents.(MtoM relation, URLSearchParam, Query ) <br>
 * @see QueryKeyTypes
 * @prop {string} title
 * @prop {string} description
 * @prop {string} createdAt
 * @prop {RouteType} path
 * @prop {Array<QueryKeyTypes>} tags
 */
declare type BaseSchema<T extends RouteKeyType> = object & {
  path: [RouteType[T], string];
};

/**
 * @desc `/algorithms/*` Content Schema
 * -  path: 경로 구조 반영
 * - `/algorithms/{path}/{file_name}.mdx`
 * @see ContentFilePath
 * */
declare type AlgoSchema = BaseSchema<"algorithms">;

/**
 * @desc `/uiux/*` Content Schema
 * - **`path`**: content/uiux에서 **mdx file**의 경로.
 * - **path** of content's **mdx file**
 * ---
 * @example```xhtml
 * `/uiux/{path}/{file_name}.mdx`
 *  - **path**는 하위 경로의 **`src`**
 *  - `file_name`은 컨텐츠 MDX, 디테일 페이지의 URL pathname
 * ```
 * @see ContentFilePath
 * */
declare type UISchema = BaseSchema<"uiux">;

/** Note 3 - Typedef only
 *  Types only declared in jsdoc
 * **/

/**
 * @typedef {string} ContentMeta
 * @desc
 * - 컨텐츠 메타 데이터에서 동적인 값을 갖는 필드
 *    - 경로, 파일명, MDX frontmatter
 * - A field in metadata that has content-meta values from paths, file name, frontmatter
 * **/

/**
 * @typedef {string} dynamicRef
 * @desc
 * {@link ContentMeta}이면서  <code>key</code> 타입(literal string)의 <b>값value</b>에 해당하는 값입니다.<br>
 * 추후 포스팅 데이터 간의 유연한 관계를 위해 도입했습니다. (예: "연관, 추천 컨텐츠") <br>
 *
 * @eng
 * Dynamic value that has literal string typed keys. (e.g. values of URLSearchParam)<br>
 * This field is used to make dynamic relations between posts<br>
 * (e.g "related/recommended contents" api for later)<br>
 * ---
 * @see <code color="lime">{@link QueryKeyTypes}</code>
 * * dynamicRef의 키 타입 문서
 * * keyof dynamicRef's Types
 * **/

/**
 * @typedef ContentFilePath
 * @desc
 * ## Path
 * @path
 * <code>@content/<b>{routes}/{...sub-dir}/{file_name}.mdx</code></b><br>
 * - content의 파일 경로입니다. 이를 기반으로 URL로 변환합니다.
 * ---
 * @routes <code><b color="orange">{routes}/</code>: `/algorithms`, `/uiux`
 * * 리스트 페이지 URL이 됩니다. list page url
 * * _see also: {@link SubRoutes}_
 * @sub-dir <code><b color="lime">{file_name}.mdx</code>
 * * 디테일 페이지 URL이 됩니다. detail(post slug) page url
 * * **file_name.mdx**의 위치가 디테일 페이지의 기준이 됩니다.
 * @algorithms  <code>@content/<b color="orange">{algorithms}/{...sub-dir}/{file_name}.mdx</code></b>
 * @uiux <code>@content/<b color="aqua">{uiux}/{...sub-dir}/{file_name}.mdx</code></b>
 *
 * @Examples
 *  `@content/algorithms/graph/(dfs | bfs | traverse)` <br>
 *  3 contents :
 *  - dfs
 *  - bfs
 *  - traverse
 *  <pre>
 *    @content
 *      └─── algorithms
 *             └── graph
 *                   ├── dfs.mdx
 *                   ├── bfs.mdx
 *                   └── traverse.mdx
 *
 *  </pre>
 * ---
 *  `@content/uiux/button/(default | with-icon)` <br>
 *  2 contents
 *  - button/default
 *  - button/with-icon
 *  <pre>
 *     @content
 *      └─── uiux
 *             └── button
 *                   ├── default.mdx
 *                   ├── default.react
 *                   ├── default.astro
 *                   ├── default.vue
 *                   ├── with-icon.mdx
 *                   ├── with-icon.react
 *                   └── with-icon.vue
 *   </pre>
 *---
 *   `@content/uiux/list/(react-csr | astro-ssg)` <br>
 *   2 contents
 *   - react-csr
 *   - astro-ssg
 *   <pre>
 *     @content
 *        └─── uiux
 *             ├── button
 *             │      ├── default.mdx
 *             │      └── .....
 *             └── list
 *                    ├─── react-csr
 *                    │        ├── index.mdx
 *                    │        ├── index.tsx
 *                    │        ├── hooks.ts
 *                    │        ├── utils.ts
 *                    │        ├── items.tsx
 *                    │        └── container.tsx
 *                    │
 *                    └─── astro-ssg
 *                              ├── index.mdx
 *                              ├── utils.ts
 *                              ├── index.astro
 *                              ├── container.astro
 *                              └── item.astro
 *   </pre>
 * **/

export type { BaseSchema, AlgoSchema, UISchema };
