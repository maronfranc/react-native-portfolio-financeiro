import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import portfolioContext from '../../context/portfolioContext';
import { Card, Button, Text, Input, LinearGradient } from '../../components/UI';
import Chart from '../../components/Chart/Line';
import { getHoursMinutesSeconds, getCurrencyByName, replaceCommaDot } from '../../utils/functions';

interface ChartData extends Array<number> { }
interface ChartLabels extends Array<string> { }

export default function TradingScreen({ navigation }) {
  const context = useContext(portfolioContext)
  const { portfolio } = context.portfolio;
  // Recebe o nome da moeda pelos parâmetros do navigation
  const paramName = navigation.getParam('name', 'BRL')
  const currency = getCurrencyByName(portfolio, paramName)
  const initialBalance = currency.totalBalance

  const [amount, setAmount] = useState('100')
  // Valores do gráfico
  const [balanceHistory, setBalanceHistory] = useState([initialBalance])
  const [orders, setOrder] = useState(0)
  const [ordersHistory, setOrdersHistory] = useState([0])
  const [timeLabels, setTimelabels] = useState([getHoursMinutesSeconds()])

  // Deixa a coloração do input avermelhada se for true
  const [inputInvalid, setInputInvalid] = useState(false)
  useEffect(() => {
    // Verifica se o valor do input é maior do que o da conta
    if (replaceCommaDot(amount) > currency.totalBalance)
      return setInputInvalid(true)
    return setInputInvalid(false)
  }, [amount, currency.totalBalance]);

  const buy = (amount: number, name: string) => {
    if (currency.totalBalance < amount) return;
    let balanceValue = currency.totalBalance - amount
    let orderValue = orders + amount
    setOrder(orderValue)

    // Valores para o gráfico
    limitChart(balanceHistory, timeLabels)
    limitChart(ordersHistory, timeLabels)
    setTimelabels(timeLabels => [...timeLabels, getHoursMinutesSeconds()])
    setBalanceHistory(balanceHistory => [...balanceHistory, balanceValue])
    setOrdersHistory(ordersHistory => [...ordersHistory, orderValue])
    context.buy(amount, name)
  }
  const sell = (amount: number, name: string) => {
    if (orders < amount) return;
    let orderValue = orders - amount
    let balanceValue = currency.totalBalance + amount
    setOrder(orderValue)

    // Valores para o gráfico
    limitChart(ordersHistory, timeLabels)
    limitChart(balanceHistory, timeLabels)
    setTimelabels(timeLabels => [...timeLabels, getHoursMinutesSeconds()])
    setOrdersHistory(ordersHistory => [...ordersHistory, orderValue])
    setBalanceHistory(balanceHistory => [...balanceHistory, balanceValue])
    context.sell(amount, name)
  }

  const limitChart = (chartData: ChartData, timeData: ChartLabels, limit = 5) => {
    // Condicional que deleta o primeiro valor do gráfico depois de passar o limite.
    // (limit - 1) serve para deixar a variável limit mais intuitiva
    if (chartData.length > (limit - 1)) chartData.shift()
    if (timeData.length > (limit - 1)) timeLabels.shift()
  }

  // Valores para o Gráfico do portfólio
  const balanceData = {
    labels: timeLabels,
    datasets: [{ data: balanceHistory }]
  }
  // Valores para o Gráfico do Ordens
  const orderData = {
    labels: timeLabels,
    datasets: [{ data: ordersHistory }]
  }
  return (
    <LinearGradient>
      <ScrollView>

        <Text>Quantida em {currency.name}: {currency.totalBalance}</Text>
        <Chart data={balanceData} />

        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => { buy(+amount, currency.name) }}
            backgroundColor='green'
            title='Abrir Ordem de Compra' />
          <Input
            style={styles.alignCenter}
            value={amount}
            onChangeText={(value: string) => { setAmount(value) }}
            onFocus={() => setAmount('')}
            keyboardType={'decimal-pad'}
            invalid={inputInvalid}
          />
          <Button
            onPress={() => { sell(+amount, currency.name) }}
            backgroundColor='maroon'
            title='Fechar Ordem de Compra' />
        </View>

        <Text>Quantida em ordens: {orders}</Text>
        <Chart
          data={orderData}
          backgroundColor={'#800000'}
          backgroundGradientFrom={'#800000'}
          backgroundGradientTo={'#ffa726'} />

      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#354',
    marginVertical: 25
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  alignCenter: {
    width: 100,
    textAlign: 'center',
    padding: 15
  }
});

TradingScreen.navigationOptions = {
  title: 'Trade'
}
