export interface AppContextInterface {
  portfolio: Array<PortfolioInterface>;
  buy: (amount: number, currencyPair: string) => void;
  sell: (amount: number, currencyPair: string) => void;
}

export interface CurrencyInterface {
  currency: string;
  // exchanges: string;
}

export interface PortfolioInterface extends Array<PortfolioCurrencyInterface> { }
export interface PortfolioCurrencyInterface {
  totalBalance: number;
  name: string;
}

export interface ActionInterface {
  type: string;
  amount: number;
  name: string;
}
