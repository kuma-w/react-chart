import React from 'react';
import Header from './layout/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyBarChart from './components/rechart/BarChart';
import MyMixBarChart from './components/rechart/MixBarChart';
import MyComposedChart from './components/rechart/ComposedChart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/bar-chart' element={<MyBarChart />} />
          <Route path='/mix-bar-chart' element={<MyMixBarChart />} />
          <Route path='/composed-chart' element={<MyComposedChart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
