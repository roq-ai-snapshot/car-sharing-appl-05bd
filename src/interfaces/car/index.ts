import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  make: string;
  year: number;
  color: string;
  license_plate: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  make?: string;
  color?: string;
  license_plate?: string;
  owner_id?: string;
}
