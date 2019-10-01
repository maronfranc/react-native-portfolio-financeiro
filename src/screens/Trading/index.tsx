import React, { useState, useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';

import portfolioContext from '../../context/portfolioContext';
import { Card, Button, Container } from '../../components/UI';
import Chart from '../../components/Chart/Line';
import { getHoursMinutesSeconds, brl, getCurrencyByName } from '../../utils/functions';

interface ChartData extends Array<number> { }
interface ChartLabels extends Array<string> { }

export default function TradingScreen() {
  const context = useContext(portfolioContext)
  const { portfolio } = context.portfolio;
  // console.log('portfolio', portfolio)
  let currency = getCurrencyByName(portfolio, 'BRL')
  let initialBalance = currency.totalBalance
  const [balance, setBalance] = useState(initialBalance)
  const [balanceHistory, setBalanceHistory] = useState([initialBalance])
  const [orders, setOrder] = useState(0)
  const [ordersHistory, setOrdersHistory] = useState([0])
  const [timeLabels, setTimelabels] = useState([getHoursMinutesSeconds()])


  const buy = (amount: number, name: string) => {
    if (currency.totalBalance < amount) return;
    let balanceValue = currency.totalBalance - amount
    let orderValue = orders + amount
    setBalance(balanceValue)
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
    setBalance(balanceValue)

    // Valores para o gráfico
    limitChart(ordersHistory, timeLabels)
    limitChart(balanceHistory, timeLabels)
    setTimelabels(timeLabels => [...timeLabels, getHoursMinutesSeconds()])
    setOrdersHistory(ordersHistory => [...ordersHistory, orderValue])
    setBalanceHistory(balanceHistory => [...balanceHistory, balanceValue])
    context.sell(amount, name)
  }

  const limitChart = (chartData: ChartData, timeData: ChartLabels, limit = 5) => {
    // Condicional que limita o maximo de valores no gráfico.
    // (limit - 1) serve para deixar a variável limit mais intuitiva
    if (chartData.length > (limit - 1)) chartData.shift()
    if (timeData.length > (limit - 1)) timeLabels.shift()
  }

  // Valores para o Gráfico do portfólio
  const balanceData = {
    labels: timeLabels,
    datasets: [{
      data: balanceHistory,
    }]
  }
  // Valores para o Gráfico do Ordens
  const orderData = {
    labels: timeLabels,
    datasets: [{
      data: ordersHistory
    }]
  }

  return (
    <Container>
      <ScrollView>

        <Card>
          <Text>Conta: {brl(balance)}</Text>
          <Text>Em Ordens: {brl(orders)}</Text>
        </Card>
        <Chart data={balanceData} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => { buy(250, currency.name) }} backgroundColor='green'>
            Abrir Ordem de Compra
            </Button>
          <Button onPress={() => { sell(250, currency.name) }} backgroundColor='maroon'>
            Fechar Ordem de Compra
            </Button>
        </View>
        <Chart
          data={orderData}
          backgroundColor={'#800000'}
          backgroundGradientFrom={'#800000'}
          backgroundGradientTo={'#ffa726'} />

      </ScrollView>
    </Container>

  )
}

TradingScreen.navigationOptions = {
  title: 'Trade'
}
