export interface Room {
  id: number;
  roomNumber: number;
  roomType: string;
  capacity: number;
  ratePerNight: number;
  photos: string[];
  isBooked: boolean;
  description: string;
  features: string[];
  isSelected?: boolean;
}
