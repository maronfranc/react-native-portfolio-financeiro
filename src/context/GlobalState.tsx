import React, { useReducer, useEffect } from 'react';

import PortfolioContext, { AppContextInterface, PortfolioInterface } from './portfolioContext';
import { portfolioReducer, BUY, SELL } from './reducers';
import { sellAction, buyAction } from './actions';


const GlobalState = (props: any) => {
  const currencyPairs: Array<Object> = [
    { btcusd: 'BTC_USDT' },
    { ethusd: 'ETH_USDT' },
  ];
  const initialState: Array<Object> = [
    { totalBalance: 1300, name: 'BRL', },
    { totalBalance: 100, name: 'USD', },
    { totalBalance: 5000, name: 'BTC', },
  ];
  const [portfolioState, dispatch] = useReducer(
    portfolioReducer, { portfolio: initialState }
  );

  const buy = (amount: number, name: string) => {
    dispatch(buyAction(amount, name));
  };
  const sell = (amount: number, name: string) => {
    dispatch(sellAction(amount, name));
  };

  const appContext: AppContextInterface = {
    currencyPairs: currencyPairs,
    portfolio: portfolioState,
    buy: buy,
    sell: sell
  };

  return (
    <PortfolioContext.Provider value={appContext}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default GlobalState;
