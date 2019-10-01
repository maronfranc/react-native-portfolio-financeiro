import React, { useReducer } from 'react';

import PortfolioContext from './portfolioContext';
import { portfolioReducer } from './reducers';
import { sellAction, buyAction } from './actions';
import { AppContextInterface, PortfolioInterface } from '../interfaces';


const GlobalState = (props: any) => {
  const initialState: PortfolioInterface = [
    { totalBalance: 1000, name: 'BRL', },
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
