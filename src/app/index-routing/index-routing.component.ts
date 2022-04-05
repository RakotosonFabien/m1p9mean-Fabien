import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { type_user } from '../../environments/environment';
import { ErrorService } from '../services/error.service';
import { ToolsService } from '../services/tools.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-index-routing',
  templateUrl: './index-routing.component.html',
  styleUrls: ['./index-routing.component.css']
})
export class IndexRoutingComponent implements OnInit {
  user: any
  constructor(private http: HttpClient, private toolsService: ToolsService, private router: Router, private utilisateurService: UtilisateurService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.indexRouting()
  }
  indexRouting() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.user = response['data'][0]
        if (this.user != null) {
          switch (this.user.id_type_u) {
            case type_user.user_client:
              this.router.navigateByUrl('index-client')
              break
            case type_user.user_ekaly:
              this.router.navigateByUrl('index-ekaly')
              break
            case type_user.user_livreur:
              this.router.navigateByUrl('index-livreur')
              break
            case type_user.user_resto:
              this.router.navigateByUrl('index-resto')
              break
            default:
              this.router.navigateByUrl('login')
              break
          }
        }
        else {
          this.router.navigateByUrl('login')
        }
      }
      else {
        this.errorService.displayErrorData(response)
      }
    }
    const onError = (response: any) => {
      this.errorService.displayError(response)
    }
    this.utilisateurService.getUserFromToken().subscribe(onSuccess, onError)
  }

}
