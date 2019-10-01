import React from "react";
import { Dimensions, View } from "react-native";

import { PieChart } from 'react-native-chart-kit'
import { defaultColor } from "../../../utils/functions";

const Pie = (props: any) => {
  const screenWidth = Dimensions.get('window').width;
  let chartHeight = 220
  // const testConfig = [
  //   { color: '#567', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { color: 'maroon', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  // ]

  // const test = Object.assign(testConfig, props.data); // {...props.data, testConfig}
  // console.log(test)
  // Object.entries(Object.assign({}, ...test,...testConfig)).map(([key, value]) => ({[key]:value}));
  // FIXME: Passar o valor do reducer para o gráfico [{reducer, config},{...}]
  const chartData = [
    { totalBalance: 1300, name: 'BRL', color: '#567', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { totalBalance: 100, name: 'USD', color: 'maroon', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { totalBalance: 5000, name: 'BTC', color: '#a68d02', legendFontColor: '#7F7F7F', legendFontSize: 15 },
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
        height={chartHeight}
        chartConfig={chartConfig}
        accessor="totalBalance"
        backgroundColor={defaultColor(props.backgroundColor, "transparent")}
        paddingLeft="15"
        absolute
      />
    </View>
  )
}

export default Pie;
