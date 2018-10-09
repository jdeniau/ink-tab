# CHANGELOG

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
