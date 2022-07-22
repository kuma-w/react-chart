import React, { useEffect, useRef } from 'react';
import { select } from 'd3';
import * as d3 from 'd3';
import { styled } from '@mui/material';
import Wrapper from '../../components/Wrapper';
// import * as d3 from 'd3-geo';
import mapJson from '../../assets/korea.json';

const Svg = styled('svg')`
  display: flex;

  height: 630px;
  width: 560px;
  border: none;
  border-style: ridge;
  border-color: #fff;
  color: #fff;
  background-color: '#D37506';
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
`;

const Path = styled('path')`
  fill: #b8b8b8;
  stroke: cornsilk;
  stroke-width: 1px;

  &:hover {
    cursor: pointer;
    // fill: rgb(255, 145, 0);
    fill-opacity: 0.5;
  }
`;

const setMapProjection = function (mapData: any) {
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

// eslint-disable-next-line react/prop-types
function Map() {
  const svgRef = useRef(null);

  const mapData = mapJson;
  const circleData = [5, 20, 25, 30, 40];

  const path = d3.geoPath().projection(setMapProjection(mapData));

  const healthRegions = mapData.features.map((data) => {
    if (data !== undefined) return <Path className='path' d={path(data)} />;
  });

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(circleData)
      .join(
        (enter) => enter.append('circle'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove(),
      )
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .style('fill', '69b3a2')
      .attr('stroke', '#69b3a2')
      .attr('stroke-width', 3)
      .attr('fill-opacity', 0.4);
  }, []);
  return (
    <Wrapper>
      <Svg className='map-canvas' ref={svgRef}>
        <g>{healthRegions}</g>
      </Svg>
    </Wrapper>
  );
}

export default Map;
