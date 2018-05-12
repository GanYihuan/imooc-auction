///<reference path="product-detail/product-detail.component.ts"/>
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
import {RouterProductComponent} from './router-product/router-product.component';
import {RouterHomeComponent} from './router-home/router-home.component';
import {RouterCode404Component} from './router-code404/router-code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resolve';
import {AppRoutingModule} from './app-routing.module';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterHomeComponent,
    RouterProductComponent,
    RouterCode404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginGuard,
    UnsavedGuard,
    ProductResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
