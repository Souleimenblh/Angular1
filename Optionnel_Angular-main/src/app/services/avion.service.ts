import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Avion } from '../model/avion.model';
import { TypeAv } from '../model/TypeAv.model';
import { TypeAvWrapper } from '../model/TypeAvWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  private apiURL: string = 'http://localhost:8090/avions/api';
  private apiURLTyp: string = 'http://localhost:8090/avions/typ';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private createAuthorizationHeader(): HttpHeaders {
    let jwt = this.authService.getToken();
    return new HttpHeaders({ Authorization: 'Bearer ' + jwt });
  }

  listeAvion(): Observable<Avion[]> {
    return this.http.get<Avion[]>(`${this.apiURL}/all`, { headers: this.createAuthorizationHeader() });
  }

  ajouterAvion(avion: Avion): Observable<Avion> {
    return this.http.post<Avion>(this.apiURL, avion, { headers: this.createAuthorizationHeader() });
  }

  supprimerAvion(id: number): Observable<void> {
    const url = `${this.apiURL}/delprod/${id}`;
    return this.http.delete<void>(url, { headers: this.createAuthorizationHeader() });
  }

  consulterAvion(id: number): Observable<Avion> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Avion>(url, { headers: this.createAuthorizationHeader() });
  }

  listeTypes(): Observable<TypeAvWrapper> {
    return this.http.get<TypeAvWrapper>(this.apiURLTyp, { headers: this.createAuthorizationHeader() });
  }

  updateAvion(avion: Avion): Observable<Avion> {
    return this.http.put<Avion>(`${this.apiURL}/updateprod`, avion, { headers: this.createAuthorizationHeader() });
  }

  rechercherParTypeAv(idAv: number): Observable<Avion[]> {
    const url = `${this.apiURL}/aviostyp/${idAv}`;
    return this.http.get<Avion[]>(url, { headers: this.createAuthorizationHeader() });
  }

  rechercherParMatricule(matricule: string): Observable<Avion[]> {
    const url = `${this.apiURL}/aviosByMatricule/${matricule}`;
    return this.http.get<Avion[]>(url, { headers: this.createAuthorizationHeader() });
  }

  ajouterTypeAv(typeAv: TypeAv): Observable<TypeAv> {
    return this.http.post<TypeAv>(this.apiURLTyp, typeAv, { headers: this.createAuthorizationHeader() });
  }
}
