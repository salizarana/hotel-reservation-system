export interface Room {
  roomNumber: number;
  roomType: string;
  capacity: number;
  pricePerNight: number;
  photos: string[];
  isBooked: boolean;
  description: string;
  features: string[];
}
