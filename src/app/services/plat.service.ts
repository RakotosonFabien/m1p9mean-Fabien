import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { ws_url } from '../../environments/environment';
import { ToolsService } from './tools.service';
@Injectable({
  providedIn: 'root'
})
export class PlatService {
  constructor(private http: HttpClient, private toolsService: ToolsService, private router: Router, private urlSerializer: UrlSerializer) { }

  findPlatById(idPlat : string) {
    var token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    var url = ws_url + 'plats/' + idPlat
    console.log(url)
    var plats: any = this.http.get(url, { headers: headers });
    return plats;
  }
  commanderPlat(data: any) {
    if (localStorage.getItem('id_commande') != null) {
      data['id_commande'] = localStorage.getItem('id_commande')
      console.log('VAOVAO FARANY ' + data)
    }
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        console.log('OVAY LE LOCAL FA TSSS')
        localStorage.setItem('id_commande', response['data']['id_commande'])
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    const options = this.toolsService.formOption();
    var observable = this.http.post(ws_url + 'commandes', data, options);
    observable.subscribe(onSuccess, onError);
  }
  insertPlat(data: any, idResto : string) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.router.navigate(['/liste-plat-resto/' + idResto]);
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    const options = this.toolsService.formOption();
    var observable = this.http.post(ws_url + 'plats', data, options);
    observable.subscribe(onSuccess, onError);
  }
  findAll(data: any) {
    var token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    var url = ws_url + 'plats' + this.serializeQuery(data)
    var plats: any = this.http.get(url, { headers: headers });
    console.log('GENERATED ==> ' + url)
    return plats;
  }
  serializeQuery(queryParams: any) {
    const tree = this.router.createUrlTree([], queryParams)
    return this.urlSerializer.serialize(tree)
  }
  findAllResto(idResto: any) {
    var token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    var plats: any = this.http.get(ws_url + 'plat-resto/' + idResto, { headers: headers });
    return plats;
  }
  getCategoriesPlat() {
    var plats: any = this.http.get(ws_url + 'categorie_plat');
    return plats;
  }
}
