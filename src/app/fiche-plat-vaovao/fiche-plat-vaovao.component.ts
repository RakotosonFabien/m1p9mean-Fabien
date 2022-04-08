import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-fiche-plat-vaovao',
  templateUrl: './fiche-plat-vaovao.component.html',
  styleUrls: ['./fiche-plat-vaovao.component.css']
})
export class FichePlatVaovaoComponent implements OnInit {
  plat: any
  droits: any
  idUser: any
  idResto: any
  constructor(private route: ActivatedRoute, private platService: PlatService, private utilisateurService: UtilisateurService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('id_user')
    this.idResto = this.route.snapshot.params['id_resto']
    this.setPlatById()
    this.setDroitsUser()
  }
  commanderPlat(data: any) {
    data.id_client = this.idUser
    data.id_resto = this.idResto
    data.id_plat = this.plat._id
    this.platService.commanderPlat(data)
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
  setPlatById() {
    console.log('MON PLAT ')
    var idPlat = this.route.snapshot.params['id_plat']
    console.log('MON PLAT ' + idPlat)
    const onSuccess = (response: any) => {
      console.log(response['meta']['status'])
      if (response['meta']['status'] == 200) {
        this.plat = response['data'][0]
        console.log('MON PLAT ' + this.plat._id)
      } else {
      }
    }
    const onError = (response: any) => {
    }
    this.platService.findPlatById(idPlat).subscribe(onSuccess, onError)
  }
}
