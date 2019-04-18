import { Component, OnInit } from '@angular/core';
import {Prodotto} from '../../models/prodotto';
import {ProdottoService} from '../../services/prodotto.service';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  opt: number;
  selectedCliente: number;
  prodotti: Prodotto[];
  clienti: Cliente[];
  prodotto: Prodotto = {} as Prodotto;

  constructor( private prodottoService: ProdottoService, private clienteService: ClienteService) {
    this.getAll();
  }

  ngOnInit() {
  }

  insert() {
    this.opt = 0;
  }

  update() {
    this.opt = 1;
  }

  getAll() {
/*    this.prodottoService.getAll().subscribe( prodotti => {
      this.prodotti = prodotti;
      console.log(prodotti);
    })*/
    this.clienteService.getAll().subscribe( clienti => {
      this.clienti = clienti;
    })
  }

  insertProdotto() {
    this.prodotto.idCliente = this.selectedCliente;
    this.prodottoService.save(this.prodotto).subscribe( res => {
      console.log(res);
      this.selectCliente();
      this.prodotto = {} as Prodotto;
    });
  }

  updateProdotto() {
    this.prodotto.idCliente = this.selectedCliente;
    this.prodottoService.update(this.prodotto).subscribe( res => {
      console.log(res);
      this.selectCliente();
      this.prodotto = {} as Prodotto;
    });
  }

  selectCliente() {
    console.log(this.selectedCliente);
    this.prodottoService.getProdottiByIdCliente(this.selectedCliente).subscribe( prodotti => {
      console.log(prodotti);
      this.prodotti = prodotti;
      console.log(this.prodotti);
    })
  }

  loadProdotto() {
    this.prodottoService.getById(this.prodotto.id).subscribe( prodotto => {
      this.prodotto.nome = prodotto.nome;
      this.prodotto.prezzo = prodotto.prezzo;
      this.prodotto.quantity = prodotto.quantity;
    }, error => {
      alert("Nessun prodotto trovato con l'id inserito!");
    });
  }
}
