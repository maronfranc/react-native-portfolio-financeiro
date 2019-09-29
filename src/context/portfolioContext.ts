import React from 'react';

export interface CurrencyInterface {
  currency: string;
  // exchanges: string;
}

export interface PortfolioInterface {
  amount: number;
  currency: string;
}

export interface AppContextInterface {
  currencyPairs: Array<CurrencyInterface>;
  portfolio: Array<PortfolioInterface>;
  buy: (amount: number) => void;
  sell: (amount: number) => void;
}

export default React.createContext<AppContextInterface>({
  currencyPairs: [],
  portfolio: [],
  buy: (amount) => { },
  sell: (amount) => { }
});

