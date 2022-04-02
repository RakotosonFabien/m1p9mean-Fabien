import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {
    path: 'quotes', component: QuoteComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inscription', component: InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
