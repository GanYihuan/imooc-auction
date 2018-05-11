import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    const loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('LoginGuard:用户未登录' + new Date());
    }

    return loggedIn;
  }
}
