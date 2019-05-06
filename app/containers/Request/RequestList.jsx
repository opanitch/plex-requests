import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '../../components/Table/Table.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';

class RequestList extends Component {
  static propTypes = {
    articles: PropTypes.array,
    children: PropTypes.node,
    title: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      articles: [
        { title: 'React Redux Tutorial for Beginners', id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }

  sort() {
    console.log('sort this');
  }

  render() {
    const { title } = this.props;
    const { articles } = this.state;
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
      <div className="pr-requestlist-container">
        <SectionTitle className="pr-requestlist-title" text={title} />
        <Table
          articles={articles}
          className="pr-requestlist-table"
          columns={testData.columns}
          content={testData.content}
          data={testData.data}
          onSort={this.sort}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(RequestList);
