import { FreteModule } from './frete/frete.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CadastroModule } from './cadastro/cadastro.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FreteModule,
    AppRoutingModule,
    PessoaModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
