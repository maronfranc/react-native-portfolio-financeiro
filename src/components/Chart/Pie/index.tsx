import React from "react";
import { Dimensions, View } from "react-native";

import { PieChart } from 'react-native-chart-kit'
import { PortfolioCurrencyInterface } from "../../../interfaces";

const Pie = (props: any) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  let chartHeight = 220
  // TODO: Adicionar a cores dinamicamente
  const pieConfig = [
    { color: '#192E5B', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: 'maroon', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#598234', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#1D65A6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#00743F', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#AEBD38', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#00203FFF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#583E2E', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#132226', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#8E5C1D', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#5F4B8BFF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#42EADDFF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#000000FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#F95700FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { color: '#D6ED17FF', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]
  const chartConfig = {
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }
  // Funde os valores do props.data com os valores da pieConfig
  const chartData = [...props.data.map((item: PortfolioCurrencyInterface, i: number) => {
    return { ...item, ...pieConfig[i] };
  })];
  return (
    <View>
      <PieChart
        data={chartData}
        width={screenWidth}
        height={chartHeight}
        chartConfig={chartConfig}
        accessor="totalBalance"
        backgroundColor={"transparent"}
        paddingLeft="15"
        absolute
      />
    </View>
  )
}

export default Pie;
