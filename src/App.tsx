import React from 'react';
import LabTabs from './layout/Tabs';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyBarChart from './pages/rechart/BarChart';
import MyMixBarChart from './pages/rechart/MixBarChart';
import MyComposedChart from './pages/rechart/ComposedChart';
import MyPieChart from './pages/rechart/PieChart';
import MyRadarChart from './pages/rechart/RadarChart';
import MyLineChart from './pages/d3/LineChart';
import { Divider } from '@mui/material';

import { lineData } from './data/lineData';

function App() {
  return (
    <BrowserRouter>
      <LabTabs />
      <Divider />
      <main>
        <Routes>
          <Route path='/bar-chart' element={<MyBarChart />} />
          <Route path='/mix-bar-chart' element={<MyMixBarChart />} />
          <Route path='/composed-chart' element={<MyComposedChart />} />
          <Route path='/pie-chart' element={<MyPieChart />} />
          <Route path='/Radar-chart' element={<MyRadarChart />} />
          <Route path='/d3-line-chart' element={<MyLineChart height={400} values={lineData} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
