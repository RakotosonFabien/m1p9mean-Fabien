import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  plats: any
  constructor(private platService: PlatService, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.refreshPlatList()
  }
  refreshPlatList() {
    const onSuccess = (response: any) => {
      console.log(response['meta']['status'])
      if (response['meta']['status'] == 200) {
        console.log(response)
        this.plats = response['data'];
      } else {
      }
    }

    const onError = (response: any) => {
    }
    this.platService.findAllResto(this.utilisateurService.getUserFromToken()._id).subscribe(onSuccess, onError)
  }
  modifierPlat(idPlat: string) { }
  supprimerPlat(idPlat: string) { }
  nouveauPlat() { }
}
