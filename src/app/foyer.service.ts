import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from './foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://ton-backend-api/foyers';  // Remplace par l'URL de ton API backend

  constructor(private http: HttpClient) {}

  // Créer un foyer
  createFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(this.apiUrl, foyer);
  }

  // Obtenir la liste des foyers (si nécessaire)
  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.apiUrl);
  }

  // Obtenir un foyer par ID (si nécessaire)
  getFoyerById(id: number) {
    return this.http.get<Foyer>(`/api/foyers/${id}`);
  }
  
  updateFoyer(id: number, foyer: Foyer) {
    return this.http.put(`/api/foyers/${id}`, foyer);
  }

  // Supprimer un foyer (si nécessaire)
  deleteFoyer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
