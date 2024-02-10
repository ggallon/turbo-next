/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-gamut"],
  rules: {
    "gamut/color-no-out-gamut-range": true,
    "function-disallowed-list": ["rgba", "hsla", "rgb", "hsl"],
    "color-function-notation": "modern",
    "color-named": "never",
    "color-no-hex": true,
    "alpha-value-notation": "percentage",
  },
};
