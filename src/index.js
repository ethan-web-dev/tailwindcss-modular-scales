const plugin = require('tailwindcss/plugin');
const scales = require('./scales');
const customUtilities = require('./utility-classes');

const modularScalesPlugin = plugin(function ({ addUtilities, theme }) {
  const baseSize = parseFloat(theme('modularScale.baseSize', 1));
  const userScales = theme('modularScale.scales', {});
  const combinedScales = { ...scales, ...userScales };

  const utilities = {};

  Object.entries(combinedScales).forEach(([scaleName, ratio]) => {
    const cssRules = customUtilities(scaleName, ratio, baseSize);
    Object.assign(utilities, cssRules);
  });

  addUtilities(utilities);
}, {
  theme: {
    modularScale: {
      baseSize: 1,
      scales: scales,
    },
  },
});

module.exports = modularScalesPlugin;
