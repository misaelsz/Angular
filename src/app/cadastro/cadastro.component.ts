import { Pessoa } from './../pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  private listaPessoas: Pessoa[] = [];
  private pessoa: Pessoa= { 
    id : null,
    nome: null, 
    email:null,
    senha:null,
    telefone:null,
    Escolaridade:null,
    Sexo:null
  };

  constructor(private pessoaService: PessoaService) { }


  cadastrar(): void {
    console.log(this.pessoa)
   var Pess = this.pessoaService.addPessoa(this.pessoa)
   .subscribe(pessoa => {this.listaPessoas.push(pessoa)
    console.log(this.listaPessoas);
    console.log(this.listaPessoas);
  });
   console.log(Pess)
  }


  ngOnInit() {
  }

}
