import { Insurance } from '../interfaces/insurance.type';
import { Address } from '../interfaces/address.type';

type professionalType =  '' | 'Médico' | 'Enfermero' | 'Administrativo'

export interface User {
  id?: number; 

  nhc?: string; 
  insuranceList?: Insurance[];

  membershipNumber?: string;
  profesionalType?: professionalType;

  name: string;
  firstSurname: string;
  secondSurname?: string;
  gender?: string;
  birthDate?: string;
  idDocument?: string;
  address?: Address;
}
