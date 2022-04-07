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
  insertPlat(data: any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        console.log('FIN ===> ' + JSON.stringify(data))
        //this.router.navigate(['/liste-plat']);
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
    console.log('LE MERDE' + idResto)
    var token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    var plats: any = this.http.get(ws_url + 'plat-resto/' + idResto, { headers: headers });
    console.log('LOVE ' + plats.nom)
    return plats;
  }
  getCategoriesPlat() {
    var plats: any = this.http.get(ws_url + 'categorie_plat');
    return plats;
  }
}
