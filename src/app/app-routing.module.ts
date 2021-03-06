import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FreteComponent } from './frete/frete.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes =[
  {path: 'frete', component: FreteComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: '', redirectTo: '/index', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
exports:[RouterModule]
})


export class AppRoutingModule { }
