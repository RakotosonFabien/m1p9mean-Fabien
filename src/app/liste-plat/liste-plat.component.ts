import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  plats : any
  droits : any
  idUser: any = ''
  idResto : string = ''
  constructor(private platService: PlatService, private utilisateurService: UtilisateurService, private errorService: ErrorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('id_user')
    this.idResto = this.route.snapshot.params['id_resto']
    this.setDroitsUser()
    this.refreshPlatList()
  }

  commanderPlat(data: any) {
    this.platService.commanderPlat(data)
  }
  //
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
  refreshPlatList() {
    const onSuccess = (response: any) => {
      console.log(response['meta']['status'])
      if (response['meta']['status'] == 200) {
        this.plats = response['data'];
      } else {
      }
      console.log(this.plats)
    }
    const onError = (response: any) => {
    }
    this.platService.findAllResto(this.route.snapshot.params['id_resto']).subscribe(onSuccess, onError)
  }
  refreshPlatListV() {
    
  }
  modifierPlat(idPlat: string) { }
  supprimerPlat(idPlat: string) { }
  nouveauPlat() {
    this.router.navigateByUrl('ajout-plat')
  }
}
