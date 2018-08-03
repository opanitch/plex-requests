import includes from 'lodash/includes';
import pick from 'lodash/pick';

function search(string, collection, keys, customAccessors) {
  return collection.filter(object => {
    const obj = keys && keys.length ? pick(object, keys) : object;

    if (customAccessors) {
      keys.forEach(key => {
        if (customAccessors[key]) {
          obj[key] = customAccessors[key](object);
        }
      });
    }

    const values = Object.keys(obj).map(key => obj[key]);

    return values.some(value =>
      includes(value.toString().toLowerCase(), string.toLowerCase())
    );
  });
}

export default search;
