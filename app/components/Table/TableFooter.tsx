import React, { FunctionComponent } from 'react';

// import { renderRow } from './Table';

type TfootType = JSX.IntrinsicElements['tfoot'] & {
  columns: any;
  noDataMessage: string;
};

const TableFooter: FunctionComponent<TfootType> = ({
  columns,
  noDataMessage,
}) => {
  const noDataMsg = noDataMessage || 'No Data';

  return (
    <tfoot className="pr-table-footer">
      <tr className="pr-table-row">
        <td className="pr-table-cell" colSpan={columns.length}>
          <p className="pr-table-empty-message">{noDataMsg}</p>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
