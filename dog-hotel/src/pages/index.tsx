import { Room } from '@/components/Rooms/roomsTypes';
import { SectionsWrapper } from '@/components/Sections';
import { getRoomsData } from '@/helpers/dataAccess';

export default function Home({ rooms }: { rooms: Room[] }) {
  return <SectionsWrapper roomsData={rooms} />;
}

export async function getStaticProps() {
  const rooms = await getRoomsData();

  return {
    props: {
      rooms,
    },
  };
}
