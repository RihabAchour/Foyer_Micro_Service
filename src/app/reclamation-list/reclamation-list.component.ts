import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations: Reclamation[] = []; // Tableau pour stocker les réclamations
  errorMessage: string = ''; // Pour gérer les erreurs

  constructor(private reclamationService: ReclamationService ,
    private router: Router) { }

  ngOnInit(): void {
    this.getReclamations(); // Charger les réclamations à l'initialisation
  }

  // Récupérer la liste des réclamations depuis le service
  getReclamations(): void {
    this.reclamationService.getReclamations().subscribe({
      next: (data: Reclamation[]) => {
        this.reclamations = data; // Stocke les réclamations dans le tableau
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des réclamations'; // Message d'erreur
        console.error(err); // Affiche l'erreur dans la console
      }
    });
  }

 // Méthode pour rediriger vers la page de création d'une nouvelle réclamation
 redirectToCreateReclamation(): void {
  this.router.navigate(['/reclamation-create']);  // Redirection vers la page de création
}

  // Supprimer une réclamation
  deleteReclamation(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réclamation ?')) {
      this.reclamationService.deleteReclamation(id).subscribe({
        next: () => {
          this.getReclamations(); // Récupérer à nouveau la liste après suppression
          this.router.navigate(['/reclamations']);
          console.log('Réclamation supprimée');
        }
      });
    }
  }
}
