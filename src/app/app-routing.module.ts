import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutPlatComponent } from './ajout-plat/ajout-plat.component';
import { AjoutRestoComponent } from './ajout-resto/ajout-resto.component';
import { BeneficeRestoComponent } from './benefice-resto/benefice-resto.component';
import { BeneficeTotalComponent } from './benefice-total/benefice-total.component';
import { CommandeEkalyComponent } from './commande-ekaly/commande-ekaly.component';
import { CommandeEnCoursComponent } from './commande-en-cours/commande-en-cours.component';
import { FichePlatVaovaoComponent } from './fiche-plat-vaovao/fiche-plat-vaovao.component';
import { IndexClientComponent } from './index-client/index-client.component';
import { IndexEkalyComponent } from './index-ekaly/index-ekaly.component';
import { IndexLivreurComponent } from './index-livreur/index-livreur.component';
import { IndexRestoComponent } from './index-resto/index-resto.component';
import { IndexRoutingComponent } from './index-routing/index-routing.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListePlatComponent } from './liste-plat/liste-plat.component';
import { ListeRestoComponent } from './liste-resto/liste-resto.component';
import { AjoutLivreurComponent } from './livreur/ajout-livreur/ajout-livreur.component';
import { ListeLivreurComponent } from './livreur/liste-livreur/liste-livreur.component';
import { LoginComponent } from './login/login.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';

const routes: Routes = [
  {
    path: '', component: IndexRoutingComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inscription', component: InscriptionComponent
  },
  {
    path: 'index-client', component: IndexClientComponent
  },
  {
    path: 'index-resto', component: IndexRestoComponent
  },
  {
    path: 'index-ekaly', component: IndexEkalyComponent
  },
  {
    path: 'index-livreur', component: IndexLivreurComponent
  },
  {
    path: 'liste-resto', component: ListeRestoComponent
  },
  {
    path: 'nouveau-resto', component: AjoutRestoComponent
  },
  {
    path: 'liste-plat', component: ListePlatComponent
  },
  {
    path: 'ajout-plat', component: AjoutPlatComponent
  },
  {
    path: 'ajout-livreur', component: AjoutLivreurComponent
  },
  {
    path: 'liste-livreur', component: ListeLivreurComponent
  },
  {
    path: 'liste-plat-resto/:id_resto', component: ListePlatComponent
  },
  {
    path: 'fiche-plat/:id_resto/:id_plat', component: FichePlatVaovaoComponent
  },
  {
    path: 'commande-en-cours', component: CommandeEnCoursComponent
  },
  {
    path: 'benefice-resto', component: BeneficeRestoComponent
  },
  {
    path: 'mon-panier', component: MonPanierComponent
  },
  {
    path: 'benefice-total', component: BeneficeTotalComponent
  },
  {
    path: 'tous-les-commandes', component: CommandeEkalyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
