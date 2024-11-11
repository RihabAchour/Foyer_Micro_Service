import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from './chambre.model';  // Import de l'interface Chambre


@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiUrl = '/api/chambres';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les chambres
  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.apiUrl);
  }

  // Méthode pour créer une chambre
  createChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apiUrl, chambre);
  }
  // chambre.service.ts

getChambreById(id: number): Observable<Chambre> {
  return this.http.get<Chambre>(`${this.apiUrl}/${id}`);
}

updateChambre(id: number, chambre: Chambre): Observable<Chambre> {
  return this.http.put<Chambre>(`${this.apiUrl}/${id}`, chambre);
}

 // Supprimer une chambre
 deleteChambre(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

}
