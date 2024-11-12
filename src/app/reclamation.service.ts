  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Reclamation } from './reclamation.model';

  @Injectable({
    providedIn: 'root'
  })
  export class ReclamationService {
    private apiUrl = 'http://localhost:8085/api/reclamations'; 

    constructor(private http: HttpClient) { }

    // Créer une nouvelle réclamation
    createReclamation(reclamation: Reclamation): Observable<Reclamation> {
      return this.http.post<Reclamation>(this.apiUrl, reclamation);
    }

    // Récupérer toutes les réclamations
    getReclamations(): Observable<Reclamation[]> {
      return this.http.get<Reclamation[]>(this.apiUrl);
    }

    // Récupérer une réclamation par ID
    getReclamationById(id: number): Observable<Reclamation> {
      return this.http.get<Reclamation>(`${this.apiUrl}/${id}`);
    }

    // Mettre à jour une réclamation existante
    updateReclamation(id: number, reclamation: Reclamation): Observable<Reclamation> {
      return this.http.put<Reclamation>(`${this.apiUrl}/${id}`, reclamation);
    }

    // Supprimer une réclamation
    deleteReclamation(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  }
