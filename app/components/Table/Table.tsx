import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
// import get from 'lodash/get';
// import find from 'lodash/find';
import map from 'lodash/map';
// import partition from 'lodash/partition';

import Header from 'Atoms/Header/Header';

import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';

type TableType = JSX.IntrinsicElements['table'] & {
  articles?: any[];
  content?: Record<any, any>;
  columns?: any[];
  data: any[];
  // defaultSort: PropTypes.string,
  noDataMessage: string;
  // onSort: PropTypes.func,
  // onSortSuccess: PropTypes.func,
  // sortData: PropTypes.array
};

export const renderCell = (cellData, index) => {
  if (!cellData) {
    return null;
  }

  const { className, content, image } = cellData;

  // console.log(`cell data ${cellData}`);
  // if (typeof cellData === 'object') {
  //   console.log(`data keys ${Object.keys(cellData)}`);
  // }
  // console.log(`________________________`);

  if (image) {
    return (
      <td key={index} className={classNames('pr-table-poster', className)}>
        <img src={image} alt={content} />
      </td>
    );
  } else {
    return (
      <td key={index} className={className}>
        {content}
      </td>
    );
  }
};

export const renderRow = ({ columns, rowData }) => {
  const rowLength = columns.length;
  const dataSplitNum = Math.ceil(rowData.length / rowLength);

  // console.log(`row data ${rowData}`);
  // console.log(`row length ${rowLength}`);
  // console.log(`dataSplitNum ${dataSplitNum}`);

  for (let i = 0; i < dataSplitNum; i++) {
    return <tr>{map(rowData, (data) => renderCell(data, i))}</tr>;
  }
};

const Table: FunctionComponent<TableType> = (props) => {
  // console.log(`props object: ${Object.keys(props)}`);
  const { articles, className, columns, content, data } = props;
  const mainClass = 'pr-table';
  const tableClasses = classNames('pr-table-container', className);
  const totalCount = data && data.length;
  const emptyDataClass = !(totalCount > 0) ? 'pr-table--empty' : false;
  const headerColumns = columns; // .slice(0, -1)

  // console.log(`table data: ${Object.keys(data)}`);
  // console.log(`table data count: ${totalCount}`);
  console.log(`articles ${articles}`);

  return (
    <div className={tableClasses}>
      {content?.title && (
        <Header
          className="pr-table-title"
          headerLevel={3}
          title={content.title}
        />
      )}
      <table className={classNames(mainClass, emptyDataClass, className)}>
        {headerColumns && <TableHeader headerData={headerColumns} />}
        <TableBody data={data} />
        <TableFooter columns={columns} noDataMessage="" />
      </table>
      {/* {articles
        ? articles.map((article) => <div key={article.id}>{article.title}</div>)
        : null} */}
    </div>
  );
};

export default Table;
