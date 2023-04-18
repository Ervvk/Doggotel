import Image from 'next/image';
import React from 'react';

import { composeImagePath } from '../utils';

type RoomImageProps = {
  imageDirectoryUrl: string;
  imageNumber: number;
};

const RoomImageSmall = ({ imageDirectoryUrl, imageNumber }: RoomImageProps) => {
  return (
    <Image
      src={composeImagePath(imageDirectoryUrl, imageNumber)}
      alt={`Room image - ${imageNumber}`}
      width={200}
      height={120}
      style={{ objectFit: 'cover', maxWidth: '31vw', maxHeight: '22vw' }}
    />
  );
};

export default RoomImageSmall;
