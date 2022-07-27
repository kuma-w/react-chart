import React, { useEffect, useRef } from 'react';
import { GeoGeometryObjects, GeoPermissibleObjects, select } from 'd3';
import * as d3 from 'd3';
import { styled } from '@mui/material';
import { ChartWrapper, TitleWrapper } from '../../components/Wrapper';
import mapJson from '../../assets/korea.json';
import { Typography } from '@mui/material';

const Svg = styled('svg')`
  display: flex;

  height: 630px;
  width: 560px;
  border: none;
  border-style: ridge;
  border-color: #fff;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  circle {
    // fill: #64b4f6;
    stroke: #4680ac;
    stroke-width: 2;
    // fill-opacity: 0.7;
    &:hover {
      fill: #148df1;
      transition: all 0.2s;
    }
  }
`;

const Path = styled('path')`
  fill: rgb(240, 240, 240);
  stroke: rgb(224, 224, 224);
  stroke-width: 1px;
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
  const circleData = [
    {
      location: '경기',
      x: 270,
      y: 140,
      value: 30,
      text: 2,
    },
    {
      location: '세종',
      x: 250,
      y: 220,
      value: 50,
      text: 203,
    },
    {
      location: '대구',
      x: 360,
      y: 300,
      value: 40,
      text: 56,
    },
    {
      location: '광주',
      x: 200,
      y: 370,
      value: 20,
      text: 0,
    },
    {
      location: '울산',
      x: 420,
      y: 340,
      value: 30,
      text: 3,
    },
  ];

  const path: any = d3.geoPath().projection(setMapProjection(mapData));

  const healthRegions = mapData.features.map((data) => {
    if (data !== null) return <Path className='path' d={path(data as GeoGeometryObjects)} />;
    // if (data !== null) return <Path className='path' d={path(data as GeoPermissibleObjects)} />;
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
      .attr('r', (d) => d.value)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('transform-origin', '50% 50%')
      .attr('transform', 'scale(.2)');

    svg
      .selectAll('text')
      .data(circleData)
      .join(
        (enter) => enter.append('text'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove(),
      )
      .text((d) => d.text)
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y + 3)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('transform-origin', '50% 50%')
      .attr('transform', 'scale(.2)');

    svg
      .selectAll('circle')
      .transition()
      .duration(1000)
      .attr('transform', 'scale(1)')
      .style('fill', '#64b4f6')
      .style('fill-opacity', 0.7);

    svg
      .selectAll('g')
      .attr('transform-origin', '50% 50%')
      .attr('transform', 'scale(0.2)')
      .transition()
      .duration(1000)
      .attr('transform', 'scale(1)');

    svg.selectAll('text').transition().duration(1000).attr('transform', 'scale(1)');
  }, []);
  return (
    <ChartWrapper>
      <TitleWrapper>
        <Typography variant='h5' sx={{ ml: 5 }}>
          연간 지역별 제어권 전환 횟수
        </Typography>
        <Svg className='map-canvas' ref={svgRef}>
          <g>{healthRegions}</g>
        </Svg>
      </TitleWrapper>
    </ChartWrapper>
  );
}

export default Map;
