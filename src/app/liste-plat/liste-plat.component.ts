import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  plats: any
  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.refreshPlatList()
  }
  refreshPlatList() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {

        this.plats = response['data'];
      } else {
      }
    }

    const onError = (response: any) => {
    }
    var token = localStorage.getItem('token')?.toString()
    this.platService.findAllResto(token).subscribe(onSuccess, onError)
  }
  modifierPlat(idPlat: string) { }
  supprimerPlat(idPlat: string) { }
  nouveauPlat() { }
}
