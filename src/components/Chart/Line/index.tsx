import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import { LineChart } from 'react-native-chart-kit'
import { defaultColor } from '../../../utils/functions'


const Chart = (props: any) => {
  let chartHeight = 220
  const screenWidth = (Dimensions.get('window').width - 10)
  const chartConfig = {
    backgroundColor: defaultColor(props.backgroundColor, '#132'),
    backgroundGradientFrom: defaultColor(props.backgroundGradientFrom, '#132'),
    backgroundGradientTo: defaultColor(props.backgroundGradientTo, '#687'),
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }
  return (
    <View>
      <LineChart
        data={props.data}
        width={screenWidth}
        height={chartHeight}
        yAxisLabel={'R$'}
        chartConfig={chartConfig}
        bezier
        style={styles.chartStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  chartStyle: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
  }

})
export default Chart;
