import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-index-resto',
  templateUrl: './index-resto.component.html',
  styleUrls: ['./index-resto.component.css']
})
export class IndexRestoComponent implements OnInit {
  idResto: any
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.setIdResto()
  }
  setIdResto() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.idResto = response['data'][0]['_id']
      } else {
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    this.utilisateurService.getUserFromToken().subscribe(onSuccess, onError)
  }
}
