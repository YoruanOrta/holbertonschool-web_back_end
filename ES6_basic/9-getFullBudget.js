import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
const budget = getBudgetObject(income, gdp, capita);

return {
    ...budget,
    getIncomeInDollars() {
    return `$${this.income}`;
    },
    getIncomeInEuros() {
    return `${this.income} euros`;
    },
};
}