import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-router-product',
  templateUrl: './router-product.component.html',
  styleUrls: ['./router-product.component.css']
})
export class RouterProductComponent implements OnInit {
  public productId: number;
  public test: boolean;
  public productName: string;

  // get ActivatedRoute
  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    //// <a [queryParams]="{test: true}">Product Details</a>
    this.test = this.routeInfo.snapshot.queryParams['test'];
    //// <a [routerLink]="['/product', 1]">Product Details</a>
    this.productId = this.routeInfo.snapshot.params['id'];
    //// this.router.navigate(['/product', 2], {})
    //// when itself jump to itself: Product-detail, constructor run once, productId not change
    this.routeInfo.params.subscribe((params: Params) => (this.productId = params['id']));
    // this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    // this.routeInfo.data.subscribe((data: { product: RouterProduct }) => {
    //   this.productId = data.product.id;
    //   this.productName = data.product.name;
    // });
  }
}

export class RouterProduct {
  constructor(public id: number, public name: string) {
  }
}
