export const convertCameltoCapital = (stringToConvert: string) => {
  const result = stringToConvert.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
};
