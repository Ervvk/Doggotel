import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

import { ChildrenProps } from '@/types';

import { Footer } from '../Footer';
import { Header } from '../Header/';

import styles from './MainLayout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className={`${styles['layout']} ${inter.className} `}>
      <Head>
        <title>Doggotel - Dogs Favorite Place</title>
        <meta name="description" content="Doggotel - Dog Hotel straight from Lodz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles['main']}>{children}</main>
      <Footer />
    </div>
  );
};
