import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-ajout-resto',
  templateUrl: './ajout-resto.component.html',
  styleUrls: ['./ajout-resto.component.css']
})
export class AjoutRestoComponent implements OnInit {
  myImage : any
  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
  }
  ajoutResto(data: any) {
    this.utilisateurService.insertResto(data)
    this.router.navigate(['/liste-resto'])
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
