import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-index-client',
  templateUrl: './index-client.component.html',
  styleUrls: ['./index-client.component.css']
})
export class IndexClientComponent implements OnInit {
  restos: any
  droits: any
  constructor(private http: HttpClient, private utilisateurService: UtilisateurService, private router: Router, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.refreshRestoList()
    this.setDroitsUser()
  }
  refreshRestoList() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.restos = response['data'];
      } else {
      }
    }

    const onError = (response: any) => {
    }
    this.utilisateurService.findAll("restos").subscribe(onSuccess, onError)
  }
  setDroitsUser() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.droits = response['data']
      }
      else {
        this.errorService.displayErrorData(response)
      }
    }
    const onError = (response: any) => {
      this.errorService.displayError(response)
    }
    this.utilisateurService.getTokenUserAllowing().subscribe(onSuccess, onError)
  }
  modifierResto(id: string) {
    this.refreshRestoList()
  }
  supprimerResto(id: string) {
    this.refreshRestoList()
  }
  nouveauResto() {
    this.router.navigate(['/nouveau-resto'])
  }
}
