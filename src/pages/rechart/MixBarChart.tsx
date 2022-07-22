import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { driveLogMonth } from '../../data';
import { pastelColors } from '../../utill/pastelColors';
import Wrapper from '../../components/Wrapper';

export default function MyMixBarChart() {
  return (
    <Wrapper>
      <BarChart
        width={1000}
        height={600}
        data={driveLogMonth}
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
        <Bar dataKey='06_Ulsan_Lestar_1' stackId='a' fill={pastelColors[0]} />
        <Bar dataKey='08_A2Z_DH_1' stackId='a' fill={pastelColors[1]} />
        <Bar dataKey='09_A2Z_DH_2' stackId='a' fill={pastelColors[2]} />
        <Bar dataKey='15_BIG_DN8_1' stackId='a' fill={pastelColors[3]} />
        <Bar dataKey='16_Sejong_Lestar_1' stackId='a' fill={pastelColors[4]} />
        <Bar dataKey='17_HYUNDAI_TM' stackId='b' fill={pastelColors[5]} />
        <Bar dataKey='18_DAEGU_5G_DN8_1' stackId='b' fill={pastelColors[6]} />
        <Bar dataKey='20_BIG_DN8_2' stackId='b' fill={pastelColors[7]} />
        <Bar dataKey='21_DAEGU_5G_DN8_2' stackId='b' fill={pastelColors[8]} />
        <Bar dataKey='22_DAEGU_5G_DN8_3' stackId='b' fill={pastelColors[9]} />
        <Bar dataKey='23_DAEGU_KATECH_DN8' stackId='c' fill={pastelColors[10]} />
        <Bar dataKey='24_SEJONG_LESTAR_2' stackId='c' fill={pastelColors[11]} />
        <Bar dataKey='25_DAEGU_KATECH_DH' stackId='c' fill={pastelColors[12]} />
        <Bar dataKey='30_ULSAN_APOLLO_750' stackId='c' fill={pastelColors[13]} />
      </BarChart>
    </Wrapper>
  );
}
