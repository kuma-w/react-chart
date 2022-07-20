import React from 'react';
import Rainbow from 'rainbowvis.js';

export const fetchGradientColors = (numberOfItems, startColor, endColor) => {
  const rainbow = new Rainbow();
  rainbow.setNumberRange(1, numberOfItems);
  rainbow.setSpectrum(startColor, endColor);
  var arr = [];
  for (var i = 1; i <= numberOfItems; i++) {
    var hexColour = rainbow.colourAt(i);
    arr.push('#' + hexColour);
  }
  return arr;
};
