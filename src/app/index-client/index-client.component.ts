import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-index-client',
  templateUrl: './index-client.component.html',
  styleUrls: ['./index-client.component.css']
})
export class IndexClientComponent implements OnInit {
  restos : any
  constructor(private http: HttpClient, private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.refreshRestoList()
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
