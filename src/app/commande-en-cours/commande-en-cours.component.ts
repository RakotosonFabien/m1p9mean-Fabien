import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }
  livrer_click() {
    $("#book").slideDown("slow", function () {
      // Animation complete.
    });
  }
}
