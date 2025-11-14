
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed
- Removed unused `pkgs` attribute from `.idx/dev.nix` to address a `nixf` warning.

## [0.3.0] - 2023-10-27

### Added
- Migrated the entire frontend from a basic HTML structure to a Next.js application.
- This introduced a component-based architecture, server-side rendering (SSR), and a more scalable project structure.
- The new Next.js project is located in the `unlim-cloud-nextjs` directory.

## [0.2.0] - 2023-10-26

### Added
- Implemented the UI/UX improvements outlined in the `UI_UX_REPORT.md`.
- **Homepage:**
    - Redesigned with a dynamic hero section and a clear call-to-action (CTA).
    - Added a features overview with icons and descriptions.
    - Incorporated more engaging visuals.
- **About Page:**
    - Articulated the project's mission and vision.
    - Added a section for the team/community.
    - Included the project's story.
- **Features Page:**
    - Created detailed sections for each feature.
    - Added use cases and examples.

### Changed
- Replaced the placeholder "About" and "Features" pages with detailed content.

## [0.1.0] - 2023-10-25

### Added
- Initial project setup.
- Basic HTML structure with a single `index.html` file.
- Placeholder pages for "About" and "Features".
- Minimal styling.

