import React from 'react';
import Header from './layout/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyBarChart from './pages/rechart/BarChart';
import MyMixBarChart from './pages/rechart/MixBarChart';
import MyComposedChart from './pages/rechart/ComposedChart';
import MyPieChart from './pages/rechart/PieChart';
import MyRadarChart from './pages/rechart/RadarChart';
import MyLineChart from './pages/d3/LineChart';
import MyMapChart from './pages/d3/MapChart';
import { Divider } from '@mui/material';

import { lineData } from './data/lineData';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Divider />
      <main>
        <Routes>
          <Route path='/bar-chart' element={<MyBarChart />} />
          <Route path='/mix-bar-chart' element={<MyMixBarChart />} />
          <Route path='/composed-chart' element={<MyComposedChart />} />
          <Route path='/pie-chart' element={<MyPieChart />} />
          <Route path='/Radar-chart' element={<MyRadarChart />} />
          <Route path='/d3-line-chart' element={<MyLineChart height={400} values={lineData} />} />
          <Route path='/d3-map-chart' element={<MyMapChart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
