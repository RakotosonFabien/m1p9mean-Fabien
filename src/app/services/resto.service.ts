import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ws_url } from '../../environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient, private toolsServ: ToolsService) {

  }
  findAll() {
    var users: any = this.http.get(ws_url + "");
    return users;
  }
  insertResto(input:any) {
    
  }
}
