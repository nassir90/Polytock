# Polytock

A clock you can pick up and throw. Polytock is a WebGL model of a black cube clock with one corner sliced off, where three stacked triangular rings turn on the cube's diagonal to show the hours, minutes and seconds. It runs in the browser with real physics, it doubles as a stopwatch and a timer, you can drop in more clocks built from other polyhedra, and you can take the whole thing outdoors into a day that follows the clock.

**Play it: [mpts.ie/games/polytock](https://mpts.ie/games/polytock/)**

The clock itself comes from [a reel](https://www.instagram.com/reel/Dd2_EWny62a/) posted by [@sushi_watches](https://www.instagram.com/sushi_watches/) on Instagram; Polytock is a model of it.

![Polytock at ten past ten](docs/images/hero.jpg)

## Films

The website opens with five short promotional films, shown square above the exhibit. Each is also cut 9:16 for phones, alongside five longer technical films on how the clock was built. Every film is recorded straight from the app, frame by frame, at its native resolution. On the phone cuts, titles, captions, code panels, wireframes and before-and-after splits are drawn over the live render. The square cuts on the website carry no text over the picture: each film's narration sits beside it and follows along as it plays, and the sound starts off. The narration is Gemini text to speech (`gemini-3.8-flash-lite-tts`, voice Laomedeia), and the captions match it word for word.

All ten scripts, with what is on screen for each line, are in [docs/scripts.md](docs/scripts.md).

## Reading the time

Look straight at the corner of the cube. A thin white line runs up the cut face from a dot on the front edge. That line is the pointer: the numeral on each ring that sits above it is the reading.

- The **lower ring** carries the hours, 12 to 11, four to a side.
- The **middle ring** carries the minutes in steps of five, 00 to 55.
- The **cap** on top sweeps once a minute, like a second hand.

The hour ring moves smoothly, so at 10:08 the pointer sits just past the 10, a little way toward 11.

![Front view, read against the pointer](docs/images/front.jpg)

| Three-quarter view | From above |
| --- | --- |
| ![Three-quarter view](docs/images/three-quarter.jpg) | ![Seen from above](docs/images/top-down.jpg) |

## What you can do

### Turn the rings by hand

Grab any ring and turn it. The ring follows your pointer and the time moves with it: the hour ring in hours, the minute ring in minutes and the cap in seconds. Flick a ring and let go, and it keeps spinning, then slows back to normal time. Press on any ring while they spin and they stop dead under your pointer, like catching a turning wheel. In clock mode a **Back to now** button appears once you have moved the time away from the real one. **Fast** runs one clock hour every six seconds so you can watch the rings go round.

### Drop in more clocks

The shelf on the left drops in four more clocks, each built from a polyhedron where three faces meet at every corner:

- a **tetrahedron** (four triangles)
- a **cube** (six squares)
- a **dodecahedron** (twelve pentagons)
- a **truncated octahedron** (eight hexagons and six squares)

Each one is a working clock with its own cut corner, pointer and ring stack, sized to its cut. The tetrahedron is cut deep, so its rings make up most of the pyramid. They all keep the same time, they collide with each other, and **Clear** removes them.

![The whole family](docs/images/family.jpg)

| Tetrahedron | Cube |
| --- | --- |
| ![Tetrahedron clock](docs/images/tetrahedron-clock.jpg) | ![Cube clock](docs/images/cube-clock.jpg) |

| Dodecahedron | Truncated octahedron |
| --- | --- |
| ![Dodecahedron clock](docs/images/dodecahedron-clock.jpg) | ![Truncated octahedron clock](docs/images/truncated-octahedron-clock.jpg) |

![The family from table height](docs/images/family-low.jpg)

### Pull them around

Grab a body (not a ring) and drag. A translucent grey tube stretches from the grab point to a grey ball under your pointer. The further you stretch it, the more the middle pinches in and the harder it pulls, up to a maximum force well above a clock's weight, so you can lift, drag and tip them. Overstretch it past one and a half times its full-strength length and it snaps and lets go.

### Select, stand up and drag together

Click a clock to select it, and shift-click to add or remove more. Selected clocks get a soft grey outline that pulses. Click empty space to clear the selection.

| Two clocks selected | Close up |
| --- | --- |
| ![Two clocks selected](docs/images/selection.jpg) | ![Selection outline close up](docs/images/selection-close.jpg) |

**Stand up** lifts every selected clock off the floor, turns it onto the face opposite its cut corner with the corner facing you, and sets it back down in one smooth pass. With nothing selected it stands up the main clock.

| In the air | Landed |
| --- | --- |
| ![Standing up, in the air](docs/images/stand-up-midair.jpg) | ![Standing up, landed](docs/images/stand-up-landed.jpg) |

Drag any selected clock and the whole selection comes with it: one tube runs from each clock to the same ball under your pointer.

![Dragging three selected clocks together](docs/images/group-pull.jpg)

### Outdoors

**Outdoors** moves the scene onto a lawn under an open sky. The sun follows the clock's time, so the light changes through the day: blue sky and clouds at noon, a warm sunset, then stars and moonlight, with the numerals glowing in the dark. Drag or fling the hands, or use **Fast**, to run through a day in seconds. The grass blows in the wind, leans away from the clocks standing in it, and fades into the sky in the distance.

| Noon | Sunset |
| --- | --- |
| ![Noon](docs/images/outdoor-noon.jpg) | ![Sunset](docs/images/outdoor-sunset.jpg) |

![Night, with stars, moonlit clouds and glowing numerals](docs/images/outdoor-night.jpg)

![A clock standing in the grass](docs/images/outdoor-grass.jpg)

### Stopwatch

Start, pause, resume and reset. At zero every clock is closed into its whole solid; on Start the rings turn to 12:00 and count up from there, and the readout shows tenths of a second.

### Timer

Pick 1, 5, 10 or 25 minutes, or drag the rings to set any length up to twelve hours. The timer does not read against the pointer like the clock does. Instead the whole stack winds up and runs down:

1. **Set:** every ring sits 60° off the cut, which is as far out of line as a triangle can be. The rings and the cut make a six-pointed star.
2. **Running:** the rings turn back, the faster ones taking extra full turns on the way.
3. **Done:** the ring corners land on the corners of the cut, the stack closes the corner back up, and every body is whole again. The readout flashes and three short tones play.

| Wound | Halfway | Done |
| --- | --- | --- |
| ![Timer wound](docs/images/timer-wound.jpg) | ![Timer halfway](docs/images/timer-halfway.jpg) | ![Timer done](docs/images/timer-done.jpg) |

| Wound, from the side | Done, from the side |
| --- | --- |
| ![Timer wound, angled](docs/images/timer-wound-angle.jpg) | ![Timer done, angled](docs/images/timer-done-angle.jpg) |

Every clock in the scene winds and unwinds together.

| All clocks wound | All clocks done |
| --- | --- |
| ![All clocks wound](docs/images/family-timer-wound.jpg) | ![All clocks whole again](docs/images/family-timer-done.jpg) |

## How it is built

Everything is one HTML file with no build step. It loads [three.js](https://threejs.org/) for rendering and [cannon-es](https://github.com/pmndrs/cannon-es) for physics from jsDelivr.

### Geometry from planes

Every solid in the scene, from the bodies to each ring, is convex, so each is described as a list of planes. Corners are found by intersecting every three planes and keeping the points that sit inside all the others, then three's `ConvexGeometry` turns them into a mesh.

A clock is built from any such solid in the same way:

1. Pick a corner where exactly three faces meet.
2. Slice it off with a plane square to the line from the centre through that corner. The cut sits 48% of the way out, or just past the neighbouring corners if those would otherwise be caught, so the cut is always a triangle.
3. Run the ring axis along that line, through the corner that was cut off. The three rings are slices of that corner: each is bounded by the same three faces, between two heights along the axis, so when they line up they rebuild the original solid exactly.
4. Place the pointer on the cut's lowest corner, and print the numerals so that a steady turn sweeps them past the pointer evenly (each label sits at `r·tan(α − φ)` along its flat side, where `r` is that side's distance from the axis).

### Rounded edges without extra geometry

Each edge gets a narrow bevel plane at the bisecting angle. Its depth is set from the angle between the two faces, so the bevel shows the same width on every edge of every body and ring, whatever the shape or size. The bevel strips stay flat, but their vertex normals blend from one face's normal to the next, and the corner patches where bevels meet average every face they connect. The result shades like a smooth fillet with no extra triangles.

![Bevel close-up](docs/images/bevels.jpg)

### Selection outline

Selected clocks are drawn a second time, flat white, into an offscreen mask. A full-screen shader then samples that mask in rings around each pixel and paints grey wherever a pixel sits just outside a selected silhouette. Its opacity pulses on a 1.4 second cycle.

### Outdoors

The sky is a shader dome that blends zenith and horizon colours for day, dusk and night, with a sun disc and glow, and fbm clouds projected onto a layer above the scene and mirrored below the horizon. Each frame the sky is also rendered on its own, and fog fades distant ground into that render, so far-off grass dissolves into sky and cloud. The sun and moon positions come from the clock's time. A directional sun and a cool moonlight hand the shadows between them; the shadow light never drops below about 25° and its shadows fade near the horizon, so low sun doesn't streak shadows across the lawn. At night a soft fill light from the camera keeps the black bodies readable, and the numerals get a bloom pass: their glow is rendered on its own, behind black copies of the bodies so nothing glows through them, blurred, and added on top.

The lawn texture and the moon were generated with Gemini. The grass is about 72,000 instanced blades that a vertex shader bends in the wind, lit as if they faced up so they match the lawn beneath. Each frame every clock's footprint on the ground is measured, and blades close to a body lean away from it, while blades inside the footprint sink out of sight.

### Light

A soft-shadowed key light (variance shadow maps), a cool rim light, a hemisphere fill and a studio environment with long strip lights for the reflections that pick out the bevels.

### Physics

Each clock is a cannon-es body with two convex hulls: one for the body and one around the ring stack. A pull is a spring with damping applied at the grab point. Its force and its pinch both scale with the stretch, and both stop growing at full strength. The tube is a single cylinder reshaped in a vertex shader. Standing up switches a body to kinematic, eases it up, round and down, then hands it back to the simulation.

## Running it locally

Any static file server will do:

```bash
npx serve public
```

Or run it as the Cloudflare Worker it ships as:

```bash
npm install
npm run dev
```

## Deploying

The site is a Cloudflare Worker with static assets, routed at `mpts.ie/games/polytock`. The Worker strips the `/games/polytock` prefix and serves `public/`.

```bash
npm run deploy
```

mpts.ie itself is [BannerAndLogo](https://github.com/nassir90/BannerAndLogo) on `mpts.ie/*`; this route is more specific, so it wins. Polytock is listed on the games index, [mpts.ie/games](https://mpts.ie/games/), and has a stack of clips on the home page (BannerAndLogo's `site/games/index.html` and `site/index.html`), so a changed route needs updating there too.

## Layout

```
public/index.html   the whole app
src/worker.js       serves the app under /games/polytock
wrangler.jsonc      Worker, assets and routes
docs/images/        README images, rendered from the app
```

## License

The code is [MIT](LICENSE). The clock design belongs to [@sushi_watches](https://www.instagram.com/sushi_watches/) and is not covered by it.
