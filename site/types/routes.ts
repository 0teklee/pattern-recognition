import type { KeysOf, SubsetOfKeys } from "@site/types/utility.ts";

const Routes = {
  index: "/",
  algorithms: "/algorithms",
  uiux: "/uiux",
} as const;

type RouteType = typeof Routes;
type RouteKeys = KeysOf<RouteType>;

type SubRoutes = SubsetOfKeys<RouteType, "algorithms" | "uiux">;

export { Routes };

export type { SubRoutes, RouteKeys, RouteType };
