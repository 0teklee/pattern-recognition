enum Domains {
  Index = "index",
  Algorithms = "algorithms",
  Uiux = "uiux",
}

type SubRoot = Exclude<Domains, Domains.Index>;

export type { Domains, SubRoot };
