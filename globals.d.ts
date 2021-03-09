declare module '*.jpg';
declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare type DivType = JSX.IntrinsicElements['div'];

declare type FormType = JSX.IntrinsicElements['form'];

declare type Page = DivType & {
  className: string;
};
