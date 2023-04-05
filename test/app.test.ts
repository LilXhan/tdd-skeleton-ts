import sum from '../src/utils/handleHelper'

describe('primer test', () => {
  test('sum', () => {
    const rta = sum(1, 2);
    expect(rta).toBe(3);
  });
});