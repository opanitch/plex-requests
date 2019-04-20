import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from '../../components/Table/Table.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';

class LibraryList extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    const testData = {
      columns: [
        { content: 'Image' },
        { content: 'Title' },
        { content: 'Requested By' },
        { content: '# of Requests' }
      ],
      content: {
        title: 'Inherited Table Title'
      },
      data: [
        {
          image: './assets/images/placeholder.jpg',
          content: 'placeholder'
        },
        {
          content: 'Rick & Morty'
        },
        {
          content: 'oreokid200@gmail.com'
        },
        {
          content: '1'
        }
      ]
    };

    return (
      <div className="pr-librarylist-container">
        <SectionTitle className="pr-librarylist-title" text={title} />
        <Table
          className="pr-librarylist-table"
          content={testData.content}
          data={testData.data}
          columns={testData.columns}
        />
      </div>
    );
  }
}

export default LibraryList;
