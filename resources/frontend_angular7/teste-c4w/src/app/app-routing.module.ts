import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AuthComponent },
  {
    path: 'produtos',
    component: ProductsComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produto-detalhe/:id',
    component: ProductShowComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produto-novo',
    component: ProductCreateComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'produto-editar/:id',
    component: ProductEditComponent,
    data: { title: 'Editar o Produto' }
  },
  // { path: '',
  //   redirectTo: '/produtos',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
