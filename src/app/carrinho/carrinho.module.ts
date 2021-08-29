import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemCarrinhoComponent } from './listagem-carrinho/listagem-carrinho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ListagemCarrinhoComponent
  ],
  exports:[
    ListagemCarrinhoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class CarrinhoModule { }
