import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Array<Produto>;
  URL_PRODUTOS = 'http://localhost:3000/produtos';
  constructor(private httpClient: HttpClient) {
   }

  listar(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }

  inserir(produto:Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto);
  }
}
