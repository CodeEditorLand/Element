# Changelog - Element

`Land/Element/` is the umbrella for the fleet - the directory whose submodules
are the actual elements (Mountain, Cocoon, Wind, Sky, Air, Echo, Common, Vine,
Mist, Output, Rest, SideCar, Worker, Grove, Maintain). Each element keeps its
own CHANGELOG; this file records what we changed at the umbrella level - the
cross-cutting submodule syncs and structural moves that don't fit in any single
element's history. Format adapted from
[Keep a Changelog](https://keepachangelog.com/).

## [v2.2] - Bundled-Electron Profile: Correctness Pass (April 2026)

We synced the Output and Sky submodules together once the bundled-electron
correctness fixes had landed in their respective element repositories.

### Changed

- **Output and Sky submodules** synced as a pair alongside their CHANGELOG
  rewrites - their v2.2 entries describe the actual fixes; this commit is the
  umbrella-level pin update.

## [v2.1] - Full Workbench Lift (April 2026)

We rewrote each element's CHANGELOG in our own voice during this window. The
Element umbrella picked up the submodule pin updates that followed each rewrite:

- **Common** CHANGELOG revised with narrative formatting.
- **Air** CHANGELOG synced with improved formatting and structure.
- **Wind** CHANGELOG restructured.
- **Cocoon** CHANGELOG updated with v2.2 release and improved narrative.
- **Output** and **Sky** synced together (see v2.2 entry above).

## [v0.0] - Project Inception

Initial empty umbrella scaffold. The substance lives in the per-element
CHANGELOGs under each subdirectory.
