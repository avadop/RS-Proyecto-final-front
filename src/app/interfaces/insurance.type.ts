
type type = 'Dental' | 'Salud' | 'Familiar';

export interface Insurance {
  cardNumber: string;
  name: string;
  insuranceType: type;
}