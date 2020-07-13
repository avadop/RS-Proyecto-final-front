import { Address } from './address.model'

export interface HealthInsurance {
  card_number: string;
  name: string;
  type: string;
}

export interface User {
  id: number;
  nhc: string;
  name: string;
  first_surname: string;
  second_surname: string;
  gender: string;
  birth_date: string;
  id_document: string;
  address: Address;
  health_insurance: HealthInsurance[];
  colegiate_number: string;
  type: string;
}

export interface RootObject {
  users: User[];
}