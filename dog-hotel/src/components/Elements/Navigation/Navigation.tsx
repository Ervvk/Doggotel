import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { CustomLink } from './CustomLink';
import styles from './Navigation.module.scss';
import { navigationItems } from './NavigationItems';

export const Navigation = () => {
  const { Root, List, Item } = NavigationMenu;
  const [activeItem, setActiveItem] = useState('1');
  const router = useRouter();
  const { pathname } = router;

  const matchPaths = (pathA: string, pathB: string) =>
    pathA.substring(1).includes(pathB.substring(1).toLowerCase());

  useEffect(() => {
    let isMatch = false;

    if (pathname.length === 1) {
      setActiveItem('1');
      isMatch = true;
    }

    navigationItems.forEach(({ href, id }) => {
      const arePathsMatching = matchPaths(pathname, href);

      if (arePathsMatching && href.length > 1) {
        setActiveItem(id.toString());
        isMatch = true;
      }
    });

    if (!isMatch) setActiveItem('0');
  }, [pathname]);

  return (
    <Root orientation={'horizontal'} className={styles['navigation']} value={activeItem}>
      <List className={styles['list']}>
        {navigationItems.map(({ id, href, title }) => (
          <Item key={id}>
            <CustomLink href={href} title={title} isSelected={id.toString() === activeItem} />
          </Item>
        ))}
      </List>
    </Root>
  );
};
