import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexClientComponent } from './index-client/index-client.component';
import { IndexEkalyComponent } from './index-ekaly/index-ekaly.component';
import { IndexLivreurComponent } from './index-livreur/index-livreur.component';
import { IndexRestoComponent } from './index-resto/index-resto.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeRestoComponent } from './liste-resto/liste-resto.component';
import { LoginComponent } from './login/login.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'quotes', component: QuoteComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
