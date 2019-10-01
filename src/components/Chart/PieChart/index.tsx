import React from "react";
import { Dimensions, View } from "react-native";

import { PieChart } from 'react-native-chart-kit'

const Pie = props => {
  const screenWidth = Dimensions.get('window').width;
  const defaultColor = (color, defaultColor) => {
    if (color) return color
    else return defaultColor;
  }

  const chartData = [
    { valueInBRL: 1300, name: 'BRL', color: '#567', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { valueInBRL: 100, name: 'USD', color: 'maroon', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { valueInBRL: 5000, name: 'BTC', color: '#a68d02', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const chartConfig = {
    backgroundColor: defaultColor(props.backgroundColor, '#132'),
    backgroundGradientFrom: defaultColor(props.backgroundGradientFrom, '#132'),
    backgroundGradientTo: defaultColor(props.backgroundGradientTo, '#687'),
    backgroundGradientToOpacity: 0.5,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {}
  }

  return (
    <View>
      <PieChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="valueInBRL"
        backgroundColor={defaultColor(props.backgroundColor, "transparent")}
        paddingLeft="15"
        absolute
      />
    </View>
  )
}

export default Pie;
