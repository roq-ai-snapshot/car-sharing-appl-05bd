import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  amount: number;
  status: string;
  booking_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  booking?: BookingInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  booking_id?: string;
  customer_id?: string;
}
