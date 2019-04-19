import { Component, OnInit } from '@angular/core';
import {Persona} from '../../models/persona';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  opt: number;

  persona: Persona = {} as Persona;
  persone: Persona[];

  constructor(private personaService: PersonaService) {
    this.getAll();
  }

  ngOnInit() {
  }

  insert() {
    this.opt = 1;
    this.persona = {} as Persona;
  }

  update() {
    this.opt = 2;
    this.persona = {} as Persona;
  }

  delete() {
    this.opt = 3;
    this.persona = {} as Persona;
  }

  insertPersona() {
    console.log(this.persona);
    this.personaService.save(this.persona).subscribe( res => {
      console.log(res);
      this.persone.push(this.persona);
    });
  }

  updatePersona() {
    console.log(this.persona);
    this.personaService.update(this.persona).subscribe( res => {
      console.log(res);
      this.getAll();
    });
  }

  deletePersona() {
    this.personaService.delete(this.persona.id).subscribe( res => {
      console.log(res);
      this.getAll();
    });
  }

  loadPersona() {
    this.personaService.getById(this.persona.id).subscribe( persona => {
      this.persona = persona;
      console.log(persona);
    },  err => {
      this.persona = {} as Persona;
      alert("Nessuna persona trovato con l'id inserito!");
    });
  }

  getAll() {
    this.personaService.getAll().subscribe( persona => {
      this.persone = persona;
    });
  }
}
