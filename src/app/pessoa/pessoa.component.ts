import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

private pessoas:Pessoa;
private ListaDePessoas:Pessoa[];


  constructor(private pessoaService: PessoaService) { }


  listarPessoas(): void {
     this.pessoaService.getPessoas()
    .subscribe((data: Pessoa) => this.pessoas = data,
    error => console.log(error));
} 

  delete(id : number): void{
    console.log("Entrou no component!" + id);
    this.pessoaService.deletaPessoa(id).subscribe(() => console.log("user deleted"));
  }

  editar(id: number){}

  ngOnInit() {
  }

}
