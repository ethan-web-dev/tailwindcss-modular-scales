module.export = (scaleName, ratio, baseSize) => {
  const cssRules = {};

  for (let i = -6; i <= 16; i++) {
    const className = i === 0 ? `ms-${scaleName}` : i > 0 ? `ms-${scaleName}-${i}` : `-ms-${scaleName}-${Math.abs(i)}`;
    const value = `${baseSize * Math.pow(ratio, i)}rem`;
    cssRules[`.${className}`] = { fontSize: value };
  }

  return cssRules;
};
