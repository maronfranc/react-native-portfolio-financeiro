import { PortfolioInterface } from "../../interfaces";

/* 
 *  Calculo do retorno de investimento.
 *
 *  Recebe o valor em que foi executada a compra e o valor no momento da venda
 *  Retorna o valor que é uma porcentagem do lucro ou perda
 */
export function capitalGainsYield(beginingPrice: number, endingPrice: number): number {
  return (endingPrice - beginingPrice) / beginingPrice;
}

/*
 *  Calculo do peso que vai ser usado em outras formulas.
 */
export function weight(valueInvested: number, portfolio: number): number {
  return valueInvested / portfolio;
}

/*
 *  Retorna soma de todos portfolio.totalBalance
 */
export function sumPortfolio(porfolio: PortfolioInterface) {
  return porfolio.reduce(
    (sum: number, { totalBalance }: { totalBalance: number }) => sum + totalBalance, 0
  )
}


