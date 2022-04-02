import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ws_url } from '../../environments/environment';
import { ToolsService } from '../services/tools.service';
import { TypeUtilisateurService } from '../services/type-utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type_utilisateur: any;
  loginPostUrl: any;
  constructor(private http: HttpClient, private typeUtilisateurService: TypeUtilisateurService, private router: Router, private toolsService: ToolsService) {
    this.loadUtilisateur();
    this.loginPostUrl = ws_url + "login"
  }
  login(data : any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
      } else {
        // status 400
        console.warn(response)
      }
    }
    //fail
    const onError = (response: any) => {
      console.log("err");
    }
    var input = {
      mdp: data.mdp,
      email: data.email,
      id_type_u : data.id_type_u
    }
    const options = this.toolsService.formOption();
    var observable = this.http.post(this.loginPostUrl, input, options);
    observable.subscribe(onSuccess, onError);
  }
  loadUtilisateur() {
    this.type_utilisateur = this.typeUtilisateurService.findAll()
      .subscribe((data: any) => this.type_utilisateur = data);
  }
  ngOnInit(): void {
  }

}
