import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  URL_CARRINHO = 'http://localhost:3000/carrinho';
  constructor(private httpClient: HttpClient) { 
  }

  listar(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.URL_CARRINHO);
  }

  inserir(produto:Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(this.URL_CARRINHO, produto);
  }

  deletar(produto:Produto): Observable<Produto>{
    return this.httpClient.delete<Produto>(this.URL_CARRINHO+'/'+produto.id)
  }
}
