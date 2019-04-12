# Contributing

Thank you for wanting to contribute. We welcome contributions from everyone, both inside and outside Barnardo’s.

If you’re unfamiliar with:

- open source projects, refer to guidance on [how to contribute](https://opensource.guide/how-to-contribute)
- the Barnardo’s development process, refer to the [developer manual](https://github.com/barnardos/developer-manual#contributing-code)

## Getting started

First, install [Node.js](https://nodejs.org/en/).

Then run these commands:

- `npm install` - install all dependencies
- `npm start` - start a development server

You can watch tests using:

- `npm run watch-unit-tests`
- `npm run watch-e2e-tests`

Before creating a PR you should run:

- `npm run format`
- `npm run test`

Use `npm run` to see a list of all the other available commands.

## Known issues

If you encounter an error, try deleting the `.cache` folder in the root of the project and run `npm start` again.

## Services

The providers are:

- [CircleCI](https://circleci.com) - continuous integration
- [Netlify](https://www.netlify.com) - continuous deployment
- [Google Analytics](https://analytics.google.com) - user analytics
- [Project Wallace](https://www.projectwallace.com/~barnardos/design-system) - CSS analytics

### Netlify

Deployment URLs:

- [Site](https://barnardos-design-system.netlify.com)

## Releasing

You should first publish to npm:

1. Run `npm --no-git-tag-version version major|minor|patch` to bump the version number in `package.json` and `package-lock.json`.
2. Update `CHANGELOG.md` and replace "Head" with the new version number.
3. Create a Pull Request with these changes.
4. Merge the Pull Request.
5. Run `npm publish`

Then release to GitHub:

1. Create a [new release](https://github.com/barnardos/design-system/releases/new).
2. Enter the version number for the "Tag version" and "Release title".
3. Copy and paste the version items from `CHANGELOG.md`.
4. Publish release
