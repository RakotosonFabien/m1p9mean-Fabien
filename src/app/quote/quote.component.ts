import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../services/quote.service';
import { ToolsService } from '../services/tools.service';
import { ws_url } from '../../environments/environment';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  name: any;
  quotes: any;
  response: any;
  constructor(private http: HttpClient, private quoteService: QuoteService, private toolsService: ToolsService) { }

  ngOnInit(): void {
    this.quotes = this.quoteService.findAll()
      .subscribe((data : any)=> this.quotes = data);
    console.log("KOTA ==> " + this.quotes);
  }
  insererQuote() {
    //success
    const onSuccess = (response: any) => {
      if (response['status'] == 200) {

      } else {
        // status 400

      }
    }
    //fail
    const onError = (response: any) => {
    }
    var input = {
      "name": 'Rakotoson',
      "quote" : 'my quote'
    }
    const options = this.toolsService.formOption();
    console.log("Quote insere normalement");
    var observable = this.http.post(ws_url + 'quotes', input, options);
    observable.subscribe(onSuccess, onError);
  }
}
