import { promises as fs } from 'fs';
import path from 'path';

export const readFileData = async (fileName: string) => {
  const filePath = path.join(process.cwd(), 'mock-backend', fileName);
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
};

export const getRoomsData = async () => {
  const rooms = await readFileData('rooms.json');
  return rooms;
};

export const getTestimonialsData = async () => {
  const testimonials = await readFileData('testimonials.json');
  return testimonials;
};
