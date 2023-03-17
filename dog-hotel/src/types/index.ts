import { ReactNode } from 'react';

export interface BaseEntity {
  id: string;
}

export interface ChildrenProps {
  children?: ReactNode;
}
