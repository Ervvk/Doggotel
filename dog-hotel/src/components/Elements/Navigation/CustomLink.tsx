import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navigation.module.scss';

type navigationProps = {
  href: string;
  title: string;
};

export const CustomLink = ({ href, title }: navigationProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link className={styles['link']} active={isActive}>
        {title}
      </NavigationMenu.Link>
    </NextLink>
  );
};
