function compare(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

const alphabetical = (a, b) =>
  compare(a.toString().toLowerCase(), b.toString().toLowerCase());

const alphanumerical = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

const chronological = (a, b) =>
  compare(new Date(a).valueOf(), new Date(b).valueOf());

const numerical = (a, b) => compare(Number(a), Number(b));

export const sortTypes = {
  ALPHABETICAL: 'ALPHABETICAL',
  ALPHANUMERICAL: 'ALPHANUMERICAL',
  CHRONOLOGICAL: 'CHRONOLOGICAL',
  NUMERICAL: 'NUMERICAL'
};

const sortMethods = {
  ALPHABETICAL: alphabetical,
  ALPHANUMERICAL: alphanumerical,
  CHRONOLOGICAL: chronological,
  NUMERICAL: numerical
};

const sort = (data, type, accessor = d => d, id) => {
  return data.slice().sort((a, b) => {
    if (typeof accessor === 'string') {
      return sortMethods[type](a[accessor], b[accessor]);
    }

    try {
      return sortMethods[type](accessor(a), accessor(b));
    } catch (e) {
      // Sort based on ID instead of accessor method
      return sortMethods[type](a[id], b[id]);
    }
  });
};

export default sort;
