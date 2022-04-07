import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  user: any
  constructor(private platService: PlatService, private utilisateurService: UtilisateurService, private errorService: ErrorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setUser()
  }
  setUser() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.user = response['data'][0]
        console.log('tay' + this.user._id)
        this.refreshPlatList()
      }
      else {
        this.errorService.displayErrorData(response)
      }
    }
    const onError = (response: any) => {
      this.errorService.displayError(response)
    }
    this.utilisateurService.getUserFromToken().subscribe(onSuccess, onError)
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
