import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {Product1Component} from './product1/product1.component';
import {ProductService} from './shared/product.service';
import {Product2Component} from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './shared/another-product.service';
import {CarouselComponent} from './carousel/carousel.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchComponent} from './search/search.component';
import {StarsComponent} from './stars/stars.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LoggerService, appConfig) => {
        if (appConfig.isDev) {
          return new ProductService(logger);
        } else {
          return new AnotherProductService(logger);
        }
      },
      deps: [LoggerService, 'APP_CONFIG']
    },
    LoggerService,
    {
      provide: 'APP_CONFIG',
      useValue: {isDev: false}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  xxx(event) {
    console.log(event);
  }
}
