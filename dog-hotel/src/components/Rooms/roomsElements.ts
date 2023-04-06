export type Furnishings = {
  bed: boolean;
  blanket: boolean;
  toys: boolean;
};

export type capacity = 1 | 2 | 3;

export const roomsElements = [
  {
    id: 1,
    name: 'Economy Box',
    type: 'Box',
    furnishings: {
      bed: false,
      blanket: true,
      toys: false,
    },
    silence: false,
    price: 20.0,
    images: ['/images/box1/dog-1.jpg', '/images/box1/dog-2.jpg', '/images/box1/dog-3.jpg'],
    description: '',
    capacity: 'Small dogs',
  },
  {
    id: 2,
    name: 'Standard Box',
    type: 'Box',
    furnishings: {
      bed: false,
      blanket: true,
      toys: false,
    },
    silence: false,
    price: 25.0,
    images: ['/images/box2/dog-1.jpg', '/images/box2/dog-2.jpg', '/images/box2/dog-3.jpg'],
    description: '',
    capacity: 'Medium dogs',
  },
  {
    id: 3,
    name: 'Big Box',
    type: 'Box',
    furnishings: {
      bed: false,
      blanket: true,
      toys: false,
    },
    silence: false,
    price: 30.0,
    images: ['/images/box3/dog-1.jpg', '/images/box3/dog-2.jpg', '/images/box3/dog-3.jpg'],
    description: '',
    capacity: 'Big dogs',
  },
  {
    id: 4,
    name: 'Comfort Room',
    type: 'room',
    furnishings: {
      bed: true,
      blanket: true,
      toys: false,
    },
    silence: false,
    price: 40.0,
    images: ['/images/room1/dog-1.jpg', '/images/room2/dog-2.jpg', '/images/room3/dog-3.jpg'],
    description: '',
    capacity: 'All dogs',
  },
  {
    id: 5,
    name: 'Premium Room',
    type: 'room',
    furnishings: {
      bed: true,
      blanket: true,
      toys: true,
    },
    silence: true,
    price: 70.0,
    images: ['/images/room2/dog-1.jpg', '/images/room2/dog-2.jpg', '/images/room2/dog-3.jpg'],
    description: '',
    capacity: 'All dogs',
  },
  {
    id: 6,
    name: 'Peace Room',
    type: 'room',
    furnishings: {
      bed: true,
      blanket: true,
      toys: false,
    },
    silence: true,
    price: 60.0,
    images: ['/images/room3/dog-1.jpg', '/images/room3/dog-2.jpg', '/images/room3/dog-3.jpg'],
    description: '',
    capacity: 'Stressed dogs',
  },
];
