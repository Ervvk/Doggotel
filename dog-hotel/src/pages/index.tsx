import { Room } from '@/components/Rooms/types';
import { SectionsWrapper } from '@/components/Sections';
import { Testimonial } from '@/components/Sections/types';
import { getRoomsData, getTestimonialsData } from '@/helpers/dataAccess';

type HomeProps = { rooms: Room[]; testimonials: Testimonial[] };

export default function Home({ rooms, testimonials }: HomeProps) {
  return <SectionsWrapper roomsData={rooms} testimonialsData={testimonials} />;
}

export async function getStaticProps() {
  const rooms = await getRoomsData();
  const testimonials = await getTestimonialsData();

  return {
    props: {
      rooms,
      testimonials,
    },
  };
}
