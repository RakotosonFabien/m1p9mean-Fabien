import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { ws_url } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient, private toolsService: ToolsService) { }

  findAll() {
    var clients: any = this.http.get(ws_url + 'quotes');
    console.log(clients);
    return clients;
  }
}
