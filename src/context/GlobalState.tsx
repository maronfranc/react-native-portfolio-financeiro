import React, { useReducer, useEffect } from 'react';

import PortfolioContext, { AppContextInterface, PortfolioInterface } from './portfolioContext';
import { portfolioReducer, BUY, SELL } from './reducers';


const GlobalState = (props: any) => {
  const currencyPairs: Array<Object> = [
    { btcusd: 'BTC_USDT' },
    { ethusd: 'ETH_USDT' },
  ];
  const initialState: Array<PortfolioInterface> = [
    { amount: 10000, currency: 'BRL' },
    { amount: 0, currency: 'USD' },
    { amount: 0, currency: 'BTC' },
  ];
  const [portfolioState, dispatch] = useReducer(
    portfolioReducer, { portfolio: initialState }
  );

  const buy = (amount: number) => {
    dispatch({ type: BUY, amount: amount });
  };
  const sell = (amount: number) => {
    dispatch({ type: SELL, amount: amount });
  };

  // useEffect(() => {
  //   console.warn(portfolioState);
  // }, [])
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
