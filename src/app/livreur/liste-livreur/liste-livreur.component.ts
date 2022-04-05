import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-liste-livreur',
  templateUrl: './liste-livreur.component.html',
  styleUrls: ['./liste-livreur.component.css']
})
export class ListeLivreurComponent implements OnInit {

  livreurs: any
  constructor(private http: HttpClient, private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.refreshRestoList()
  }
  refreshRestoList() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {

        this.livreurs = response['data'];
      } else {
      }
    }

    const onError = (response: any) => {
    }
    this.utilisateurService.findAll("livreurs").subscribe(onSuccess, onError)
  }
  modifierLivreur(id: string) {
    this.refreshRestoList()
  }
  supprimerLivreur(id: string) {
    this.refreshRestoList()
  }
  nouveauLivreur() {
    this.router.navigate(['/ajout-livreur'])
  }
}
