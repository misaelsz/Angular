import { FreteService } from './../frete.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FreteComponent } from './frete.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [FreteComponent],

  providers:[FreteService],

  exports:[FreteComponent]
})
export class FreteModule { }
