import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { RechercheParTypeAvComponent } from './recherche-par-type-av/recherche-par-type-av.component';
import { RechercheParMatriculeComponent } from './recherche-par-matricule/recherche-par-matricule.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AvionGuard } from './avion.guard';

const routes: Routes = [
  
  { path: 'avions', component: AvionsComponent },
  { path: 'add-avion', component: AddAvionComponent , canActivate: [AvionGuard]},
  { path: 'updateAvion/:id', component: UpdateAvionComponent },
  { path: 'rechercheParTypeAv', component: RechercheParTypeAvComponent },
  { path: 'rechercheParMatricule', component: RechercheParMatriculeComponent },
  { path: 'listeTypes', component: ListeTypesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'avions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
