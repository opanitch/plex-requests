import * as REGEX_NAMES from 'CONSTANTS/regex';
import { LabelPosition } from './constants';

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

export interface RadioInputProps {
  className: string;
  disabled: boolean;
  errorText: string;
  id: string;
  labelPosition: keyof typeof LabelPosition;
  labelText: string;
  onChange: () => void;
  pattern: string;
  regex: string | RegExp;
  required: boolean;
  title: string;
}

export type TextAreaInputProps = JSX.IntrinsicElements['textarea'] & {
  errorText?: string;
  id: string;
  labelPosition?: string;
  labelText?: string;
  type?: 'text';
};
