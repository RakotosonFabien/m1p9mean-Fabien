import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { IndexRestoComponent } from './index-resto/index-resto.component';
import { IndexClientComponent } from './index-client/index-client.component';
import { IndexEkalyComponent } from './index-ekaly/index-ekaly.component';
import { IndexLivreurComponent } from './index-livreur/index-livreur.component';
import { ListeRestoComponent } from './liste-resto/liste-resto.component';
import { AjoutRestoComponent } from './ajout-resto/ajout-resto.component';
import { ListePlatComponent } from './liste-plat/liste-plat.component';
import { IndexRoutingComponent } from './index-routing/index-routing.component';
import { AjoutPlatComponent } from './ajout-plat/ajout-plat.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LoginComponent,
    InscriptionComponent,
    IndexRestoComponent,
    IndexClientComponent,
    IndexEkalyComponent,
    IndexLivreurComponent,
    ListeRestoComponent,
    AjoutRestoComponent,
    ListePlatComponent,
    IndexRoutingComponent,
    AjoutPlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
