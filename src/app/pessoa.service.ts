import { Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pessoa } from './pessoa/pessoa';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions ={
     headers: new HttpHeaders({ 'Content-Type': 'application/json'}) 
};  

@Injectable()
export class PessoaService {
  resposta: Response;
  constructor(private _http: HttpClient) { }
  private _Url = "http://localhost:52698/api/pessoa";
 
  getPessoas(): Observable<Pessoa> {
    return this._http.get(this._Url)
    .map((response: Response)=> response)
    .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

getPessoaPorId(id: number): Observable<Pessoa>{
    const url = `${this._Url}/${id}`;
    return this._http.get<Pessoa>(url)
}

addPessoa(pessoa: Pessoa): Observable<Pessoa>{
    console.log("dentro do servico: "+pessoa);
    return this._http.post<Pessoa>(this._Url, pessoa, httpOptions)
    .map(res => res)

}

private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}
