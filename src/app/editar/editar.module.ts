import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/src/http_module';
import { EditarComponent } from './editar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports:[EditarComponent],
  declarations: [EditarComponent]
})
export class EditarModule { }
