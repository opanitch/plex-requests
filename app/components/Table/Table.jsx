import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
// import get from 'lodash/get';
// import find from 'lodash/find';
import map from 'lodash/map';
// import partition from 'lodash/partition';

import TableTitle from './TableTitle.jsx';

const Table = props => {
  console.log(`props object: ${Object.keys(props)}`);

  const renderCell = cellData => {
    if (!cellData) {
      return null;
    }

    const { className, content, image } = cellData;

    console.log(`cell data ${cellData}`);
    if (typeof cellData === 'object') {
      console.log(`data keys ${Object.keys(cellData)}`);
    }
    console.log(`________________________`);

    if (image) {
      return (
        <td className={classNames('pr-table-poster', className)}>
          <img src={image} alt={content} />
        </td>
      );
    } else {
      return <td className={className}>{content}</td>;
    }
  };

  const renderRow = rowData => {
    const { columns } = props;
    const rowLength = columns.length;
    const dataSplitNum = Math.ceil(rowData.length / rowLength);

    console.log(`row data ${rowData}`);
    console.log(`row length ${rowLength}`);
    console.log(`dataSplitNum ${dataSplitNum}`);

    for (let i = 0; i < dataSplitNum; i++) {
      return <tr>{map(rowData, data => renderCell(data))}</tr>;
    }
  };

  const renderHead = headerData => {
    console.log(`header data ${headerData}`);

    return headerData.length > -1 ? (
      <thead className="pr-table-header">{renderRow(headerData)}</thead>
    ) : null;
  };

  const renderBody = data => {
    return <tbody className="pr-table-body">{renderRow(data)}</tbody>;
  };

  const renderFooter = () => {
    const { columns, noDataMessage } = props;
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

  const renderTable = () => {
    const { className, columns, data } = props;
    const mainClass = 'pr-table';
    const totalCount = data && data.length;
    const emptyDataClass = !(totalCount > 0) ? 'pr-table--empty' : false;
    const headerColumns = columns; // .slice(0, -1)

    console.log(`table data: ${Object.keys(data)}`);
    console.log(`table data count: ${totalCount}`);

    return (
      <table className={classNames(mainClass, emptyDataClass, className)}>
        {renderHead(headerColumns)}
        {/* {totalCount ? this.renderBody() : this.renderFooter()}
        {visibleCount && visibleCount < totalCount
          ? this.renderLoadMore(headerColumns.length)
          : null} */}
        {renderBody(data)}
        {renderFooter()}
      </table>
    );
  };

  const { className, content } = props;
  const tableClasses = classNames('pr-table-container', className);

  return (
    <div className={tableClasses}>
      {content.title ? <TableTitle text={content.title} /> : null}
      {renderTable()}
    </div>
  );
};

Table.propTypes = {
  content: PropTypes.object,
  className: PropTypes.string,
  columns: PropTypes.array, // required
  data: PropTypes.array.isRequired,
  // defaultSort: PropTypes.string,
  noDataMessage: PropTypes.string
  // onSort: PropTypes.func,
  // onSortSuccess: PropTypes.func,
  // sortData: PropTypes.array
};

export default Table;
