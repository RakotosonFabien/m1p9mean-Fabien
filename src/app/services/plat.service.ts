import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ws_url } from '../../environments/environment';
import { ToolsService } from './tools.service';
@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient, private toolsService: ToolsService, private router: Router) { }
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

  findAllResto(idResto: any) {
    var plats: any = this.http.get(ws_url + 'plat-resto/' + idResto);
    return plats;
  }
  getCategoriesPlat() {
    var plats: any = this.http.get(ws_url + 'categorie_plat');
    return plats;
  }
}
