import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { driveLogMonth } from '../../data';
import { pastelColors } from '../../utill/pastelColors';
import _ from 'lodash';

export default function MyComposedChart() {
  const data: any = _.cloneDeep(driveLogMonth);

  for (let index in data) {
    const sum = Object.values(data[index]).reduce((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } else {
        return b;
      }
    });
    data[index].SUM = sum;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <ComposedChart
        width={960}
        height={640}
        data={data}
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
        <Bar dataKey='06_Ulsan_Lestar_1' barSize={80} stackId='a' fill={pastelColors[0]} />
        <Bar dataKey='08_A2Z_DH_1' stackId='a' fill={pastelColors[1]} />
        <Bar dataKey='09_A2Z_DH_2' stackId='a' fill={pastelColors[2]} />
        <Bar dataKey='15_BIG_DN8_1' stackId='a' fill={pastelColors[3]} />
        <Bar dataKey='16_Sejong_Lestar_1' stackId='a' fill={pastelColors[4]} />
        <Bar dataKey='17_HYUNDAI_TM' stackId='a' fill={pastelColors[5]} />
        <Bar dataKey='18_DAEGU_5G_DN8_1' stackId='a' fill={pastelColors[6]} />
        <Bar dataKey='20_BIG_DN8_2' stackId='a' fill={pastelColors[7]} />
        <Bar dataKey='21_DAEGU_5G_DN8_2' stackId='a' fill={pastelColors[8]} />
        <Bar dataKey='22_DAEGU_5G_DN8_3' stackId='a' fill={pastelColors[9]} />
        <Bar dataKey='23_DAEGU_KATECH_DN8' stackId='a' fill={pastelColors[10]} />
        <Bar dataKey='24_SEJONG_LESTAR_2' stackId='a' fill={pastelColors[11]} />
        <Bar dataKey='25_DAEGU_KATECH_DH' stackId='a' fill={pastelColors[12]} />
        <Bar dataKey='30_ULSAN_APOLLO_750' stackId='a' fill={pastelColors[13]} />
        <Line name='SUM' type='monotone' dataKey='SUM' stroke='#ff7300' />
      </ComposedChart>
    </div>
  );
}
