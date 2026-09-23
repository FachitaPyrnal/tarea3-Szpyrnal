import { DescuentoPipe } from './descuento';

describe('DescuentoPipe', () => {
  const pipe = new DescuentoPipe();

  it('should calculate the final price', () => {
    expect(pipe.transform(1000, 20)).toBe(800);
  });

  it('should keep the discount within a valid range', () => {
    expect(pipe.transform(1000, -10)).toBe(1000);
    expect(pipe.transform(1000, 120)).toBe(0);
  });
});
