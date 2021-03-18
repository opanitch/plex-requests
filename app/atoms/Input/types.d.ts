import * as REGEX_NAMES from 'CONSTANTS/regex';

export type LabelProps = JSX.IntrinsicElements['label'] & {
  htmlFor: string;
  required?: boolean;
  text: string;
};

export type InputProps = JSX.IntrinsicElements['input'] & {
  disabled?: boolean;
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  regex?: UnionOf<typeof REGEX_NAMES>;
  type: 'text' | 'email' | 'tel';
};

export type TextAreaInputProps = JSX.IntrinsicElements['textarea'] & {
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  type?: 'text';
};
