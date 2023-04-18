import * as UnstyledDialog from '@radix-ui/react-dialog';
import { Inter } from 'next/font/google';
import React from 'react';

import { ChildrenProps } from '@/types';

import styles from './Dialog.module.scss';

const inter = Inter({ subsets: ['latin'] });

export interface DialogProps extends ChildrenProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  title?: string;
}

export const Dialog = ({ children, isOpen, onClose, title }: DialogProps) => {
  const { Root, Portal, Overlay, Title, Close, Content } = UnstyledDialog;
  const closeIcon = <>&#10006;</>;

  return (
    <Root open={isOpen}>
      <Portal>
        <Overlay className={styles['dialog-overlay']} onClick={onClose} />
        <Content className={`${styles['dialog-content']} ${inter.className} `}>
          <Close asChild>
            <div className={styles['dialog-close']}>
              <button
                aria-label="Close"
                onClick={onClose}
                className={styles['dialog-close-button']}
              >
                {' '}
                {closeIcon}
              </button>
            </div>
          </Close>
          <Title className={styles['dialog-title']}>{title}</Title>
          {children}
        </Content>
      </Portal>
    </Root>
  );
};
