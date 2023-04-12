import React from 'react';

import { RoomsLayout } from '@/components/Rooms';
import { Room } from '@/components/Rooms/roomsTypes';
import { getRoomsData } from '@/helpers/dataAccess';

const Page = ({ rooms }: { rooms: Room[] }) => {
  return <RoomsLayout roomsData={rooms} />;
};

export async function getStaticProps() {
  const rooms = await getRoomsData();

  return {
    props: {
      rooms,
    },
  };
}

export default Page;
