import { FeedbackInterface } from 'interfaces/feedback';
import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time: any;
  pickup_location: string;
  dropoff_location: string;
  customer_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  invoice?: InvoiceInterface[];
  user?: UserInterface;
  car?: CarInterface;
  _count?: {
    feedback?: number;
    invoice?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  pickup_location?: string;
  dropoff_location?: string;
  customer_id?: string;
  car_id?: string;
}
