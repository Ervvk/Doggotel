import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './Navigation.module.scss';

type navigationProps = {
  href: string;
  title: string;
  isSelected: boolean;
};

export const CustomLink = ({ href, title, isSelected }: navigationProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} scroll passHref legacyBehavior>
      <NavigationMenu.Link
        className={`${styles['link']} ${isSelected && styles['link-selected']} `}
        active={isActive}
      >
        {title}
      </NavigationMenu.Link>
    </NextLink>
  );
};
