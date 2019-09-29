import { PortfolioInterface } from "./portfolioContext";

export const BUY = 'BUY';
export const SELL = 'SELL';

// const buy = (amount: number) => {
//   setBalance(balance - amount)
//   setOrder(orders + amount)
// }
// const sell = (amount: number) => {
//   if (orders <= 0) return;
//   setOrder(orders - amount)
//   setBalance(balance + amount)
// }

interface ActionInterface {
  type: string;
  amount: number
}

export function portfolioReducer(state: Array<PortfolioInterface>, action: ActionInterface) {
  switch (action.type) {
    case BUY:
      return {
        portfolio: state.portfolio + action.amount
      };
    case SELL:
      return console.warn('ACTION SELL');
    default:
      throw new Error('ERROR: portfolioReducer');
  }
}

