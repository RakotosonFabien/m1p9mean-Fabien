import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ws_url } from '../../environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private toolsService: ToolsService, private router: Router ) { }
  getUserFromToken() {
    var token = localStorage.getItem('token')
    if (token == null) {
      return null
    }
    return this.http.get(ws_url + 'utilisateur-complet?auth_utilisateur.token='+token);
  }

  findAll(urlDirection: string) {
    var users: any = this.http.get(ws_url + urlDirection);
    console.log('MERDE ' + users)
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

  insertResto(data: any) {
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
    var observable = this.http.post(ws_url + 'restos', input, options);
    observable.subscribe(onSuccess, onError);
  }
}
