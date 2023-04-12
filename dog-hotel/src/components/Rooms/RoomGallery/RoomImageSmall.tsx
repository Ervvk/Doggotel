import Image from 'next/image';
import React from 'react';

import { composeImagePath } from '../roomsUtils';

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
      style={{ objectFit: 'cover' }}
    />
  );
};

export default RoomImageSmall;
