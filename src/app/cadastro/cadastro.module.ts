
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../pessoa.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [CadastroComponent],

  providers:[PessoaService],

  exports:[CadastroComponent]
})
export class CadastroModule { }
