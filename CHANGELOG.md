# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]
### Changed
- Updated dependencies
### Fixed
- Call for react test utils

## [15.1.0] 2016-07-28
### Added
- expose `jsdom` to the global context, so that the API can be used
- `console.debug`, as it is not available in node

### Changed
- global `__DEBUG__` can now be set with `DEBUG` environment variable

### Fixed
- `window.location.href` is now correctly set with jsdom

## [15.0.1] 2016-07-27
### Fixed
- global `__DEBUG__` variable does not lead to errors when running tests in the commandline.

## [15.0.0] 2016-05-17
### Changed
- Upgrade to React v15. We start to use the same major version as React, so that managing the dependency is easier for developers.
