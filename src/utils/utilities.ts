export const idGenerator = () =>
  Math.floor(Math.random() * (999 - 100 + 1) + 100);

export const ethToUSD = (eth: number) => Number(eth) * 19501;
