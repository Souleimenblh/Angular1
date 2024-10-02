import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { FormsModule } from '@angular/forms';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParTypeAvComponent } from './recherche-par-type-av/recherche-par-type-av.component';
import { RechercheParMatriculeComponent } from './recherche-par-matricule/recherche-par-matricule.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    AvionsComponent,
    AddAvionComponent,
    UpdateAvionComponent,
    RechercheParTypeAvComponent,
    RechercheParMatriculeComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
