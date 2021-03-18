import * as REGEX_NAMES from 'CONSTANTS/regex';

interface RegexDictionaryEntry {
  flags: string;
  pattern: string;
}

type RegexDictionaryType = Record<string, RegexDictionaryEntry>;

export const RegexDictionary: RegexDictionaryType = {
  /* eslint-disable-next-line */
  [REGEX_NAMES.EMAIL]: {
    flags: 'g',
    pattern: `^([^<>()\\[\\]\\.,;:\\s@"](.[^<>()\\[\\]\\.,;:\\s@"]+)*)@(([a-zA-Z\\-0-9]+)\\.[a-zA-Z]{2,})$`,
  },
  [REGEX_NAMES.NAME]: {
    flags: 'gu',
    pattern: `^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$`,
  },
  /* eslint-disable-next-line */
  [REGEX_NAMES.PHONE]: {
    flags: 'g',
    pattern: `^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$`,
  },
};

export const getRegExp = (
  entryName: UnionOf<typeof REGEX_NAMES>
): RegexDictionaryEntry => {
  const RegEx = RegexDictionary[entryName];

  return { ...RegEx };
};
