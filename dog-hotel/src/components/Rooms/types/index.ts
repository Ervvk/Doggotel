import { BaseEntity } from '@/types';

export type RoomPrice = number[];

export type RoomType = 'Box' | 'Room';

export type DogSizes = {
  small: boolean;
  medium: boolean;
  big: boolean;
};

export type Furnishings = {
  toys: boolean;
  blanket: boolean;
  bed: boolean;
};

export interface RoomsFilters {
  dogSizes: DogSizes;
  furnishings: Furnishings;
  maxPrice: number;
}

export interface Room extends BaseEntity {
  name: string;
  type: string;
  furnishings: Furnishings;
  dogSizes: DogSizes;
  price: number;
  images: string;
  description: string;
  recommendedFor: string;
}
