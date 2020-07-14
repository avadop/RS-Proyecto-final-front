import { Insurance } from '../interfaces/insurance.type';
import { Address } from '../interfaces/address.type';

type profesionalType =  'Medico' | 'Enfermero' | 'Administrativo'

export interface User {
  _id: number;

  name: string;
  firstSurname: string;
  secondSurname?: string;
  gender?: string;
  birthDate?: string;
  idDocument?: string;
  address?: Address;
}

export interface Patient extends User{
  nhc?: string; 
  insurance?: Insurance[];
}

export interface Profesional extends User{
  colegiateNumber?: string;
  profesionalType?: profesionalType;
}
