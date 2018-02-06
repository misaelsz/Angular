
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pessoa } from './pessoa/pessoa';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http/src/module';

@Injectable()
export class PessoaService {

  constructor(private _http: HttpClient) { }
  private _Url = "http://localhost:52698/api/pessoa";
      
  getPessoas(): Observable<Pessoa> {
    return this._http.get(this._Url)
        .map((response: Response) => <Pessoa>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

getPessoa(id: number): Observable<Pessoa>{
    const url = `${this._Url}/${id}`;
    return this._http.get<Pessoa>(url)
}

private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}
