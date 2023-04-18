import { BaseEntity } from '@/types';

export interface Testimonial extends BaseEntity {
  description: string;
  author: string;
  date: string;
}
