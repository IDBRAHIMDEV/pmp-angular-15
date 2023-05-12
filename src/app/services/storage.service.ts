import { BehaviorSubject } from 'rxjs';
import { Payload } from './../models/payload';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  userName = new BehaviorSubject<string | null>(null)

  private readonly APP_TOKEN = "app_token"

  setUserName(user: string | null) {
    this.userName.next(user)
  }

  setToken(token: string) {
    localStorage.setItem(this.APP_TOKEN, token)
  }

  getToken() {
    return localStorage.getItem(this.APP_TOKEN)
  }

  deleteToken() {
    localStorage.removeItem(this.APP_TOKEN)
  }

  getPayload(): Payload | null {
    const token: string | null = this.getToken()

    if(token) {

      let payloadEncoded = token.split('.')

      if(payloadEncoded.length == 3) {

        try {
          
          const decodedPayload = JSON.parse(atob(payloadEncoded[1]))
  
          this.setUserName(decodedPayload.name)
  
          return decodedPayload

        } catch (error) {

          this.deleteToken()
          return null
        }
        

      }else {
        return null
      }
    }

    return null

  }

  expriredToken() {
    let payload = this.getPayload()

    if(!payload) {
      return false
    }

    return Math.floor(new Date().getTime() / 1000) > payload.exp
  }

}
