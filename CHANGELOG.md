# CHANGELOG

## 4.3.1

Fix TS types

## 4.3.0

Possiblility to override active tab colors

## 4.2.4

Fix react peerDep

## 4.2.3

Remove `babel-plugin-typescript-to-proptypes`

## 4.2.2

Remove `prop-types` package from dependencies

## 4.2.1

Change types to handle "children" due to @types/react change

## 4.2.0

### Added

Add the `showIndex` on the `Tabs` component. It allows you to disable showing tab indexes.

## 4.1.0

### Added

Add the `defaultValue` on the `Tabs` component. It allows you to set initial opened tab to any tab you want instead of the first one. Thanks to @zarezadeh (#29)

## 4.0.0

### Changed

- Upgrade dependencies to ink `^3.0.0`
- `hasFocus` has been renamed to `isFocused` to match ink API.
- Drop support for node < 10 (ink does not supports them anyway).

## 3.0.2

### Changed

- Smaller build

## 3.0.1

### Fixed

- Fix issue with typescript and <Tab> Component. See #23

## 3.0.0

### API Compatibility

Version 3.0.0 maintains API compatibility with 2.x but due to major internal changes and potential behavior differences across nearly all API surfaces, semver dictates a major version bump.

### Changed

- Moved to typescript 😃

### Added

- Added the `hasFocus` props.

## 2.2.1

### Fixed

Fixed type module node ( Thanks to @aequasi )

## 2.2.0

### Added

Add typescript definition files #17. (Thanks to @sw-yx )

## 2.1.4

### Fixed

Fix issue with ink >= 2.4.0 preventing keypress events to be triggered. See <https://github.com/vadimdemedes/ink/issues/243>

## 2.1.3

### Changed

Fix issue from 2.1.2 where the tabs did appear in column instead of in row.

## 2.1.2

### Changed

Add better proptypes of TabsWithStdin to avoid issue with StdinContext & nodemon. Fixes #9

## 2.1.1

### Changed

- Fix small issue with proptypes and default width parameters

## 2.1.0

### Changed

- [Minor BC Break] Need ink ^2.1.0 (use automatic keypress event, added in 2.0.4)
- Fix issue with CTRL-C and multiple instances
- Use the `width` parameter when flexDirection is set to `column(-reverse)` to set the separator width
- Expose a `keyMap` object to override default keyMap

## 2.0.1

### Changed

Remove unmaintained keypress in favor of node "readline"

## 2.0.0

- [Breaking] Use `ink` v2 (and thus React + react-reconcilier)
- [Breaking] drop support for Node < 8. (ink 2 is dropping support anyway)

## 1.3.0

### Changed

- Use Babel 7.

## 1.2.1

### Changed

- Upgrade peerDependency to ink ^0.5.0 See [#4](https://github.com/jdeniau/ink-tab/pull/4)

## 1.2.0

### Changed

- Upgrade dependency to ink ^0.5.0 See [#4](https://github.com/jdeniau/ink-tab/pull/4)
- Tab index now starts at 1 ("1. 2. 3." instead of "0. 1. 2.")

## 1.1.0

### Added

- Cycle through tabs when hitting bounds
- Navigation through tabs with TAB (move to next tab) and SHIFT+TAB (move to previous tab)
- Navigation with "META" + Tab number

### Fixed

Fixed a bug when hitting bounds of tabs

## 1.0.1

### Changed

Allow version 0.4.x of ink

## 1.0.0

Initial version, working version of ink-tab
