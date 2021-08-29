import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCarrinhoComponent } from './carrinho/listagem-carrinho/listagem-carrinho.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {path:'listagem-produtos', component:ListagemProdutoComponent},
  {path:'listagem-carrinho', component:ListagemCarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
