import * as UnstyledDialog from '@radix-ui/react-dialog';
import { Inter } from 'next/font/google';
import React from 'react';

import styles from './Dialog.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const Dialog = (props: any) => {
  const { Root, Portal, Overlay, Title, Close, Content } = UnstyledDialog;

  return (
    <Root open={props.isOpen}>
      <Portal>
        <Overlay className={styles['dialog-overlay']} onClick={props.onClose} />
        <Content className={`${styles['dialog-content']} ${inter.className} `}>
          <Close asChild>
            <div className={styles['dialog-close']}>
              <button
                aria-label="Close"
                onClick={props.onClose}
                className={styles['dialog-close-button']}
              >
                &#10006;
              </button>
            </div>
          </Close>
          <Title className={styles['dialog-title']}>{props.title}</Title>
          {props.children}
        </Content>
      </Portal>
    </Root>
  );
};
