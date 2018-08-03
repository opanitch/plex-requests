import sort, { sortTypes } from './sort';

describe('Sort', () => {
  it('should handle same values', () => {
    const data = ['C', 'A', 'B', 'A'];
    const sortedData = sort(data, sortTypes.ALPHABETICAL);

    expect(sortedData).toEqual(['A', 'A', 'B', 'C']);
  });

  it('should handle string accessor', () => {
    const data = [{ city: 'Houston' }, { city: 'Austin' }, { city: 'Dallas' }];
    const sortedData = sort(data, sortTypes.ALPHABETICAL, 'city');

    expect(sortedData).toEqual([
      { city: 'Austin' },
      { city: 'Dallas' },
      { city: 'Houston' }
    ]);
  });

  it('should handle function accessor', () => {
    const data = [{ city: 'Houston' }, { city: 'Austin' }, { city: 'Dallas' }];
    const sortedData = sort(data, sortTypes.ALPHABETICAL, d => d.city);

    expect(sortedData).toEqual([
      { city: 'Austin' },
      { city: 'Dallas' },
      { city: 'Houston' }
    ]);
  });

  it('should sort alpahbetically', () => {
    const data = ['C', 'A', 'B'];
    const sortedData = sort(data, sortTypes.ALPHABETICAL);

    expect(sortedData).toEqual(['A', 'B', 'C']);
  });

  it('should sort alphanumerically', () => {
    const data = ['A2', 'A10', 'A1'];
    const sortedData = sort(data, sortTypes.ALPHANUMERICAL);

    expect(sortedData).toEqual(['A1', 'A2', 'A10']);
  });

  it('should sort numerically', () => {
    const data = [3, 1, 2];
    const sortedData = sort(data, sortTypes.NUMERICAL);

    expect(sortedData).toEqual([1, 2, 3]);
  });

  it('should sort chronologically', () => {
    const May2015 = new Date('2015-05-01');
    const June2014 = new Date('2014-06-01');
    const July2016 = new Date('2016-07-01');
    const data = [July2016, June2014, May2015];
    const sortedData = sort(data, sortTypes.CHRONOLOGICAL);

    expect(sortedData).toEqual([June2014, May2015, July2016]);
  });
});
