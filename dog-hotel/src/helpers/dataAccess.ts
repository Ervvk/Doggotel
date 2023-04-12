import { promises as fs } from 'fs';
import path from 'path';

export const getRoomsData = async () => {
  const filePath = path.join(process.cwd(), 'mock-backend', 'rooms.json');
  const jsonRooms = await fs.readFile(filePath);
  const rooms = JSON.parse(jsonRooms.toString());

  return rooms;
};
