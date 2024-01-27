export interface Guest {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  details?: string;
  createdAt?: Date;
}
