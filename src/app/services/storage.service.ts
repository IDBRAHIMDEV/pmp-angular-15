import { Payload } from './../models/payload';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private readonly APP_TOKEN = "app_token"

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
        
          return JSON.parse(atob(payloadEncoded[1]))

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
