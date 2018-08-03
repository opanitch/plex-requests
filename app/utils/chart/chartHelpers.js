import get from 'lodash/get';
import minBy from 'lodash/minBy';
import maxBy from 'lodash/maxBy';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export const colorScheme = {
  0: ['#49A0C3'],
  1: ['#49A0C3'],
  2: ['#6EB4BA', '#046BB8'],
  3: ['#6EB4BA', '#046BB8', '#044780'],
  4: ['#90C5B2', '#6EB4BA', '#046BB8', '#044780'],
  5: ['#C1DDAC', '#90C5B2', '#6EB4BA', '#046BB8', '#044780'],
  6: ['#C1DDAC', '#90C5B2', '#6EB4BA', '#147FC4', '#046BB8', '#044780'],
  7: [
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#044780'
  ],
  8: [
    '#E1EEC1',
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#044780'
  ],
  9: [
    '#E1EEC1',
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#045BA2',
    '#044780'
  ],
  10: [
    '#E1EEC1',
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#045BA2',
    '#044780',
    '#043660'
  ],
  11: [
    '#E1EEC1',
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#045BA2',
    '#044780',
    '#043660',
    '#042743'
  ],
  12: [
    '#ECF5CD',
    '#E1EEC1',
    '#C1DDAC',
    '#90C5B2',
    '#6EB4BA',
    '#49A0C3',
    '#147FC4',
    '#046BB8',
    '#045BA2',
    '#044780',
    '#043660',
    '#042743'
  ]
};

export const defaultColors = colorScheme[12].slice(0).reverse();

export function colorScale(domain, count = 0, colors) {
  const defaultColorScheme = count <= 12 ? colorScheme[count] : colorScheme[12];
  const colorArray = colors || defaultColorScheme;
  const maxRange = colorArray.length - 1;
  const range = [0, maxRange];

  return value => {
    if (domain[0] === domain[1] || range[0] === range[1]) {
      return colorArray[Math.floor(range[0])];
    }
    const ratio = (range[1] - range[0]) / (domain[1] - domain[0]);
    const result = Math.ceil(range[0] + ratio * (value - domain[0]));

    if (result < range[0]) {
      return colorArray[0];
    }
    if (result > range[1]) {
      return colorArray[maxRange];
    }
    return colorArray[result];
  };
}

export function getDomains(data, x, y) {
  let minX = minBy(data, x) ? get(minBy(data, x), x) : 0;
  let maxX = maxBy(data, x) ? get(maxBy(data, x), x) : 1;
  let minY = minBy(data, y) ? get(minBy(data, y), y) : 0;
  let maxY = maxBy(data, y) ? get(maxBy(data, y), y) : 1;

  if (!data.length) {
    return {
      x: [0, 1],
      y: [0, 1]
    };
  }

  if (minX === maxX && typeof minX === 'number') {
    minX = 0;
  }

  if (minX === 0 && maxX === 0) {
    // Override max to make domain [0, 1]
    maxX = 1;
  }

  if (minY === maxY && typeof minY === 'number') {
    // Override max to make domain [0, 1]
    minY = 0;
  }

  if (minY === 0 && maxY === 0) {
    maxY = 1;
  }

  return {
    x: [minX, maxX],
    y: [minY, maxY]
  };
}

function getDefaultTicks(ticks, maxTicks) {
  const tickCount = ticks.length;
  const lastTick = tickCount - 1;

  if (tickCount <= maxTicks) {
    return ticks.map((_, index) => index);
  } else {
    return [0, lastTick];
  }
}

export function getAllTicks(tickCount, labelCount) {
  const tick = [];

  for (let index = 0; index < labelCount; index++) {
    if (index < tickCount) {
      tick.push(index);
    }
  }
  return tick;
}

export function getIndexTicks(ticks, count) {
  const tickCount = ticks.length;
  const maxCount = count || 6;
  const maxTicks = tickCount <= 6 ? tickCount : maxCount;
  const lastTick = tickCount - 1;
  const middle = Math.floor(tickCount / 2);
  const firstMiddle = Math.floor(middle / 2);

  if (count < 6 && tickCount < count) {
    return getAllTicks(tickCount, count);
  }

  switch (count) {
    case 1:
      return [0];
    case 2:
      return [0, lastTick];

    case 3:
      return [0, middle, lastTick];

    case 4: {
      const firstquart = Math.floor(tickCount / 4);

      return [0, lastTick - 2 * firstquart, lastTick - firstquart, lastTick];
    }

    case 5: {
      const startMiddle = middle - firstMiddle;
      const endMiddle = middle + firstMiddle;

      return [0, startMiddle, middle, endMiddle, lastTick];
    }

    default:
      return getDefaultTicks(ticks, maxTicks);
  }
}

export function getSortedDates(data, key = 'datetime') {
  return data.map(d => new Date(get(d, key))).sort((a, b) => a - b);
}

export function addOffset(start, end, granularity) {
  const startDate = moment(start);
  const endDate = moment(end);

  if (startDate.isSame(endDate)) {
    let offset = 1;
    let unit = 'day';

    if (granularity === '5M') {
      offset = 5;
      unit = 'minute';
    } else if (granularity === 'HR') {
      unit = 'hour';
    }

    return {
      startDate: startDate.add(-offset, unit),
      endDate: endDate.add(offset, unit)
    };
  }

  return {
    startDate,
    endDate
  };
}

export function getDateRange(start, end, granularity = 'DY', step = 1) {
  const { startDate, endDate } = addOffset(start, end, granularity);
  let unit = 'day';

  const maxTickCount = 40;

  if (granularity === '5M') {
    const diff = endDate.diff(startDate, 'minute');

    unit = 'minute';
    step = diff / maxTickCount;
  } else if (granularity === 'HR') {
    const diff = endDate.diff(startDate, 'hour');

    unit = 'hour';
    step = diff / maxTickCount;
  } else {
    const diff = endDate.diff(startDate, 'day');

    unit = 'day';
    step = diff / maxTickCount;
  }
  const range = moment.range(startDate, endDate);
  const dates = Array.from(range.by(unit, { step })).map(d => d.toDate());

  return dates;
}

export function getUnit(unitsOfMeasure) {
  const unitPrefix = unitsOfMeasure && unitsOfMeasure.unitsPrefix;
  const unitSufix = (unitsOfMeasure && unitsOfMeasure.units) || '';

  return unitPrefix ? `${unitPrefix}${unitSufix}` : 'Bytes';
}
