# Polytock video scripts

Ten short videos, rendered natively at 1080×1920 for TikTok. The five promotional videos are also rendered at 1080×1080 for the website.
Narration: Gemini `gemini-3.8-flash-lite-tts`, voice Laomedeia. Captions are burned in and match the narration.

## How it's made (technical)

### Modelling a cut-corner clock

`tech-1-modelling` · 37 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Every solid in Polytock starts as a list of planes. Nothing is modelled by hand. | Wireframe cube turning on a dark background. Code: the six cube planes. |
| 2 | Intersect every three planes, keep the points inside all the others, and those are the corners. | Wireframe with every corner marked. Code: cornersOf. |
| 3 | To make a clock, slice off one corner, square to the line from the centre. | Before and after: the whole cube above, the cut cube below. |
| 4 | The rings turn on that same diagonal. Each numeral sits at r times the tangent of its angle, so a steady turn sweeps them past the pointer evenly. | Rings spinning fast, front view. Code: the label placement formula. |
| 5 | Three triangles, one axis, and a thin white line to read them by. | Hero shot of the clock at ten past ten. |

### Rounded edges for free

`tech-2-bevels` · 39 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Every edge on these clocks looks rounded, but there isn't a single curved surface in the mesh. | Slow close-up across the bevels. |
| 2 | Each edge gets one thin bevel plane, at the angle halfway between its two faces. | Wireframe close-up showing the narrow bevel strips. Code: the bevel plane. |
| 3 | Shade that strip flat and it reads as a hard line. Blend the normals across it, from one face to the next, and it reads as a curve. | Before and after: flat shading above, blended normals below. |
| 4 | Where bevels meet at a corner, the normal averages every face they touch, so the corners round off too. | Close-up of a corner where three bevels meet. |
| 5 | The bevel's depth comes from the angle between the faces, so every edge on every shape shows the same width. | The four polyhedron clocks side by side. |

### Physics and the pull string

`tech-3-physics` · 35 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Each clock is a rigid body with two convex hulls: one for the body, and one around the rings. | The clock with its collision hulls drawn as wireframes. |
| 2 | Grab it, and a spring pulls the grab point toward your pointer, with damping so it doesn't swing forever. | The clock being dragged by the string. Code: the spring force. |
| 3 | The string is one cylinder, reshaped in a vertex shader. The harder it pulls, the more its middle pinches in. | The string stretching and pinching. Code: the pinch line from the shader. |
| 4 | Stretch it past one and a half times its full-strength length, and it snaps. | The string snaps and the clock drops. |
| 5 | Select several clocks, and each one gets its own string to the same ball. | Three selected clocks pulled together. |

### One corner, any polyhedron

`tech-4-polyhedra` · 41 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | The clock code doesn't know it's building a cube. Give it any solid where three faces meet at a corner. | Wireframes of the four polyhedra. Code: makeClock. |
| 2 | It finds that corner, cuts it off, sizes the rings to the cut, and points them along the diagonal. | A tetrahedron clock and a dodecahedron clock turning. |
| 3 | A tetrahedron, a cube, a dodecahedron and a truncated octahedron. Same code, same time. | All five clocks standing together. |
| 4 | Even the shelf icons are drawn from the real solids, projected with the hidden faces removed. | The four icons drawn large over the scene. |
| 5 | And the timer winds every ring sixty degrees out of line, then unwinds them until each body is whole again. | Every clock's timer winding down to whole blocks. |

### Building the outdoors

`tech-5-outdoors` · 42 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Outdoors, the sky is a shader dome. Its colours, the sun and the clouds all follow the time on the clock. | Time-lapse from morning to sunset. |
| 2 | Fog doesn't fade to a flat colour. It fades into a separate render of the sky, so distant grass dissolves into cloud. | Before and after: flat fog above, sky fog below. Code: the fog mix. |
| 3 | Seventy-two thousand blades of grass bend in the wind, and lean away from any clock standing in them. | Low close-up of the grass around the base of a clock. |
| 4 | A low sun used to drag shadows right across the lawn. Now the shadow light stays above twenty-five degrees. | Before and after: the long shadow streak above, the fixed shadow below. |
| 5 | At night, the numbers glow through a bloom pass, and a soft fill light keeps the black readable. | Night scene with glowing numerals. |

## Promotional

### A clock you can throw

`promo-1-throw` · 22 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | This is Polytock. A clock you can pick up and throw. | Hero shot, then the clock is yanked into the air. |
| 2 | Grab it, and a stretchy string drags it wherever you want. | The clock dragged around the floor. |
| 3 | Pull too hard, and the string snaps. | The string snaps and the clock tumbles. |
| 4 | One tap, and it stands right back up. | Stand up animation. |
| 5 | Polytock. Play it now at mpts dot i e. | End card. |

### Spin the hands

`promo-2-spin` · 24 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Three rings tell the time: hours, minutes and seconds. | Front view, slow push in. |
| 2 | Read the numbers sitting right above the white line. | Close-up of the pointer and rings. |
| 3 | Drag a ring, and the time moves with it. | A ring being turned by hand. |
| 4 | Fling it, and it keeps spinning, then eases back to now. | Ring flung, spinning, slowing. |
| 5 | Polytock. Play it now at mpts dot i e. | End card. |

### The clock family

`promo-3-family` · 23 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Polytock isn't only a cube. | Main clock alone, then shapes drop in. |
| 2 | Drop in a tetrahedron, a cube, a dodecahedron or a truncated octahedron. Every one keeps time. | Each polyhedron clock lands. |
| 3 | Click a few to select them, and stand them up together. | Outlined selection, stand up animation. |
| 4 | Or drag the whole group at once. | Group pull with converging strings. |
| 5 | Polytock. Play it now at mpts dot i e. | End card. |

### Day to night

`promo-4-daynight` · 22 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Take the clocks outside. | Studio fades to the lawn at noon. |
| 2 | The sun follows the time on the clock. Spin the hands, and watch the whole day go by. | Fast time-lapse across the afternoon. |
| 3 | Sunset, then stars, then moonlight. | Sunset into night. |
| 4 | And at night, the numbers glow. | Close-up of glowing numerals. |
| 5 | Polytock. Play it now at mpts dot i e. | End card. |

### Timer and stopwatch

`promo-5-timer` · 18 seconds

| # | Narration | On screen |
| --- | --- | --- |
| 1 | Polytock is a stopwatch, too. | Stopwatch counting, cap sweeping. |
| 2 | And a timer that winds the rings up into a star. | Timer set, rings wound into a six-pointed star. |
| 3 | As it counts down, the rings unwind. | Rings unwinding. |
| 4 | At zero, the cube is whole again. | The stack closes into a whole cube. |
| 5 | Polytock. Play it now at mpts dot i e. | End card. |
