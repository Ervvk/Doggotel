import React from 'react';

import { Testimonial } from '../../types';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';

import styles from './TestimonialsSection.module.scss';

type TestimonialsSectionProps = {
  testimonialsData: Testimonial[];
};

export const TestimonialsSection = ({ testimonialsData }: TestimonialsSectionProps) => {
  return (
    <section className={styles['section']}>
      <h2>Testimonials</h2>
      <div className={styles['section-cards']}>
        {testimonialsData.map(({ id, description, author, date }) => (
          <TestimonialsCard key={id} description={description} author={author} date={date} />
        ))}
      </div>
    </section>
  );
};
