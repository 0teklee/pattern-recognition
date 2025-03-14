import type { Domains, SubRoot } from "./domains";

type BaseSearchParam = "category" & ParamPattern;

// 프로그래밍 언어 (js, ts ...tba)
type ParamLang = "lang";

// 릿코드, 프로그래머스 같은 코딩 플랫폼
type ParamPlatform = "platform";

// 난이도 (문제 난이도, 러닝 커브)
type ParamLevel = "level";

// 알고리즘 패턴, 디자인 패턴 관련 (Atomic Design, Island), 설계 패턴
type ParamPattern = "pattern";

// React (포함), Next.js, Astro, Vue, Svelt, ...TBA - beyond FE
type ParamFramework = "framework";

// UI 컴포넌트
type ParamComponent = "components";

// CSS, Animation, Runtime styling, tailwind, animation (GSAP, Framer Motion), ETC
type ParamStyle = "style";

// algorithms 전용 searchParam
type AlgorithmSearchParam = ParamLang | ParamPlatform | ParamLevel;

// UI/UX 전용 searchParam
type UISearchParam = ParamFramework | ParamComponent | ParamStyle;

// searchParam 타입: dir에 따라 달라짐
type SearchParam<T extends SubRoot> = T extends Domains.Algorithms
  ? BaseSearchParam | AlgorithmSearchParam
  : T extends Domains.Uiux
    ? BaseSearchParam | UISearchParam
    : never;

export type {
  BaseSearchParam,
  AlgorithmSearchParam,
  UISearchParam,
  SearchParam,
};
