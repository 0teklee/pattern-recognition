import type { RouteType } from "@site/types/routes.ts";
import type { KeysOf, SubsetOfKeys } from "@site/types/utility.ts";

/**@see QueryKeyTypes **/
export const Queries = {
  category: "category",
  lang: "lang",
  component: "component",
  framework: "framework",
  level: "level",
  platform: "platform",
  pattern: "pattern",
  style: "style",
} as const;

type QueriesType = typeof Queries;
type QueryKeys = KeysOf<typeof Queries>;

/** `/algorithms` only keys**/
type AlgorithmQueryKeys = SubsetOfKeys<
  QueriesType,
  "category" | "lang" | "platform" | "pattern" | "level"
>;

/** `/uiux` only keys **/
type UISQueryKeys = SubsetOfKeys<
  QueriesType,
  "category" | "framework" | "component" | "style" | "pattern"
>;

type DefaultParam = Partial<Record<QueryKeys, string>>;
/** `/algorithms` search param type **/
type AlgoParam = Partial<Record<AlgorithmQueryKeys, string>>;
/** `/uiux` search param type **/
type UIUXParam = Partial<Record<UISQueryKeys, string>>;

// searchParam 타입: path에 따라 달라짐
type SearchParam<T> = T extends RouteType["algorithms"]
  ? AlgoParam
  : T extends RouteType["uiux"]
    ? UIUXParam
    : DefaultParam;

export type {
  AlgorithmQueryKeys,
  UISQueryKeys,
  SearchParam,
  AlgoParam,
  UIUXParam,
};
