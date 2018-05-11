// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {AppComponent} from './app.component';
// import {NavbarComponent} from './navbar/navbar.component';
// import {FooterComponent} from './footer/footer.component';
// import {SearchComponent} from './search/search.component';
// import {CarouselComponent} from './carousel/carousel.component';
// import {ProductComponent} from './product/product.component';
// import {StarsComponent} from './stars/stars.component';
// import { RouterHomeComponent } from './router-home/router-home.component';
// import { RouterProductComponent } from './router-product/router-product.component';
//
// @NgModule({
//   // component, instruction, pipe
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     FooterComponent,
//     SearchComponent,
//     CarouselComponent,
//     ProductComponent,
//     StarsComponent,
//     RouterHomeComponent,
//     RouterProductComponent
//   ],
//   // require file
//   imports: [
//     BrowserModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
// }


// -------------- router --------------
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {RouterProductComponent} from './router-product/router-product.component';
import {RouterHomeComponent} from './router-home/router-home.component';
import {RouterCode404Component} from './router-code404/router-code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RouterHomeComponent},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {
    path: 'product/:id',
    component: RouterProductComponent,
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
  {path: '**', component: RouterCode404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    RouterHomeComponent,
    RouterProductComponent,
    RouterCode404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
