import { Insurance } from '../interfaces/insurance.type';
import { Address } from '../interfaces/address.type';

export interface User {
  _id?: string; 

  nhc?: string; 
  insuranceList?: Insurance[];

  membershipNumber?: string;
  professionalType?: string;

  name: string;
  firstSurname: string;
  secondSurname?: string;
  gender?: string;
  birthDate?: string;
  idDocument?: string;
  address?: Address;
}
