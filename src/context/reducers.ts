import { PortfolioInterface } from "./portfolioContext";

import { BUY, SELL } from './actions'

interface ActionInterface {
  type: string;
  amount: number;
  name: string;
}

export function portfolioReducer(state: Array<PortfolioInterface>, action: ActionInterface) {
  switch (action.type) {
    // Adicionada as { } para ter as variáveis num escopo fechado
    case BUY: {
      // Acessa porfólio busca action.name e soma o valor
      const portfolio = state.portfolio.map((item) => {
        if (item.name === action.name) {
          return { ...item, totalBalance: (item.totalBalance + action.amount) }
        }
        return item;
      });
      return { ...state, portfolio };
    }
    // Adicionada as { } para ter as variáveis num escopo fechado
    case SELL: {
      // Acessa porfolio busca action.name e subtrai o valor
      const portfolio = state.portfolio.map((item) => {
        if (item.name === action.name) {
          return { ...item, totalBalance: (item.totalBalance - action.amount) }
        }
        return item;
      });
      return { ...state, portfolio };
    }
    default:
      throw new Error('Erro no Reducer');
  }
}
