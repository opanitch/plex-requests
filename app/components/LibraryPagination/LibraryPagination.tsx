import { GetMoviePagination } from 'API/rest/actions/library/library.actions.interfaces';
import { Button, List, ListItem } from 'Atoms';
import { ButtonTheme } from 'Atoms/Button/Button';
import React, { FunctionComponent } from 'react';
import './LibraryPagination.styles.scss';

export interface LibraryPaginationType {
  pagination: GetMoviePagination['titlePagination'];
}

export const LibraryPagination: FunctionComponent<LibraryPaginationType> = ({
  pagination,
}) => {
  return (
    <List className="pr-library-pagination-list">
      {pagination.map((letter, index) => (
        <ListItem className="pr-library-pagination-list-item" key={index}>
          <Button buttonTheme={ButtonTheme.BASE}>{letter.title}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default LibraryPagination;
