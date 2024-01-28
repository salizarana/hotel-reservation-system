import { Guest } from './guest';
import { Room } from './room';

interface RoomReserved {
  id?: number;
  roomId: number;
  roomType: string;
  ratePerNight: number;
}
export interface InvoiceResponse {
  reservationId: number;
  guest: Guest;
  roomReserved: RoomReserved[];
  checkInDate: Date;
  checkOutDate: Date;
  days: number;
  discountPercent: number;
  discountAmount: number;
  subTotal: number;
  netTotal: number;
  createdAt: Date;
}
