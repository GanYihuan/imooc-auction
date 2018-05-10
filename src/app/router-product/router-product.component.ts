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

  constructor(private routeInfo: ActivatedRoute) {
    routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    routeInfo.queryParams.subscribe((params: Params) => this.test = params['test']);
    // this.productId = this.routeInfo.snapshot.params['id'];
  }

  ngOnInit() {
  }
}
