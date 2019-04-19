import { Component, OnInit } from '@angular/core';
import {Persona} from '../../models/persona';
import {PersonaService} from '../../services/persona.service';
import {PersonaMongo} from '../../models/personaMongo';

@Component({
  selector: 'app-elenco-mongo',
  templateUrl: './elenco-mongo.component.html',
  styleUrls: ['./elenco-mongo.component.css']
})
export class ElencoMongoComponent implements OnInit {

  opt: number;

  persona: PersonaMongo = {} as PersonaMongo;
  persone: PersonaMongo[];

  constructor(private personaService: PersonaService) {
    this.getAll();
  }

  ngOnInit() {
  }

  insert() {
    this.opt = 1;
    this.persona = {} as PersonaMongo;
  }

  update() {
    this.opt = 2;
    this.persona = {} as PersonaMongo;
  }

  delete() {
    this.opt = 3;
    this.persona = {} as PersonaMongo;
  }

  insertPersona() {
    console.log(this.persona);
    this.personaService.saveMongo(this.persona).subscribe( res => {
      console.log(res);
      this.persone.push(this.persona);
    });
  }

  updatePersona() {
    console.log(this.persona);
    this.personaService.updateMongo(this.persona).subscribe( res => {
      console.log(res);
      this.getAll();
    });
  }

  deletePersona() {
    this.personaService.deleteMongo(this.persona.id).subscribe( res => {
      console.log(res);
      this.getAll();
    });
  }

  loadPersona() {
    this.personaService.getByIdMongo(this.persona.id).subscribe( persona => {
      this.persona = persona;
      console.log(persona);
    },  err => {
      this.persona = {} as PersonaMongo;
      alert("Nessuna persona trovato con l'id inserito!");
    });
  }

  getAll() {
    this.personaService.getAllMongo().subscribe( persona => {
      this.persone = persona;
    });
  }
}
