
/* 
 *  @param  {number} beginingPrice  O valor usado no momento da compra
 *  @param  {number} endingPrice    O valor do asset no momento da venda
 * 
 *  @return {number}  Porcentabem de um valor antes e depois 
 */
export function simpleRateOfReturn(beginingPrice: number, endingPrice: number): number {
  return (beginingPrice - endingPrice) / beginingPrice;
}

/*
 *  Calculo do peso que vai ser usado em outras formulas.
 *
 *  @param   {number}  valueInvested Quantia escolhida para ser investida
 *  @param   {number}  portfolio     Valor somatório de todos os assets que a conta possui
 * 
 *  @return  {number}  Determina o peso que o valor investido tem em relação ao total da conta
 */
export function weight(valueInvested: number, portfolio: number): number {
  return valueInvested / portfolio;
}



// TODO: Retorno usando peso e simpleReturn

// TODO:aqui vão as funções que adicionam 0.00050000 e também USD13.50 R$50,00
