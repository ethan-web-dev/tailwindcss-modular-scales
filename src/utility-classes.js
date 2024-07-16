module.exports = (scaleName, ratio, baseSize) => {
  const cssRules = {};

  for (let i = -6; i <= 16; i++) {
    const className1 = i === 0 ? `msc-${scaleName}` : i > 0 ? `msc-${scaleName}-${i}` : `-msc-${scaleName}-${Math.abs(i)}`;
    const className2 = i === 0 ? `msc-${scaleName}` : i > 0 ? `msc-${i} msc-${scaleName}` : `-msc-${Math.abs(i)} msc-${scaleName}`;
    const value = `${baseSize * Math.pow(ratio, i)}rem`;

    cssRules[`.${className1}`] = { fontSize: value };

    cssRules[`.${className2.replace(/ /g, '.').replace(/\/$/, '')}`] = { fontSize: value };
	
	}
  return cssRules;
};
