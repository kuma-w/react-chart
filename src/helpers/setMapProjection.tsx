import * as d3 from 'd3';

export const setMapProjection = function (mapData: any) {
  // use the geoAlbers map projection
  const projection = d3.geoAlbers();
  // adjust projection to fit area of map canvas
  projection
    .precision(0)
    .rotate([225, 0, 0])
    .fitExtent(
      [
        [0, 0],
        [710, 580],
      ],
      mapData,
    );
  return projection;
};
