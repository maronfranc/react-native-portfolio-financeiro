import React, { useReducer } from 'react';

import PortfolioContext from './portfolioContext';
import { portfolioReducer } from './reducers';
import { sellAction, buyAction } from './actions';
import { AppContextInterface, PortfolioInterface } from '../interfaces';


const GlobalState = (props: any) => {
  const initialState: PortfolioInterface = [
    { totalBalance: 1000.00, name: 'BRL', },
    { totalBalance: 200.00, name: 'USD', },
    { totalBalance: 200.00, name: 'EUR', },
    { totalBalance: 1000.00, name: 'BTC', },
    { totalBalance: 500.00, name: 'ETH', },
    { totalBalance: 5000.00, name: 'DGB', },
    { totalBalance: 100.00, name: 'FTC', },
    { totalBalance: 1000.00, name: 'ZRX', },
    { totalBalance: 1000.00, name: 'LSK', },
    { totalBalance: 1000.00, name: 'OMG', },
    { totalBalance: 200.00, name: 'XAU', },
    { totalBalance: 1000.00, name: 'GBP', },
    { totalBalance: 1000.00, name: 'CAD', },
    { totalBalance: 100.00, name: 'AAPL', },
    { totalBalance: 1000.00, name: 'GLD', },
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
