import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-ajout-plat',
  templateUrl: './ajout-plat.component.html',
  styleUrls: ['./ajout-plat.component.css']
})
export class AjoutPlatComponent implements OnInit {
  cat_plat: any
  constructor(private platService: PlatService, private errorService: ErrorService, private router: Router, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getCategoriesPlat()
  }
  getCategoriesPlat() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.cat_plat = response['data']
      } else {
        this.errorService.displayErrorData(response)
      }
    }
    const onError = (response: any) => {
      this.errorService.displayError(response)
    }
    this.platService.getCategoriesPlat().subscribe(onSuccess, onError)
  }
  ajoutPlat(data: any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        data['id_user'] = response['data'][0]['_id']
        this.platService.insertPlat(data)
        this.router.navigateByUrl('liste-plat')
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    var user = this.utilisateurService.getUserFromToken().subscribe(onSuccess, onError)
  }
}
