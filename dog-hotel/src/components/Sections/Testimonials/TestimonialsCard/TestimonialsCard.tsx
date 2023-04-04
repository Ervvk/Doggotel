import React from 'react';

import styles from './TestimonialsCard.module.scss';

type TestimonialsCardProps = {
  description: string;
  author: string;
  date: string;
};

const TestimonialsCard = ({ description, author, date }: TestimonialsCardProps) => {
  return (
    <div className={styles['card']}>
      <p className={styles['card-description']}>{description}</p>
      <div className={styles['card-details']}>
        <span className={styles['card-detail']}>{author}</span>
        <span className={styles['card-detail']}>{date}</span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
