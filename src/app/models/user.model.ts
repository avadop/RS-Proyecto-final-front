import { Insurance } from '../interfaces/insurance.type';
import { Address } from '../interfaces/address.type';

type professionalType =  'Medico' | 'Enfermero' | 'Administrativo'

export interface User {
  //? para que se autogenere en el post, pero siempre está
  id?: number; 

  name: string;
  firstSurname: string;
  secondSurname?: string;
  gender?: string;
  birthDate?: string;
  idDocument?: string;
  address?: Address;
}

export interface Patient extends User{
  nhc: string; 
  insurance?: Insurance[];
}

export interface Professional extends User{
  colegiateNumber: string;
  profesionalType?: professionalType;
}
