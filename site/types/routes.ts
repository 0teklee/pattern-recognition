import type { KeysOf, SubsetOfKeys } from "@site-types/utility";

const Routes = {
  index: "/",
  algorithms: "/algorithms",
  uiux: "/uiux",
} as const;

const RouteKeyMap = Object.keys(Routes).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {}) as Record<RouteKeyType, RouteKeyType>;

type RouteType = typeof Routes;
type RouteKeyType = KeysOf<RouteType>;
type SubRouteType = SubsetOfKeys<RouteType, "algorithms" | "uiux">;

export { Routes, RouteKeyMap };
export type { SubRouteType, RouteKeyType, RouteType };
