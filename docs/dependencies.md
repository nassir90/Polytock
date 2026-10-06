# Dependencies

What Polytock uses, as of 6 October 2026, and the maintained libraries that could replace parts of it that are
written by hand. Upstream activity is the date of the repository's last push.

## In use

### In the page

Loaded from jsDelivr through the import map in `public/index.html`. No bundler, no `node_modules`.

| Package | Version | Latest | Upstream | Used for |
|---|---|---|---|---|
| [three](https://github.com/mrdoob/three.js) | 0.186.1 | 0.186.1 | active (6 Oct 2026) | rendering, maths |
| [cannon-es](https://github.com/pmndrs/cannon-es) | 0.20.0 | 0.20.0 | **dormant**: last release Aug 2022, last push Jan 2024 | rigid-body physics |

three.js addons, from the same release:

- `controls/OrbitControls`: the camera.
- `environments/RoomEnvironment`: the studio reflections.
- `geometries/ConvexGeometry`: meshes from each solid's corners.
- `math/ConvexHull`: physics hulls.
- `postprocessing/Pass` (`FullScreenQuad`): the screen-space passes.

Fonts, from Google Fonts: Jost (500), IBM Plex Mono (400, 500).

### Tooling

- `wrangler` ^4, locked at 4.145.0 (latest 4.148.0): Cloudflare Worker deploys.
- `promo/` records with TapaTab and builds with ShadowKit (`~/projects/TapaTab`, `~/projects/ShadowKit`). Both are
  local, not packages.

## Written by hand, and what could replace it

| Ours | Lines | Maintained alternative | Worth it? |
|---|---|---|---|
| Physics on cannon-es | – | [Rapier](https://github.com/dimforge/rapier) (`@dimforge/rapier3d-compat` 0.21.0, active; the JS bindings now live in the main repo) | **Yes, eventually.** cannon-es is the one dormant dependency. Rapier is faster (WASM), maintained, and has convex hulls, sleeping and kinematic bodies, which is everything the clocks use. It is the biggest change on this list: bodies, the pull spring and stand-up all move over. |
| Selection outline: mask pass + edge shader (`renderOutline`, `outlineMat`) | ~45 | `OutlinePass` (three/addons), or `OutlineEffect` in [postprocessing](https://github.com/pmndrs/postprocessing) 6.39.5 (active) | Maybe. Ours is small and does exactly the pulsing grey ring wanted. The libraries need an `EffectComposer`, which would also take over the bloom. |
| Night bloom: occluder + glow layers, separable blur, additive mix (`renderBloom`, `blurMat`, `bloomMixMat`) | ~60 | `SelectiveBloomEffect` in postprocessing, or `UnrealBloomPass` (three/addons) | Maybe, together with the outline: one `EffectComposer` with both effects replaces ~100 lines and two hand-written shaders. |
| Smooth button and key zoom (`zoomBy`, `stepZoom`) | ~15 | [camera-controls](https://github.com/yomotsu/camera-controls) 3.1.2 (active): `dolly(distance, true)` eases on its own | Only if the camera grows more behaviours; otherwise ours is fine. |
| Numerals painted into canvas textures (`sideLabels`) | ~30 | [troika-three-text](https://github.com/protectwise/troika) 0.52.5 (active): SDF text, sharp at any zoom | Yes, if close-ups matter. The canvas numerals soften when the camera zooms in; SDF text stays crisp. The layout maths (`labelPlan`) would stay. |
| Sun and moon from the clock time (`placeBodies`) | 5 | [SunCalc](https://github.com/mourner/suncalc) 2.1.1 (active) | No. The sky is stylised on purpose (sunrise at 6:00, sunset at 18:00). Real positions would tie it to a place and a date. |
| Sky dome with clouds (`skyMat`) | ~45 | `Sky` (three/addons, Preetham atmosphere) | No. It has no clouds, and the sky-fog trick reads this dome. |
| Physics hull from points (`hullShape`) | ~15 | three-to-cannon | No: that repository is archived. |
| Corners of a solid from its planes (`cornersOf`) | ~15 | – | Keep. It is a short, exact half-space intersection. |
| Video byte ranges in the Worker (`withRanges`) | ~25 | Workers static assets | Check first. If the assets binding answers `Range` requests itself, this goes; Safari needs ranges for the films. |
