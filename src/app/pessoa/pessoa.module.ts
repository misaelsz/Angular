import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './../pessoa.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { Browser } from 'selenium-webdriver';
import { AppRoutingModule } from '..//app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [PessoaComponent],

  providers:[PessoaService],

  exports:[PessoaComponent]
})
export class PessoaModule { }
