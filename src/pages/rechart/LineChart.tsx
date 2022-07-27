import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { driveLogWeek } from '../../data';
import { pastelColors } from '../../utill/pastelColors';
import Wrapper from '../../components/Wrapper';

const MyLineChart = () => {
  return (
    <Wrapper>
      <LineChart
        width={900}
        height={640}
        data={driveLogWeek}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend align='left' />
        <Line type='monotone' dataKey='18_DAEGU_5G_DN8_1' stroke={pastelColors[0]} />
        <Line type='monotone' dataKey='21_DAEGU_5G_DN8_2' stroke={pastelColors[3]} />
        <Line type='monotone' dataKey='22_DAEGU_5G_DN8_3' stroke={pastelColors[5]} />
      </LineChart>
    </Wrapper>
  );
};

export default MyLineChart;
