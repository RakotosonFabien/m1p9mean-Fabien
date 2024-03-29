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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AjoutLivreurComponent } from './livreur/ajout-livreur/ajout-livreur.component';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { FichePlatVaovaoComponent } from './fiche-plat-vaovao/fiche-plat-vaovao.component';
import { CommandeEnCoursComponent } from './commande-en-cours/commande-en-cours.component';
import { BeneficeRestoComponent } from './benefice-resto/benefice-resto.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { BeneficeTotalComponent } from './benefice-total/benefice-total.component';
import { CommandeEkalyComponent } from './commande-ekaly/commande-ekaly.component';
import { MesAchatsComponent } from './mes-achats/mes-achats.component';


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
    AjoutPlatComponent,
    FooterComponent,
    HeaderComponent,
    AjoutLivreurComponent,
    ListeLivreurComponent,
    FichePlatVaovaoComponent,
    CommandeEnCoursComponent,
    BeneficeRestoComponent,
    MonPanierComponent,
    BeneficeTotalComponent,
    CommandeEkalyComponent,
    MesAchatsComponent
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
