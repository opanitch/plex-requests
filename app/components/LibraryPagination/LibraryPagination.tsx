import {
  GetMoviePagination,
  GetTVPagination,
} from 'API/rest/actions/library/library.actions.interfaces';
import { Button, List, ListItem } from 'Atoms';
import { ButtonTheme } from 'Atoms/Button/Button';
import React, { FunctionComponent } from 'react';
import './LibraryPagination.styles.scss';

export interface LibraryPaginationType {
  pagination: GetMoviePagination['pagination'] & GetTVPagination['pagination'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LibraryPagination: FunctionComponent<LibraryPaginationType> = ({
  pagination,
  onClick,
}) => {
  return (
    <List className="pr-library-pagination-list">
      {pagination.map((letter, index) => (
        <ListItem className="pr-library-pagination-list-item" key={index}>
          <Button
            buttonTheme={ButtonTheme.BASE}
            onClick={onClick}
            value={letter.key}
          >
            {letter.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default LibraryPagination;
