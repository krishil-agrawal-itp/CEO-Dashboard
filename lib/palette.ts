/**
 * Intuitive Design System tokens (Desktop\Intuitive Design System\colors_and_type.css).
 * Brand rule: black & white ≈90%, ONE highlight color (blue #003AE3) ≈9%,
 * red ≈1% and dark-surfaces-only (never on white) — so it never appears here.
 * There is no brand "success green" or "danger red" for a light UI: positive
 * signal is the brand blue, negative signal is neutral ink + a down arrow,
 * never a color pulled in just to mean "bad".
 */
export const BRAND = {
  black: "#000000",
  white: "#ffffff",
  blue: "#003ae3",
  deepBlue: "#002099",
  bgLight: "#f4f4f4",
  borderGray: "#d7dbe0",
  silverGrey: "#808080",
  ashGrey: "#777777",
  grey: "#444445",
} as const;

/**
 * The three Product Statistic rings are a magnitude/rank encoding, not a
 * categorical one — "one highlight color per composition" rules out a
 * blue/violet/red identity set here. Ring identity is carried by the
 * legend's icon + label; color only reinforces rank (brand blue → dark
 * grey → mid grey).
 */
export const RING_STEPS = [BRAND.blue, BRAND.grey, BRAND.silverGrey] as const;

/** Sequential ramp for the Customer Growth bubbles — one hue (blue), light → dark. */
export const SEQUENTIAL_BLUE = [
  { bg: BRAND.deepBlue, text: BRAND.white }, // largest
  { bg: BRAND.blue, text: BRAND.white },
  { bg: "#5b7fEE", text: BRAND.white },
  { bg: "#a9bdF7", text: BRAND.black }, // smallest — still legible, not washed out
] as const;
