import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  displayErrorData(response: any) {
    console.log("ERREUR ==> " + response['meta']['message'])
  }
  displayError(response: any) {
    console.log(response.message)
  }
}
