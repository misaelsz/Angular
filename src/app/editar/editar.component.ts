import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pessoa : Pessoa;

  Editar(pessoa: Pessoa){
    
  }
}
