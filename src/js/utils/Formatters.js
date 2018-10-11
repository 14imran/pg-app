import accounting from 'accounting';

export const price = (price) => {
  return accounting.formatMoney(price, {symbol: '₹', precision: 0});
}