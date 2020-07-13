import { Address } from './address.model'
import { Insurance } from './insurance.model'

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
  health_insurance?: Insurance[];
  colegiate_number: string;
  profesional_type?: string;
}
