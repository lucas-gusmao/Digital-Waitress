import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoFirestoreService {
  colecaoCarrinho: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'carrinho';
  constructor(private afs: AngularFirestore) { 
    this.colecaoCarrinho = afs.collection(this.NOME_COLECAO);
  }
  listar(): Observable<Produto[]>{
    return this.colecaoCarrinho.valueChanges({idField: 'id'});
  }
  inserir(produto: Produto): Observable<object>{
    return from(this.colecaoCarrinho.add(Object.assign({}, produto)));
  }
  remover(id: string): Observable<void>{
    return from(this.colecaoCarrinho.doc(id).delete());
  }
}
