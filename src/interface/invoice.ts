import { Room } from './room';

export interface Invoice {
  date: string;
  invoiceNumber: number;
  fullName: string;
  phoneNumber: number;
  email: string;
  serialNumber: number;
  roomNumber: number;
  roomType: string;
  arrivalDate: string;
  departureDate: string;
  rate: number;
  amount: number;
  subTotal: number;
  discount: number;
  total: number;
}
