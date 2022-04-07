import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { PlatService } from '../services/plat.service';
import { UtilisateurService } from '../services/utilisateur.service';
//import {  Subscriber } from 'rxjs-compat';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-ajout-plat',
  templateUrl: './ajout-plat.component.html',
  styleUrls: ['./ajout-plat.component.css']
}) 
export class AjoutPlatComponent implements OnInit {
  cat_plat: any
  myImage : any
  constructor(private platService: PlatService, private errorService: ErrorService, private router: Router, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getCategoriesPlat()
  }
  getCategoriesPlat() {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        this.cat_plat = response['data']
      } else {
        this.errorService.displayErrorData(response)
      }
    }
    const onError = (response: any) => {
      this.errorService.displayError(response)
    }
    this.platService.getCategoriesPlat().subscribe(onSuccess, onError)
  }
  ajoutPlat(data: any) {
    const onSuccess = (response: any) => {
      if (response['meta']['status'] == 200) {
        data['id_user'] = response['data'][0]['_id']
        data['image'] = this.myImage
        this.platService.insertPlat(data)
        this.router.navigateByUrl('liste-plat')
      } else {
        // status 400
        console.warn(response)
      }
    }
    const onError = (response: any) => {
      console.log("err");
    }
    var user = this.utilisateurService.getUserFromToken().subscribe(onSuccess, onError)
  }
  imageChanged($event: Event) {
    var target = $event.target as HTMLInputElement
    const file = target.files![0]
    const onSuccess = (response: any) => {
      console.log('RESPONSE ==> ' + response)
      this.myImage = response
    }
    const onError = (response: any) => {
      console.log("err")
    }
    this.convertToBase64(file).subscribe(onSuccess, onError)
  }
  convertToBase64(file: File) {
    var observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d: any) => {
      return d
    }
    )
    return observable
    //this.myImage = new Observable((subscriber: Subscriber<any>) => {
    //  this.readFile(file, subscriber)
    //})
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    };
    fileReader.onerror = (error) => {
      subscriber.error(error)
      subscriber.complete()
    }
  }
}
