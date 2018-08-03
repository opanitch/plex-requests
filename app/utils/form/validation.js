// Required
const required = value => (value ? undefined : 'required');

// Checked
const checked = value => {
  return value === true ? undefined : 'unchecked';
};

// Length
const minLength = min => value =>
  value.length >= min ? undefined : 'minLength';
const maxLength = max => value =>
  value.length <= max ? undefined : 'maxLength';

// Quantity
const min = item => value => {
  const number = Number(value);

  return number >= item || isNaN(number) ? undefined : 'minimum';
};

const max = item => value => {
  const number = Number(value);

  return number <= item || isNaN(number) ? undefined : 'maximum';
};

// Pattern
const pattern = item => value =>
  new RegExp(item, 'ig').test(value) ? undefined : 'pattern';
const digitsOnly = pattern(/^\d+$/);
const ipAddress = pattern(/^\*$|^\d[\d\s,./:]*/);
const portNumber = pattern(/^(\*)|^(\d+)/);
const time = pattern(/^(10|11|12|[1-9]):([0-5][0-9])\s[AP]M$/);

const validations = {
  required,
  checked,
  minLength,
  maxLength,
  min,
  max,
  pattern,
  digitsOnly,
  ipAddress,
  portNumber,
  time
};

export default validations;
