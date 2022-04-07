import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-fiche-plat',
  templateUrl: './fiche-plat.component.html',
  styleUrls: ['./fiche-plat.component.css']
})
export class FichePlatComponent implements OnInit {
  plat: any
  commandePlat: boolean = false
  constructor(private route: ActivatedRoute, private platService: PlatService, private utilisateurService: UtilisateurService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.setDroitsUser()
    this.setPlatById()
  }
  setDroitsUser() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.commandePlat = response['data']['commandePlat']
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
  setPlatById() {
    var idPlat = this.route.snapshot.params['id_plat']
    const onSuccess = (response: any) => {
      console.log(response['meta']['status'])
      if (response['meta']['status'] == 200) {
        this.plat = response['data'][0];
      } else {
      }
    }
    const onError = (response: any) => {
    }
    this.platService.findPlatById(idPlat).subscribe(onSuccess, onError)
  }

}
