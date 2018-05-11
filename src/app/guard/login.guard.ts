import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from '../../../node_modules/rxjs';

/**
 * Created by zhailiang on 2017/1/23.
 */

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    const loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('LoginGuard:用户未登录' + new Date());
    }

    return loggedIn;
  }
}
