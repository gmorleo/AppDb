import {Cliente} from './cliente';

export interface Prodotto {
  id: number;
  idCliente: number;
  nome: string;
  quantity: number;
  prezzo: number;
}
