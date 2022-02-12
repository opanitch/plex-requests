// import { useGetMovies } from 'API/rest/actions/library/library.actions';
import React, { FunctionComponent } from 'react';
import Table, { AutoResizer, Column, ColumnShape } from 'react-base-table';
import { TableRow } from './TableRow';

interface DataTableProps {
  columns?: ColumnShape[];
  data?: Record<string, unknown>[];
  expandColumnKey?: string;
  maxHeight?: number;
}

const DataTable: FunctionComponent<DataTableProps> = (tableProps) => {
  const { columns, data, expandColumnKey, maxHeight } = tableProps;

  return (
    <AutoResizer className="pr-data-table">
      {({ height, width }) => (
        <Table
          data={data}
          expandColumnKey={expandColumnKey}
          fixed={false}
          height={height}
          maxHeight={maxHeight}
          rowKey="id"
          rowRenderer={TableRow}
          width={width}
        >
          {columns?.length &&
            columns.map((column) => <Column flexGrow={1} {...column} />)}
        </Table>
      )}
    </AutoResizer>
  );
};

export default DataTable;
