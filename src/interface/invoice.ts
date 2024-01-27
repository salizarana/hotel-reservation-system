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
  nightCount: number;
  discountPercent: number;
  grossTotal: number;
  netTotal: number;
  createdAt: Date;
}
