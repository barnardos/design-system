# Changelog

## 0.2.0

### Removed

- `Quote`, use either `PullQuote` or `BlockQuote` instead

### Changed

- `AttentionGrabbingLink` was renamed `ProminentLink`
- `AttentionGrabbingPromo` was renamed `ProminentPromo`
- `Label` `id` prop was renamed `htmlFor`

### Added

- Consistent focus state to all interactive elements
- Support for `Search` and `Menu` within `Header`
- `SkipLink` to allow keyboard users to skip to the main content

### Fixed

- Line heights of larger type scale sizes
- `BackLink` arrow style
- `Breadcrumb` chervon colour contrast
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
