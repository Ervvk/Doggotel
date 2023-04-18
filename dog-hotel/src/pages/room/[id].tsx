import { GetStaticProps } from 'next';
import React from 'react';

import RoomDetailedLayout from '@/components/Rooms/RoomDetailedLayout/RoomDetailedLayout';
import { Room } from '@/components/Rooms/types';
import { getRoomsData } from '@/helpers/dataAccess';

const Page = ({ room }: { room: Room }) => {
  return <RoomDetailedLayout room={room} />;
};

export async function getStaticPaths() {
  const rooms = await getRoomsData();
  const roomsPaths = rooms.map((room: Room) => ({ params: { id: room.id.toString() } }));

  return {
    paths: roomsPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{ room: Room }> = async (context) => {
  const { params } = context;

  try {
    const id = params?.id as string;
    if (!id) throw new Error('A room with this id does not exist');
    const rooms = await getRoomsData();
    const roomId = parseInt(id) - 1;
    return {
      props: {
        room: rooms[roomId],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Page;
