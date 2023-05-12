import { Payload } from './../models/payload';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const payload: Payload | null = this.storageService.getPayload()

      if(payload && payload.isAdmin && !this.storageService.expriredToken()) {
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
     
  }
  
}
