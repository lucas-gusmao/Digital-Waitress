import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  produto: Produto;
  produtos: Array<Produto>
  carrinho: Array<Produto>;

  constructor(private produtoService: ProdutoService, private carrinhoService:CarrinhoService){ 
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    );
  }

  adicionarCarrinho(produto: Produto): void{
    this.carrinhoService.inserir(produto).subscribe(
      produto => console.log(produto)
    );
  }

}