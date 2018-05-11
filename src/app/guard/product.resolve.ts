///<reference path="../router-product/router-product.component.ts"/>
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {RouterProduct} from '../router-product/router-product.component';
import {Injectable} from '@angular/core';
import {Observable} from '../../../node_modules/rxjs';

/**
 * Created by zhailiang on 2017/1/23.
 */
// inject router
@Injectable()
export class ProductResolve implements Resolve<RouterProduct> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<RouterProduct> | Promise<RouterProduct> | RouterProduct {
    const productId: number = route.params['id'];

    if (productId === 1) {
      return new RouterProduct(1, 'iPhone');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
