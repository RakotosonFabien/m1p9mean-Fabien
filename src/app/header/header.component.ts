import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  droits: any
  constructor(private router: Router, private utilisateurService: UtilisateurService, private errorService: ErrorService) { }

  ngOnInit(): void {
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
  deconnexion() {
    localStorage.removeItem('token')
    localStorage.removeItem('id_type_u')
    this.router.navigateByUrl('')
  }
}
