import React from "react";
import { Dimensions, View } from "react-native";

import { LineChart } from 'react-native-chart-kit'
import { defaultColor } from '../../../utils/functions'


const Chart = (props: any) => {
  const screenWidth = Dimensions.get('window').width
  const chartConfig = {
    backgroundColor: defaultColor(props.backgroundColor, '#132'),
    backgroundGradientFrom: defaultColor(props.backgroundGradientFrom, '#132'),
    backgroundGradientTo: defaultColor(props.backgroundGradientTo, '#687'),
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    }
  }
  return (
    <View>
      <LineChart
        data={props.data}
        width={screenWidth}
        height={220}
        yAxisLabel={'R$'}
        chartConfig={chartConfig}
        bezier
        style={{ marginVertical: 8, }}
      />
    </View>
  )
}

export default Chart;
