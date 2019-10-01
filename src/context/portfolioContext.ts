import React from 'react';

import { AppContextInterface } from '../interfaces';


export default React.createContext<AppContextInterface>({
  portfolio: [],
  buy: (amount, currencyPair) => { },
  sell: (amount, currencyPair) => { }
});

