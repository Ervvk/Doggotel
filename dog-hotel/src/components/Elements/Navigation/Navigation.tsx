import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';

import { CustomLink } from './CustomLink';
import styles from './Navigation.module.scss';
import { navigationItems } from './NavigationItems';

export const Navigation = () => {
  const { Root, List, Item } = NavigationMenu;

  return (
    <Root orientation={'horizontal'} className={styles['navigation']}>
      <List className={styles['list']}>
        {navigationItems.map(({ id, href, title }) => (
          <Item key={id}>
            <CustomLink href={href} title={title} />
          </Item>
        ))}
      </List>
    </Root>
  );
};
