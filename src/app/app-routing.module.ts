import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RouterProductComponent} from './router-product/router-product.component';
import {RouterHomeComponent} from './router-home/router-home.component';
import {RouterCode404Component} from './router-code404/router-code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
// import {LoginGuard} from './guard/login.guard';
// import {UnsavedGuard} from './guard/unsaved.guard';
// import {ProductResolve} from './guard/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RouterHomeComponent},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {
    path: 'product/:id',
    // resolve: {product: ProductResolve},
    component: RouterProductComponent,
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard],
    children: [
      {
        path: '',
        component: ProductDescComponent
      },
      {
        path: 'seller/:id',
        component: SellerInfoComponent
      }
    ]
  },
  // put last
  {path: '**', component: RouterCode404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // LoginGuard,
    // UnsavedGuard,
    // ProductResolve
  ]
})
export class AppRoutingModule {
}
