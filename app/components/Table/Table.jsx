import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { connect } from 'react-redux';
// import get from 'lodash/get';
// import find from 'lodash/find';
// import partition from 'lodash/partition';

class Table extends Component {
  static propTypes = {
    content: PropTypes.object,
    className: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    defaultSort: PropTypes.string,
    noDataMessage: PropTypes.string,
    onSort: PropTypes.func,
    onSortSuccess: PropTypes.func,
    sortData: PropTypes.array
  };

  constructor(props) {
    super(props);

    // Bind class methods
    this.renderCell = this.renderCell.bind(this);
    this.renderHead = this.renderHead.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderTable = this.renderTable.bind(this);

    // Initialize local state
    this.state = {
      defaultSort: props.defaultSort,
      highlightedRow: null,
      loading: true,
      reverseSort: true
    };
  }

  renderTable() {
    const { className, data } = this.props;
    const { visibleCount } = this.state;
    const mainClass = 'pr-table';
    const totalCount = data && data.length;
    const emptyDataClass = !totalCount ? 'pr-table--empty' : false;
    const headerColumns = this.decoratedColumns.slice(0, -1);

    return (
      <table
        className={classNames(mainClass, emptyDataClass, className)}
        ref={node => (this.table = node)}
      >
        <thead className="pr-thead" ref={node => (this.thead = node)}>
          <tr className="pr-tr">{headerColumns.map(this.renderHead)}</tr>
        </thead>
        {totalCount ? this.renderBody() : this.renderFooter()}
        {visibleCount && visibleCount < totalCount
          ? this.renderLoadMore(headerColumns.length)
          : null}
      </table>
    );
  }

  renderHead() {
    return <td>Test Cell</td>;
  }

  renderBody() {
    return (
      <tr>
        <td>Test Body Cell</td>
      </tr>
    );
  }

  renderRow() {}

  renderCell() {}

  renderFooter() {}

  render() {
    return (
      <div className="pr-table-container">
        <h2>Table Title</h2>
        {this.renderTable}
      </div>
    );
  }
}

export default Table;
