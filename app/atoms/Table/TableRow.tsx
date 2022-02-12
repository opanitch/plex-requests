import React, { ReactNode } from 'react';
import { ColumnShape } from 'react-base-table';

export interface TableRowProps {
  isScrolling?: boolean | undefined;
  cells: React.ReactNode[];
  columns: ColumnShape<Record<string, unknown>>;
  rowData: Record<string, unknown>;
  rowIndex: number;
  depth: number;
}

export const TableRow = ({ rowData, cells }: TableRowProps) => {
  return !!rowData.content ? (
    <div className="pr-data-table-details">{rowData.content as ReactNode}</div>
  ) : (
    cells
  );
};

export default TableRow;
