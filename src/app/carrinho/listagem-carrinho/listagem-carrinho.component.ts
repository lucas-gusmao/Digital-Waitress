import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { CarrinhoFirestoreService } from 'src/app/shared/services/carrinho-firestore.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-listagem-carrinho',
  templateUrl: './listagem-carrinho.component.html',
  styleUrls: ['./listagem-carrinho.component.scss']
})
export class ListagemCarrinhoComponent implements OnInit {
  
  produto = Produto;
  carrinho: Array<Produto>;

  constructor(private carrinhoService: CarrinhoFirestoreService) { }

  ngOnInit(): void {
    this.carrinhoService.listar().subscribe(
      carrinho => this.carrinho = carrinho
    );
  }
  
  removerCarrinho(produto: Produto): void{
    this.carrinhoService.remover(produto.id).subscribe()
    this.carrinhoService.listar().subscribe(
      carrinho => this.carrinho = carrinho
    );
    /* const indxProdutoARemover = this.carrinho.findIndex(p => p.id === produto.id);
    if (indxProdutoARemover >-1){
      this.carrinho.splice(indxProdutoARemover, 1)
    } */
  }

}
