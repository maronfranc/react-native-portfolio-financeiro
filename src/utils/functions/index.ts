import { PortfolioInterface } from "../../interfaces";

// Recebe (array e 'nome') e retorna um {objeto} que tem esse 'nome' dentro do array
// TODO: Se necessário mudar para função genérica no futuro getObjectByName<T>()
export function getCurrencyByName(portfolio: PortfolioInterface, currencyName: string) {
  return portfolio.filter(item => item.name === currencyName)[0]
}

/*
 *  Cria a data do momento que for chamado e
 *  retorna valor formatado para '00:00:00'
 */
export function getHoursMinutesSeconds(): string {
  const d = new Date();
  const hours = addZero(d.getHours())
  const minutes = addZero(d.getMinutes())
  const seconds = addZero(d.getSeconds())
  return `${hours}:${minutes}:${seconds}`;
}
function addZero(n: any) {
  if (n < 10) n = '0' + 1;
  return n;
}

// Recebe um número, deixa com duas casas decimais e muda o ponto para vírgula
export function replaceDotWithComma(number: number, decimals = 2): string {
  return number.toFixed(decimals).replace(".", ",");
}

// Recebe string, muda vírgula para ponto e retorna float
export function replaceCommaDot(number: string): number {
  return +number.replace(",", ".");
}

// Recebe número e retorna formatado '0,000 %'
export function percent(n: number | string, decimals = 2): string {
  let percentage = (+n * 100).toFixed(decimals).replace(".", ",")
  return n ? `${percentage}%` : '';
}

// Usa replaceDotWithComma para formatar número 0.00 pra 'R$0,00'
export function brl(formatedNumber: number): string {
  return `R$${replaceDotWithComma(formatedNumber)}`
}

/*
 *  Usado nas configurações dos gráficos. 
 *  Se não for passado props.color até o component retorna o defaultColor
 *  FIXME: Essa função pode ser desnecessária ou confusa
 */
export function defaultColor(propsColor: string, defaultColor: string) {
  return propsColor ? propsColor : defaultColor
}
