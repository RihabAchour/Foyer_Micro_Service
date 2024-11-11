import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from './universite.model'; // Modèle pour l'université

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://localhost:4000/universites';  // URL de l'API

  constructor(private http: HttpClient) { }

  // Récupérer une université par son ID
  getUniversiteById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle université
  createUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(this.apiUrl, universite);
  }

  // Mettre à jour une université existante
  updateUniversite(id: number, universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/${id}`, universite);
  }

  // Supprimer une université
  deleteUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Récupérer la liste de toutes les universités
  getAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(this.apiUrl);
  }
}
