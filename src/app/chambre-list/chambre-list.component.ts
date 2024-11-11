import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChambreService } from '../chambre.service'; // Service pour interagir avec les chambres
import { Chambre } from '../chambre.model'; // Modèle de Chambre

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit {
  chambres: Chambre[] = []; // Liste des chambres

  constructor(
    private chambreService: ChambreService, // Service pour interagir avec le backend
    private router: Router                   // Pour la navigation
  ) {}

  ngOnInit(): void {
    this.loadChambres(); // Charger la liste des chambres au démarrage
  }

  loadChambres(): void {
    this.chambreService.getChambres().subscribe((data: Chambre[]) => {
      this.chambres = data;
    }, (error) => {
      console.error('Erreur lors du chargement des chambres:', error);
    });
  }

  redirectToCreateChambre(): void {
    this.router.navigate(['/chambre-create']); // Rediriger vers le formulaire de création
  }

  redirectToEdit(id: number): void {
    this.router.navigate([`/chambre-edit/${id}`]); // Rediriger vers le formulaire d'édition
  }

  supprimerChambre(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
      this.chambreService.deleteChambre(id).subscribe(
        () => {
          console.log('Chambre supprimée avec succès');
          this.loadChambres(); // Recharger la liste après la suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression de la chambre:', error);
        }
      );
    }
  }
}
