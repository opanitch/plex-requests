import React, { FunctionComponent } from 'react';

import { renderRow } from './Table';

type TheadType = JSX.IntrinsicElements['thead'] & {
  headerData: any;
};

const TableHeader: FunctionComponent<TheadType> = ({ headerData }) => {
  return <thead className="pr-table-header">{renderRow(headerData)}</thead>;
};

export default TableHeader;
