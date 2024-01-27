import { Guest } from './guest';

export interface ReservationRequest {
  guest: Guest;
  roomIds: number[];
  checkInDate: Date;
  checkOutDate: Date;
}
