export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  capacity: number;
  ratePerNight: number;
  photos: string[];
  isBooked: boolean;
  description: string;
  features: string[];
  isSelected?: boolean;
}
