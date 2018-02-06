import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Frete } from './frete';
import { FreteService } from '../frete.service';


@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent {
  frete: Frete;
  cep: string;
    
    constructor(private _freteService: FreteService) {

    }

    CalcularFrete(): void {
        this._freteService.getFrete(this.cep)
            .subscribe((data: Frete) => this.frete = data,
            error => console.log(error));
    }
}
