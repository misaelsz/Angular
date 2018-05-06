import { PessoaService } from './../pessoa.service';

import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pessoa } from '../pessoa/pessoa';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  @Input() pessoa: Pessoa = new Pessoa;

  constructor(private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private location: Location,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPessoa();
  }

  getPessoa(): void {
    console.log("entrou no get");
    var idPessoa: any;
    /*;+this.route.snapshot.paramMap.get('id');*/
    
    const pessoa = this.activatedRouter.params.subscribe( params => this.pessoa.id =  params.id);
    this.pessoaService.getPessoaPorId(this.pessoa.id)
      .subscribe(pessoa => this.pessoa = pessoa);
    console.log("Id:" + this.pessoa.id);

    console.log(this.pessoa.id);
    console.log(this.pessoa.nome);
  }

  goBack(): void {
    this.location.back();
  }

}
