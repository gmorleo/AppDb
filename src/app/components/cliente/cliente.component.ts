import { Component, OnInit } from '@angular/core';
import {user} from '../../models/user';
import {ClienteService} from '../../services/cliente.service';
import {Cliente} from '../../models/cliente';
import {error} from 'util';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  opt: number;
  users: user[];
  cliente: Cliente = {} as Cliente;
  clienti: Cliente[];
  u: user = {} as user;

  constructor(private clienteService: ClienteService) {
    this.getAll();
  }

  ngOnInit() {
  }

  insert() {
    this.opt = 1;
    this.cliente = {} as Cliente;
  }

  update() {
    this.opt = 2;
    this.cliente = {} as Cliente;
  }

  delete() {
    this.opt = 3;
    this.cliente = {} as Cliente;
  }

  insertCliente() {
    console.log(this.cliente);
    this.clienteService.save(this.cliente).subscribe( res => {
      console.log(res);
      this.clienti.push(this.cliente);
    });
  }

  updateCliente() {
    console.log(this.cliente);
    this.clienteService.update(this.cliente).subscribe( res => {
      console.log(res);
      this.getAll();
    });
  }

  deleteCliente() {
    this.clienteService.delete(this.cliente).subscribe( res => {

    });
  }

  loadCliente() {
    this.clienteService.getById(this.cliente.idCliente).subscribe( cliente => {
      this.cliente = cliente;
      console.log(cliente);
    },  err => {
      this.cliente = {} as Cliente;
      alert("Nessun cliente trovato con l'id inserito!");
    });
  }

  getAll() {
    this.clienteService.getAll().subscribe( cliente => {
      this.clienti = cliente;
    });
  }
}
