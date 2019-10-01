import React from 'react';

export interface CurrencyInterface {
  currency: string;
  // exchanges: string;
}

export interface PortfolioInterface {
  amount: number;
  name: string;
}

export interface AppContextInterface {
  currencyPairs: Array<CurrencyInterface>;
  portfolio: Array<PortfolioInterface>;
  buy: (amount: number, currencyPair: string) => void;
  sell: (amount: number, currencyPair: string) => void;
}

export default React.createContext<AppContextInterface>({
  currencyPairs: [],
  portfolio: [],
  buy: (amount, currencyPair) => { },
  sell: (amount, currencyPair) => { }
});

