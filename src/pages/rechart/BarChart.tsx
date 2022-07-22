import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';
import { driveLogMonth } from '../../data';
import { pastelColors } from '../../utill/pastelColors';
import { fetchGradientColors } from '../../utill/gradientColors';
import Wrapper from '../../components/Wrapper';

const MyBarChart = () => {
  const gradientColors1 = fetchGradientColors(14, '#d8ddf1', '#28376f');
  const gradientColors2 = fetchGradientColors(14, '#f2e3f4', '#411c45');
  const gradientColors3 = fetchGradientColors(14, '#c5ecfe', '#01354c');

  return (
    <Wrapper>
      <BarChart
        width={900}
        height={640}
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
      </BarChart>
      <BarChart
        width={900}
        height={640}
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
        <Bar dataKey='06_Ulsan_Lestar_1' barSize={80} stackId='a' fill={gradientColors1[0]} />
        <Bar dataKey='08_A2Z_DH_1' stackId='a' fill={gradientColors1[1]} />
        <Bar dataKey='09_A2Z_DH_2' stackId='a' fill={gradientColors1[2]} />
        <Bar dataKey='15_BIG_DN8_1' stackId='a' fill={gradientColors1[3]} />
        <Bar dataKey='16_Sejong_Lestar_1' stackId='a' fill={gradientColors1[4]} />
        <Bar dataKey='17_HYUNDAI_TM' stackId='a' fill={gradientColors1[5]} />
        <Bar dataKey='18_DAEGU_5G_DN8_1' stackId='a' fill={gradientColors1[6]} />
        <Bar dataKey='20_BIG_DN8_2' stackId='a' fill={gradientColors1[7]} />
        <Bar dataKey='21_DAEGU_5G_DN8_2' stackId='a' fill={gradientColors1[8]} />
        <Bar dataKey='22_DAEGU_5G_DN8_3' stackId='a' fill={gradientColors1[9]} />
        <Bar dataKey='23_DAEGU_KATECH_DN8' stackId='a' fill={gradientColors1[10]} />
        <Bar dataKey='24_SEJONG_LESTAR_2' stackId='a' fill={gradientColors1[11]} />
        <Bar dataKey='25_DAEGU_KATECH_DH' stackId='a' fill={gradientColors1[12]} />
        <Bar dataKey='30_ULSAN_APOLLO_750' stackId='a' fill={gradientColors1[13]} />
      </BarChart>
      <BarChart
        width={900}
        height={640}
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
        <Bar dataKey='06_Ulsan_Lestar_1' barSize={80} stackId='a' fill={gradientColors2[0]} />
        <Bar dataKey='08_A2Z_DH_1' stackId='a' fill={gradientColors2[1]} />
        <Bar dataKey='09_A2Z_DH_2' stackId='a' fill={gradientColors2[2]} />
        <Bar dataKey='15_BIG_DN8_1' stackId='a' fill={gradientColors2[3]} />
        <Bar dataKey='16_Sejong_Lestar_1' stackId='a' fill={gradientColors2[4]} />
        <Bar dataKey='17_HYUNDAI_TM' stackId='a' fill={gradientColors2[5]} />
        <Bar dataKey='18_DAEGU_5G_DN8_1' stackId='a' fill={gradientColors2[6]} />
        <Bar dataKey='20_BIG_DN8_2' stackId='a' fill={gradientColors2[7]} />
        <Bar dataKey='21_DAEGU_5G_DN8_2' stackId='a' fill={gradientColors2[8]} />
        <Bar dataKey='22_DAEGU_5G_DN8_3' stackId='a' fill={gradientColors2[9]} />
        <Bar dataKey='23_DAEGU_KATECH_DN8' stackId='a' fill={gradientColors2[10]} />
        <Bar dataKey='24_SEJONG_LESTAR_2' stackId='a' fill={gradientColors2[11]} />
        <Bar dataKey='25_DAEGU_KATECH_DH' stackId='a' fill={gradientColors2[12]} />
        <Bar dataKey='30_ULSAN_APOLLO_750' stackId='a' fill={gradientColors2[13]} />
      </BarChart>
      <BarChart
        width={900}
        height={640}
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
        <Bar dataKey='06_Ulsan_Lestar_1' barSize={80} stackId='a' fill={gradientColors3[0]} />
        <Bar dataKey='08_A2Z_DH_1' stackId='a' fill={gradientColors3[1]} />
        <Bar dataKey='09_A2Z_DH_2' stackId='a' fill={gradientColors3[2]} />
        <Bar dataKey='15_BIG_DN8_1' stackId='a' fill={gradientColors3[3]} />
        <Bar dataKey='16_Sejong_Lestar_1' stackId='a' fill={gradientColors3[4]} />
        <Bar dataKey='17_HYUNDAI_TM' stackId='a' fill={gradientColors3[5]} />
        <Bar dataKey='18_DAEGU_5G_DN8_1' stackId='a' fill={gradientColors3[6]} />
        <Bar dataKey='20_BIG_DN8_2' stackId='a' fill={gradientColors3[7]} />
        <Bar dataKey='21_DAEGU_5G_DN8_2' stackId='a' fill={gradientColors3[8]} />
        <Bar dataKey='22_DAEGU_5G_DN8_3' stackId='a' fill={gradientColors3[9]} />
        <Bar dataKey='23_DAEGU_KATECH_DN8' stackId='a' fill={gradientColors3[10]} />
        <Bar dataKey='24_SEJONG_LESTAR_2' stackId='a' fill={gradientColors3[11]} />
        <Bar dataKey='25_DAEGU_KATECH_DH' stackId='a' fill={gradientColors3[12]} />
        <Bar dataKey='30_ULSAN_APOLLO_750' stackId='a' fill={gradientColors3[13]} />
      </BarChart>
    </Wrapper>
  );
};

export default MyBarChart;
