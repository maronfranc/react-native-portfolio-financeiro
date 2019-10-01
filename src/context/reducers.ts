import { BUY, SELL } from './actions'
import { ActionInterface, PortfolioInterface, PortfolioCurrencyInterface, } from "../interfaces";

interface PorfolioReducerStateInterface {
  portfolio: PortfolioInterface
}

export function portfolioReducer(state: PorfolioReducerStateInterface, action: ActionInterface) {
  switch (action.type) {
    // Adicionada as { } para as variáveis ficarem dentro escopo fechado
    case BUY: {
      // Acessa porfólio busca action.name e soma o valor
      const portfolio = state.portfolio.map((item: PortfolioCurrencyInterface) => {
        if (item.name === action.name) {
          return { ...item, totalBalance: (item.totalBalance - action.amount) }
        }
        return item;
      });
      return { ...state, portfolio };
    }
    // Adicionada as { } para as variáveis ficarem dentro escopo fechado
    case SELL: {
      // Acessa porfolio busca action.name e subtrai o valor
      const portfolio = state.portfolio.map((item: PortfolioCurrencyInterface) => {
        if (item.name === action.name) {
          return { ...item, totalBalance: (item.totalBalance + action.amount) }
        }
        return item;
      });
      return { ...state, portfolio };
    }
    default:
      throw new Error('Erro no Reducer');
  }
}
