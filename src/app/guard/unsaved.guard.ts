import {CanDeactivate} from '@angular/router';
import {RouterProductComponent} from '../router-product/router-product.component';

export class UnsavedGuard implements CanDeactivate<RouterProductComponent> {
  canDeactivate(component: RouterProductComponent) {
    return window.confirm('你还没有保存.确定要离开么?');
  }
}
