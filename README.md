#### commands:
* `npm run build`
> build the js, typescript used as transpiler only

* `npm run dev:server`
> run simple dev server via `http-server`

* `npm run typecheck`
> run typescript and check typings

#### folder structure:
```
application/
├── src
│   ├── application
│   │   └── dashboard
│   │       └── services
│   │           └── MentionService.ts
│   ├── embed
│   ├── entries
│   │   └── inline.ts
│   ├── general
│   │   └── services
│   │       └── UserService.ts
│   ├── lazy-modules
│   │   ├── board
│   │   │   ├── BoardImpl.ts
│   │   │   └── BoardModule.ts
│   │   ├── dashboard
│   │   │   ├── DashboardImpl.ts
│   │   │   └── DashboardModule.ts
│   │   └── feed
│   │       ├── FeedImpl.ts
│   │       └── FeedModule.ts
│   ├── picker
│   ├── sdk
│   ├── storybook
│   ├── tests
│   └── tsconfig.json
├── static
│   └── index.html
├── target
│   └── static
│       ├── board.chunk.js
│       ├── dashboard.chunk.js
│       ├── feed.chunk.js
│       ├── index.html
│       └── inlineEntry.bundle.js
├── typings
└── webpack.config.js
```
