import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(localStorage.getItem('access-token')){
    return true;
  }else{
    router.navigate(['/login-signup']);
    return false;
  }
};