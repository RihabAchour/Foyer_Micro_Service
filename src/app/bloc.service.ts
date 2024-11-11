import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from './bloc.model';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://api/blocs'; 

  constructor(private http: HttpClient) {}

  
  getBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.apiUrl);
  }

  // Méthode pour récupérer un bloc spécifique par son ID
  getBlocById(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour créer un nouveau bloc
  createBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(this.apiUrl, bloc);
  }

  // Méthode pour mettre à jour un bloc existant
  updateBloc(id: number, bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/${id}`, bloc);
  }

  // Méthode pour supprimer un bloc
  deleteBloc(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
