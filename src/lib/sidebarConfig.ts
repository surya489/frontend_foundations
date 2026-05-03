export const sidebarConfig = {
  javascript: [
    {
      group: "Fundamentals",
      items: [
        { title: "What is JavaScript?", href: "/javascript/what-is-js" },
        { title: "Variables & Data Types", href: "/javascript/variables" },
        { title: "Memory & Data Storage", href: "/javascript/memory" },
        { title: "Primitive vs Reference", href: "/javascript/primitive-vs-reference" },
        { title: "ES5 vs ES6+", href: "/javascript/es5-vs-es6" },
      ]
    },
    {
      group: "Advanced Basics",
      items: [
        { title: "Functions Deep Dive", href: "/javascript/functions-deep" },
        { title: "Generator Functions", href: "/javascript/generators" },
        { title: "Class vs Function", href: "/javascript/class-vs-function" },
      ],
    },
    {
      group: "Core Logic",
      items: [
        { title: "Operators & Conditions", href: "/javascript/operators" },
        { title: "Loops & Iteration", href: "/javascript/loops" }
      ]
    },
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
    {
      group: "Fundamentals",
      items: [
        { title: "What is React", href: "/react/what-is-react" },
        { title: "JSX", href: "/react/jsx" },
        { title: "Components", href: "/react/components" },
        { title: "Props", href: "/react/props" },
        { title: "State", href: "/react/state" },
      ],
    },

    {
      group: "Core Concepts",
      items: [
        { title: "useState", href: "/react/use-state" },
        { title: "useEffect", href: "/react/use-effect" },
        { title: "Events", href: "/react/events" },
        { title: "Conditional Rendering", href: "/react/conditional-rendering" },
        { title: "Lists & Keys", href: "/react/lists-keys" },
        { title: "Forms", href: "/react/forms" },
      ],
    },

    {
      group: "Rendering & Lifecycle",
      items: [
        { title: "Rendering Flow", href: "/react/rendering-flow" },
        { title: "Re-rendering", href: "/react/re-rendering" },
        { title: "useEffect Lifecycle", href: "/react/use-effect-lifecycle" },
        { title: "useLayoutEffect", href: "/react/use-layout-effect" },
      ],
    },

    {
      group: "Advanced Hooks",
      items: [
        { title: "useRef", href: "/react/use-ref" },
        { title: "useMemo", href: "/react/use-memo" },
        { title: "useCallback", href: "/react/use-callback" },
        { title: "useReducer", href: "/react/use-reducer" },
        { title: "Context API", href: "/react/context" },
        { title: "Custom Hooks", href: "/react/custom-hooks" },
      ],
    },

    {
      group: "Performance",
      items: [
        { title: "React.memo", href: "/react/react-memo" },
        { title: "Optimizing Re-renders", href: "/react/optimization" },
      ],
    },

    {
      group: "Patterns",
      items: [
        { title: "Controlled vs Uncontrolled", href: "/react/controlled-uncontrolled" },
        { title: "Lifting State", href: "/react/lifting-state" },
        { title: "Prop Drilling", href: "/react/prop-drilling" },
        { title: "Component Composition", href: "/react/composition" },
      ],
    },

    {
      group: "Advanced Concepts",
      items: [
        { title: "Error Boundaries", href: "/react/error-boundaries" },
        { title: "Portals", href: "/react/portals" },
        { title: "Suspense", href: "/react/suspense" },
      ],
    },

    {
      group: "Real World",
      items: [
        { title: "Form Validation", href: "/react/form-validation" },
        { title: "API Handling", href: "/react/api-handling" },
        { title: "Loading & Error States", href: "/react/loading-error" },
        { title: "Debounced Input", href: "/react/debounce-input" },
      ],
    },
  ],
  nextjs: [
    {
      group: "Basics",
      items: [
        { title: "What is Next.js", href: "/nextjs/what-is-nextjs" },
        { title: "File-based Routing", href: "/nextjs/routing" },
        { title: "App Router", href: "/nextjs/app-router" },
      ],
    },
    {
      group: "Rendering",
      items: [
        { title: "Server vs Client Components", href: "/nextjs/server-client" },
        { title: "SSR vs CSR vs SSG", href: "/nextjs/rendering-types" },
      ],
    },
    {
      group: "Data Fetching",
      items: [
        { title: "Fetching Data", href: "/nextjs/data-fetching" },
        { title: "Loading & Error Handling", href: "/nextjs/loading-error" },
      ],
    },
    {
      group: "Backend",
      items: [
        { title: "API Routes", href: "/nextjs/api-routes" },
        { title: "Middleware", href: "/nextjs/middleware" },
      ],
    },
  ],
  typescript: [
    {
      group: "Fundamentals",
      items: [
        { title: "What is TypeScript", href: "/typescript/what-is-typescript" },
        { title: "Basic Types", href: "/typescript/basic-types" },
        { title: "Type Inference", href: "/typescript/type-inference" },
        { title: "Special Types (any, unknown, never)", href: "/typescript/special-types" },
      ],
    },
    {
      group: "Core",
      items: [
        { title: "Functions in TS", href: "/typescript/functions" },
        { title: "Objects & Arrays", href: "/typescript/objects-arrays" },
        { title: "Type vs Interface", href: "/typescript/type-vs-interface" },
        { title: "Optional & Readonly", href: "/typescript/optional-readonly" },
      ],
    },
    {
      group: "Advanced Types",
      items: [
        { title: "Union & Intersection", href: "/typescript/union-intersection" },
        { title: "Literal & Tuple Types", href: "/typescript/literal-tuple" },
        { title: "Type Narrowing", href: "/typescript/type-narrowing" },
        { title: "Enums", href: "/typescript/enums" },
      ],
    },
    {
      group: "Generics",
      items: [
        { title: "Generics Basics", href: "/typescript/generics" },
        { title: "Generic Constraints", href: "/typescript/generic-constraints" },
      ],
    },
    {
      group: "Utility Types",
      items: [
        { title: "Utility Types Overview", href: "/typescript/utility-types" },
        { title: "Pick & Omit", href: "/typescript/pick-omit" },
        { title: "Partial & Required", href: "/typescript/partial-required" },
      ],
    },
    {
      group: "React + TypeScript",
      items: [
        { title: "Typing Props", href: "/typescript/react-props" },
        { title: "useState & Hooks", href: "/typescript/react-hooks" },
        { title: "API Typing", href: "/typescript/react-api" },
      ],
    },
  ]
};