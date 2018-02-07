import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
private listaPessoas: Pessoa;
private pessoa: Pessoa;

  constructor(private pessoaService: PessoaService) { }


  listarPessoas(): void {
     this.pessoaService.getPessoas()
    .subscribe((data: Pessoa) => this.listaPessoas = data,
    error => console.log(error));
}


  ngOnInit() {
  }

}
