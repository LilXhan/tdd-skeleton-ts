function sum(n1: number, n2: number) {
  if (!n1 || !n2) throw new Error();
  if (typeof n1 !== 'number' || typeof n2 !== 'number') return 'only numbers';
  return n1 + n2;
}

export default sum;
