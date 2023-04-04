import React from 'react';

import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import { testimonialsElements } from '../testimonialsElements';

import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection = () => {
  return (
    <section className={styles['section']}>
      <h2>Testimonials</h2>
      <div className={styles['section-cards']}>
        {testimonialsElements.map(({ id, description, author, date }) => (
          <TestimonialsCard key={id} description={description} author={author} date={date} />
        ))}
      </div>
    </section>
  );
};
