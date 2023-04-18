import Image from 'next/image';
import React, { useState } from 'react';

import { composeImagePath } from '../utils';

import styles from './RoomGallery.module.scss';
import RoomImageSmall from './RoomImageSmall';

type RoomGalleryProps = {
  imagesDirectoryUrl: string;
};

export const RoomGallery = ({ imagesDirectoryUrl }: RoomGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(1);
  const handleImageClick = (imageNumber: number) => {
    setSelectedImage(imageNumber);
  };

  const composeImages = () => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      images.push(
        <div
          key={i}
          role="presentation"
          className={`${styles['image-wrapper']} ${styles['image-small']}`}
          onClick={() => {
            handleImageClick(i);
          }}
        >
          <RoomImageSmall imageDirectoryUrl={imagesDirectoryUrl} imageNumber={i} />
        </div>
      );
    }
    return images;
  };

  return (
    <div className={styles['gallery']}>
      <Image
        className={`${styles['image-wrapper']} ${styles['image-big']}`}
        src={composeImagePath(imagesDirectoryUrl, selectedImage)}
        alt={`Room image - maximized}`}
        width={620}
        height={350}
        style={{ objectFit: 'cover', maxHeight: '50vw', maxWidth: '95vw' }}
      />
      <div className={styles['images-minimized']}>{composeImages()}</div>
    </div>
  );
};
