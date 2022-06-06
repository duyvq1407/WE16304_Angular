import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {

  constructor(
    private router : Router,
    private toastr: ToastrService
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = JSON.parse(localStorage.getItem('LogedInUser')!);
      if (user.user.role === 1) {
        return true;
      }
      this.toastr.error("Không có quyền truy cập admin")
      this.router.navigateByUrl('/account/signin')
      return false;
  }
  
}
