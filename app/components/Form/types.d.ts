import { FunctionComponent, ReactNode } from 'react';

import { InputProps, TextAreaInputProps } from 'Atoms/Inputs/types';

import FormEmpty from './states/FormEmpty';
import FormFailure from './states/FormFailure';
// import FormLoading from './states/FormLoading';
import FormSuccess from './states/FormSuccess';

// Form Config
export interface FormConfigType extends FormType {
  children: (args: RenderArguments) => ReactNode;
  id: string;
}

// This isn't currently used - TODO: needs update
export interface FormProps {
  inputs?: Record<string, InputProps | TextAreaInputProps>;
  validation?: Record<string, any>;
}

// Form Structure
interface RenderArguments {
  FormBody: FunctionComponent<FormBodyProps>;
  FormFooter: FunctionComponent<FormFooterProps>;
  FormHeader: FunctionComponent<FormHeaderProps>;
}

export type FormBodyProps = FormSection & {
  description?: string;
};

export type FormFooterProps = FormSection;

export interface FormHeaderProps extends FormSection {
  title: string;
}

export interface FormSection extends DivType {
  children?: ReactNode;
}

// Form State
export interface FormStateProps<P = FormProps> extends DivType {
  description?: string;
  id: string;
  status: string;
  title?: string;
  viewState?: P extends FormProps ? P : never;
}

export interface FormStateSwitcher<P> {
  FormEdit: FunctionComponent<P>;
  FormEmpty?: FunctionComponent<P> | typeof FormEmpty;
  FormFailure?: FunctionComponent<P> | typeof FormFailure;
  // FormLoading?: FunctionComponent<P> | typeof FormLoading;
  FormSuccess?: FunctionComponent<P> | typeof FormSuccess;
}
