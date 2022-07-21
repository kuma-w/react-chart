import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import LinkButton from '../components/LinkButton';

const LabTabs = () => {
  const [tabPage, setTabPage] = React.useState('1');

  const handleChange = (e: React.SyntheticEvent, newPage: string) => {
    setTabPage(newPage);
  };
  return (
    <>
      <TabContext value={tabPage}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Rechart' value='1' />
            <Tab label='d3' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <LinkButton name='Bar Chart' url='/bar-chart' />
          <LinkButton name='Mix Bar Chart' url='/mix-bar-chart' />
          <LinkButton name='Composed Chart' url='/composed-chart' />
          <LinkButton name='Pie Chart' url='/pie-chart' />
          <LinkButton name='Radar Chart' url='/radar-chart' />
        </TabPanel>
        <TabPanel value='2'>
          <LinkButton name='Line Chart' url='/d3-line-chart' />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default LabTabs;
