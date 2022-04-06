import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ws_url } from '../../environments/environment';
import { ErrorService } from './error.service';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private toolsService: ToolsService, private router: Router ) { }
  getUserFromToken() {
    var token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    var lien = ws_url + 'utilisateurs-complet'
    console.log(lien)
    return this.http.get(lien, { headers: headers });
  }

  findAll(urlDirection: string) {
    var users: any = this.http.get(ws_url + urlDirection);
    return users;
  }

  insertClient(data : any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.router.navigateByUrl('login');
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    var input = {
      nom: data.nom,
      adresse: data.adresse,
      mdp: data.mdp,
      email: data.email
    }

    const options = this.toolsService.formOption();
    var observable = this.http.post(ws_url + 'clients', input, options);
    observable.subscribe(onSuccess, onError);
  }

  insertLivreur(data: any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.router.navigateByUrl('liste-livreur');
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    var input = {
      nom: data.nom,
      adresse: data.adresse,
      mdp: data.mdp,
      email: data.email
    }

    const options = this.toolsService.formOption();
    var observable = this.http.post(ws_url + 'livreurs', input, options);
    observable.subscribe(onSuccess, onError);
  }

  insertResto(data: any, redirect: boolean) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        if (redirect) {
          this.router.navigateByUrl('liste-resto');
        }
      } else {
        // status 400
      }
    }
    const onError = (response: any) => {
      
    }
    var input = {
      nom: data.nom,
      adresse: data.adresse,
      mdp: data.mdp,
      email: data.email,
      image : data.image
    }

    const options = this.toolsService.formOption();
    var observable = this.http.post(ws_url + 'restos', input, options);
    observable.subscribe(onSuccess, onError);
  }
}
