#### commands:
* `npm run build`
> build the js, typescript used as transpiler only

* `npm run dev:server`
> run simple dev server via `http-server`

* `npm run typecheck`
> run typescript and check typings

* `npm run dependency:graph`
> run "madge" in order to build the dependency graph (svg image)

#### folder structure:
```
application/
├── src
│   ├── application
│   │   ├── commons
│   │   │   └── AppRequiredServices.ts
│   │   └── dashboard
│   │       └── services
│   │           ├── MentionService.ts
│   │           └── MentionServiceImpl.ts
│   ├── entries
│   │   ├── inline.ts
│   │   └── tsconfig.json
│   ├── general
│   │   ├── injector.ts
│   │   └── services
│   │       ├── account
│   │       │   ├── AccountServiceImpl.ts
│   │       │   └── index.ts
│   │       └── user
│   │           ├── UserServiceImpl.ts
│   │           └── index.ts
│   ├── lazy-modules
│   │   ├── board
│   │   │   ├── BoardImpl.ts
│   │   │   ├── BoardInjector.ts
│   │   │   ├── BoardModule.ts
│   │   │   └── tsconfig.json
│   │   ├── dashboard
│   │   │   ├── DashboardImpl.ts
│   │   │   ├── DashboardInjector.ts
│   │   │   ├── DashboardModule.ts
│   │   │   └── tsconfig.json
│   │   └── feed
│   │       ├── FeedImpl.ts
│   │       └── FeedModule.ts
│   ├── tsconfig.json
│   └── tsconfig.modules.json
├── static
│   └── index.html
├── target
│   └── static
│       ├── board.chunk.js
│       ├── dashboard.chunk.js
│       ├── feed.chunk.js
│       ├── index.html
│       └── inlineEntry.bundle.js
└── webpack.config.js
```
