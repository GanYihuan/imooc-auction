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

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    this.routeInfo.data.subscribe((data: { product: RouterProduct }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
    this.routeInfo.queryParams.subscribe((params: Params) => this.test = params['test']);
    this.productId = this.routeInfo.snapshot.params['id'];
  }
}

export class RouterProduct {
  constructor(public id: number, public name: string) {
  }
}
