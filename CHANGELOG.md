# Changelog

## Head

### Changed

- `Command` to `Trigger`
- `ContentsMenu` `items` prop to accept nested `items` rather than `level`
- `Hero` to explicitly accept `title` and `lede` props

### Added

- `Confirmation` component
- `Details` component
- `Image` component
- `Video` component

### Fixed

- `BackLink`, `BlockQuote`, `Callouts`, `Caption`, `Cite`, `CurrencyInput`, `Details`, `DonateLink`, `ErrorSummary`, `Fact`, `Field`, `Fieldset`, `Form`, `Hint`, `Label`, `Pagination`, `ProminentBlockQuote`, `ProminentCallout`, `ProminentLink`, `PullQuote`, `StartLink`, `Subheading`, `Switch`, `Switches`, `Teasers`, `TextArea`, `TextInput`, `Title`, `Topic` and `Trigger` spacing
- `BackLink` touch target size
- `Header` and `Submit` HTML semantics

## 0.4.1

### Fixed

- `ContentsMenu` content being hidden on short viewports
- `Header` error when `Search` isn't passed as prop

## 0.4.0

### Removed

- `SignpostLinks` as the `SignpostLink` component should be used singularly

### Changed

- `postcss.config.js` to disable autoprefixer’s IE11 `grid` support, use manual grid fallbacks instead
- `Promo` to `Teaser`
- `Promos` to `Teasers`
- `ProminentPromo` to `ProminentTeaser`
- `ContentsMenu`, `ErrorSummary`, `ProminentTeaser`, and `Teaser` `title` props to be `heading`
- `BlockQuote` and `ProminentBlockQuote` `name` prop to be required
- `Header` `search` prop to be of type `node`

### Added

- `DownloadLink` component
- `Callout` component
- `ProminentCallout` component

### Fixed

- focus state colour to improve contrast
- line heights on the type scale to improve readability
- horizontal scroll bar regression
- `BlockQuote`, `Command`, `ContentsMenu`, `CurrencyInput` and `Submit` look and feel to align with the developing Barnardo's look and feel
- `Cite`, `Fact`, `Hint`, `Link`, `ProminentBlockQuote` and `Topic` colour contrast accessibility
- `Breadcrumbs`, `ContentsMenu`, `Footer`, `Menu`, `Search` and `SignpostLink` hit size accessibility
- `SignpostLink` wrapping on smaller viewports
- `Site` scrolling behaviour to reduce motion

## 0.3.0

### Changed

- `Layout` to no longer consume `Site`, use them independently instead

### Added

- `NumberedList` component
- `Site` prop - `description`

### Fixed

- `Breadcrumbs` indent when wrapped onto multiple lines
- `Link` to use `GatsbyLink` for internal links
- `Header`, `Menu` and `Search` look and feel to align with the developing Barnardo’s look and feel
- `Footer` look and feel to distinguish it from `Section`

## 0.2.0

### Removed

- `Quote`, use either `PullQuote` or `BlockQuote` instead

### Changed

- All `to` props were renamed `href`
- `Label` `id` prop was renamed `htmlFor`
- `AttentionGrabbingLink` was renamed `ProminentLink`
- `AttentionGrabbingPromo` was renamed `ProminentPromo`

### Added

- Consistent focus state to all interactive elements
- Support for `Search` and `Menu` within `Header`
- `SkipLink` to allow keyboard users to skip to the main content

### Fixed

- Line heights of larger type scale sizes
- `BackLink` arrow style
- `Breadcrumbs` chervon colour contrast
- `CheckBoxes` and `RadioButtons` click area size
- `ContentsMenu` lack of stickiness and missing "In this section:" text
- `CurrencyInput` prefix style
- `DateInput` label association
- `Fact`, `Promo`, `ProminentPromo` and `Search` HTML semantics for screen readers
- `Field` lack of margin top
- `Header` horizontal scroll bar and logo link screen reader announcement
- `Layout` to contrain the maximum width
- `Menu` keyboard accessibility on wider viewport sizes

## 0.1.0

Initial release.
