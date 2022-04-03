import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-ajout-resto',
  templateUrl: './ajout-resto.component.html',
  styleUrls: ['./ajout-resto.component.css']
})
export class AjoutRestoComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
  }
  ajoutResto(data: any) {
    this.utilisateurService.insertResto(data)
    this.router.navigate(['/liste-resto'])
  }
}
