import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: string | null = null
  constructor(private storageService: StorageService, private router: Router) {
    this.storageService.userName.subscribe(res => this.user = res)
  }

  signout() {
    this.storageService.setUserName(null)
    this.storageService.deleteToken()

    this.router.navigate(['/login'])

  }



}
