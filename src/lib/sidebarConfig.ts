export const sidebarConfig = {
  javascript: [
    {
      group: "Execution",
      items: [
        { title: "Execution Context", href: "/javascript/execution-context" },
        { title: "Call Stack", href: "/javascript/call-stack" },
        { title: "Hoisting", href: "/javascript/hoisting" },
        { title: "Scope & TDZ", href: "/javascript/scope-tdz" },
      ],
    },
    {
      group: "Functions",
      items: [
        { title: "Closures", href: "/javascript/closures" },
        { title: "this Keyword", href: "/javascript/this" },
        { title: "Arrow vs Normal", href: "/javascript/arrow-vs-normal" },
        { title: "Higher Order Functions", href: "/javascript/hof" },
      ],
    },
    {
      group: "Async",
      items: [
        { title: "Event Loop", href: "/javascript/event-loop" },
        { title: "Promises", href: "/javascript/promises" },
        { title: "Async / Await", href: "/javascript/async-await" },
      ],
    },
    {
      group: "Data",
      items: [
        { title: "Primitive vs Reference", href: "/javascript/primitive-vs-reference" },
        { title: "Array Methods", href: "/javascript/array-methods" },
      ],
    },
    {
      group: "Patterns",
      items: [
        { title: "Debounce", href: "/javascript/debounce" },
        { title: "Throttle", href: "/javascript/throttle" },
      ],
    },
  ],
  react: [
    { title: "useState", href: "/react/use-state" },
    { title: "useEffect", href: "/react/use-effect" },
    { title: "Custom Hooks", href: "/react/custom-hooks" },
  ],
  nextjs: [
    { title: "Routing", href: "/nextjs/routing" },
    { title: "SSR vs CSR", href: "/nextjs/rendering" },
    { title: "API Routes", href: "/nextjs/api-routes" },
  ],
};