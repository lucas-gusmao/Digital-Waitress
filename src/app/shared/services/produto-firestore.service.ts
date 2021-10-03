import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  colecaoProdutos: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'produtos';
  constructor(private afs: AngularFirestore) { 
    this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
  }
  listar(): Observable<Produto[]>{
    return this.colecaoProdutos.valueChanges({idField: 'id'});
  }
  inserir(produto: Produto): Observable<object>{
    return from(this.colecaoProdutos.add(Object.assign({}, produto)));
  }
}
