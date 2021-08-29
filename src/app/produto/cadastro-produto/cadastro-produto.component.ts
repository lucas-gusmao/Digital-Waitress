import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto;

  ngOnInit(): void {
  }
  
  constructor(private produtoService: ProdutoService){
    this.produto = new Produto();
  }
  
  inserirProduto(): void{
    this.produtoService.inserir(this.produto).subscribe(
      produto => console.log(produto)
    );
    this.produto = new Produto();
  }

}
