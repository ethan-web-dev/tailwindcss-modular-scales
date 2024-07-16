const plugin = require('@ethanbeeler/tailwindcss-modular-scales');
const defaultScales = require('./default-scales');
const customUtilities = require('./utility-classes');

const modularScales = plugin(function ({ addUtilities, theme, e }) {
  const baseSize = parseFloat(theme('modularScale.baseSize', 1));
  const scales = theme('modularScale.defaultScales', {});

  const utilities = {};

  Object.entries(scales).forEach(([scaleName, ratio]) => {
    const cssRules = customUtilities(scaleName, ratio, baseSize);

    Object.assign(utilities, cssRules);
  });

  addUtilities(utilities);
}, {
  theme: {
    modularScale: {
      baseSize: 1, 
      scales: defaultScales,
    },
  },
});
