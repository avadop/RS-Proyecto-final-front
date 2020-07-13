import { Insurance } from './insurance.model';
import { Address } from './address.model';

export interface User {
  id: number;
  nhc: string;
  name: string;
  first_surname: string;
  second_surname?: string;
  gender?: string;
  birth_date?: string;
  id_document?: string;
  address?: Address;
  insurance?: Insurance[];
  colegiate_number: string;
  profesional_type?: string;
}
