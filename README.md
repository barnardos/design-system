# Design System

## Installation

1. Install latest LTS [Node.js](https://nodejs.org/en/).
2. Install the Barnardo's Design System components using:

```shell
npm install @barnardos/components
```

3. Import the components you need. You can either import:

- the React components (recommended)
- just the CSS of the components

### Importing the React components

Use named imports.

For example, to import the `BackLink` and `Pagination` components:

```javascript
// MyComponent/index.js
import { BackLink, Pagination } from "@barnardos/components";
```

### Importing the CSS only

If you aren't using [React](https://reactjs.org), you can still use the CSS of each component.

For example, to import the CSS of the `BackLink` and `Pagination` components:

```css
/* src/index.css */
@import "node_modules/@barnardos/components/custom-properties.css";
@import "node_modules/@barnardos/components/BackLink/index.css";
@import "node_modules/@barnardos/components/Pagination/index.css";
```

You'll need to use [`postcss-present-env`](https://preset-env.cssdb.org) to transpile the CSS using the Design System's [PostCSS](https://github.com/barnardos/design-system/blob/master/postcss.config.js) and [browserslist](https://github.com/barnardos/design-system/blob/master/.browserslistrc) configurations.

---

Looking to contribute? View the [contributing guide](.github/CONTRIBUTING.md).
