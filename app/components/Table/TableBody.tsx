import React, { FunctionComponent } from 'react';

import { renderRow } from './Table';

type TbodyType = JSX.IntrinsicElements['tbody'] & {
  data: any;
};

const TableBody: FunctionComponent<TbodyType> = ({ data }) => {
  return <tbody className="pr-table-body">{renderRow(data)}</tbody>;
};

export default TableBody;
