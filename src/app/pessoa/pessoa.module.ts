import { PessoaService } from './../pessoa.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { Browser } from 'selenium-webdriver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [PessoaComponent],

  providers:[PessoaService],

  exports:[PessoaComponent]
})
export class PessoaModule { }
