import { RouterModule } from '@angular/router';
import { FreteModule } from './frete/frete.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
  ],
  imports: [
    BrowserModule,
    FreteModule,
    AppRoutingModule,
    PessoaModule,
    CadastroModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
