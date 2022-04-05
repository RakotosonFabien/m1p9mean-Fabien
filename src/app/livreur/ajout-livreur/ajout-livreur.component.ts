import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-ajout-livreur',
  templateUrl: './ajout-livreur.component.html',
  styleUrls: ['./ajout-livreur.component.css']
})
export class AjoutLivreurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
  }
  ajoutLivreur(data: any) {
    this.utilisateurService.insertLivreur(data)
    this.router.navigate(['/ajout-livreur'])
  }
}
