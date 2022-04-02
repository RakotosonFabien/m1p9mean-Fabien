import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ws_url } from '../../environments/environment';
import { TypeUtilisateurService } from '../services/type-utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type_utilisateur: any;
  loginPostUrl: any;
  constructor(private http: HttpClient, private typeUtilisateurService: TypeUtilisateurService) {
    this.loadUtilisateur();
    this.loginPostUrl = ws_url + "login"
  }
  login() {
      
  }
  loadUtilisateur() {
    this.type_utilisateur = this.typeUtilisateurService.findAll()
      .subscribe((data: any) => this.type_utilisateur = data);
  }
  ngOnInit(): void {
  }

}
