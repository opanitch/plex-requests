import React, { FunctionComponent } from 'react';

import { Link, List, ListItem } from 'Atoms';

type NavigationType = JSX.IntrinsicElements['nav'];

const HeaderNavigation: FunctionComponent<NavigationType> = () => {
  return (
    <nav className="navigation">
      <List className="navigation-list" isOrdered={false}>
        <ListItem className="navigation-list-item">
          <Link className="navigation-list-link" href="#">
            Request List
          </Link>
        </ListItem>
        <ListItem className="navigation-list-item">
          <Link className="navigation-list-link" href="#">
            Request Form
          </Link>
        </ListItem>
        <ListItem className="navigation-list-item">
          <Link className="navigation-list-link" href="#">
            Plex Library
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};

export default HeaderNavigation;
