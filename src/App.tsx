import React from 'react';
import Header from './layout/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyBarChart from './pages/rechart/BarChart';
import MyMixBarChart from './pages/rechart/MixBarChart';
import MyComposedChart from './pages/rechart/ComposedChart';
import MyLineChart from './pages/rechart/LineChart';
import MyPieChart from './pages/rechart/PieChart';
import MyRadarChart from './pages/rechart/RadarChart';
import MyD3LineChart from './pages/d3/LineChart';
import MyMapChart from './pages/d3/MapChart';
import { Divider, styled } from '@mui/material';

import { lineData } from './data/lineData';
import MyCard from './pages/rechart/Card';

const Main = styled('section')`
  display: flow-root;
  background-color: #f9fafc;
  height: 78em;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Divider />
      <Main>
        <Routes>
          <Route path='/bar-chart' element={<MyBarChart />} />
          <Route path='/mix-bar-chart' element={<MyMixBarChart />} />
          <Route path='/composed-chart' element={<MyComposedChart />} />
          <Route path='/line-chart' element={<MyLineChart />} />
          <Route path='/pie-chart' element={<MyPieChart />} />
          <Route path='/Radar-chart' element={<MyRadarChart />} />
          <Route path='/card' element={<MyCard />} />
          <Route path='/d3-line-chart' element={<MyD3LineChart height={400} values={lineData} />} />
          <Route path='/d3-map-chart' element={<MyMapChart />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
