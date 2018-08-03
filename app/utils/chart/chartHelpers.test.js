import {
  colorScale,
  colorScheme,
  defaultColors,
  getIndexTicks,
  getUnit
} from './chartHelpers';
import moment from 'moment';

describe('chartHelpers', () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  describe('colorScale method', () => {
    it('returns colorscale function', () => {
      const count = colors.length;
      const domain = [0, 5];
      const colorScaleFn = colorScale(domain, count, colors);

      expect(typeof colorScaleFn).toEqual('function');
      expect(colorScaleFn(-1)).toEqual('red');
      expect(colorScaleFn(3)).toEqual('green');
      expect(colorScaleFn(10)).toEqual('purple');
    });

    it('returns colorscale function with same domain', () => {
      const count = colors.length;
      const domain = [5, 5];
      const colorScaleFn = colorScale(domain, count, colors);

      expect(colorScaleFn(-1)).toEqual('red');
      expect(colorScaleFn(3)).toEqual('red');
      expect(colorScaleFn(10)).toEqual('red');
    });

    it('returns colorscale function with default count', () => {
      const domain = [0, 5];
      const colorScaleFn = colorScale(domain);
      const colorArray = colorScheme[0];

      expect(colorScaleFn(0)).toEqual(colorArray[0]);
    });

    it('returns colorscale function with default colors', () => {
      const count = 24;
      const domain = [0, 5];
      const colorScaleFn = colorScale(domain, count);
      const colorArray = defaultColors.slice(0).reverse();
      const colorArrayLen = defaultColors.length;

      expect(colorScaleFn(-1)).toEqual(colorArray[0]);
      // expect(colorScaleFn(5)).toEqual(colorArray[colorArrayLen / 2]);
      expect(colorScaleFn(10)).toEqual(colorArray[colorArrayLen - 1]);
    });

    it('returns getIndexTicks function when tick count is 2 and label count is 3 ', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [startDate, startDate.add('1', 'hours')];
      const getIndexFnResult = getIndexTicks(ticks, 3);
      const result = [0, 1];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function when tick count is 3 and label count is 4 ', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 3);
      const result = [0, 1, 2];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function for label count 3 ', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours'),
        startDate.add('3', 'hours'),
        startDate.add('4', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 3);
      const result = [0, 2, 4];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function for label count 4 with even no of ticks', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours'),
        startDate.add('3', 'hours'),
        startDate.add('4', 'hours'),
        startDate.add('5', 'hours'),
        startDate.add('6', 'hours'),
        startDate.add('7', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 4);
      const result = [0, 3, 5, 7];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function for label count 4 with odd no of ticks', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours'),
        startDate.add('3', 'hours'),
        startDate.add('4', 'hours'),
        startDate.add('5', 'hours'),
        startDate.add('6', 'hours'),
        startDate.add('7', 'hours'),
        startDate.add('8', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 4);
      const result = [0, 4, 6, 8];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function for label count 5 with odd no of ticks', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours'),
        startDate.add('3', 'hours'),
        startDate.add('4', 'hours'),
        startDate.add('5', 'hours'),
        startDate.add('6', 'hours'),
        startDate.add('7', 'hours'),
        startDate.add('8', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 5);
      const result = [0, 2, 4, 6, 8];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getIndexTicks function for label count 5 with even no of ticks', () => {
      const startDate = moment('2018-02-08 05:25:43');
      const ticks = [
        startDate,
        startDate.add('1', 'hours'),
        startDate.add('2', 'hours'),
        startDate.add('3', 'hours'),
        startDate.add('4', 'hours'),
        startDate.add('5', 'hours'),
        startDate.add('6', 'hours'),
        startDate.add('7', 'hours')
      ];
      const getIndexFnResult = getIndexTicks(ticks, 5);
      const result = [0, 2, 4, 6, 7];

      expect(getIndexFnResult).toEqual(result);
    });

    it('returns getUnit function for null unitOfMeasure', () => {
      const getUnitResult = getUnit(null);
      const result = 'Bytes';

      expect(getUnitResult).toEqual(result);
    });

    it('returns getUnit function when UnitPrefix is null', () => {
      const unitOfMeasure = {
        units: 'B',
        unitsPrefix: '',
        scaling: '2'
      };

      const getUnitResult = getUnit(unitOfMeasure);
      const result = 'Bytes';

      expect(getUnitResult).toEqual(result);
    });

    it('returns getUnit function for MB', () => {
      const unitOfMeasure = {
        units: 'B',
        unitsPrefix: 'M',
        scaling: '2'
      };

      const getUnitResult = getUnit(unitOfMeasure);
      const result = 'MB';

      expect(getUnitResult).toEqual(result);
    });
  });
});
