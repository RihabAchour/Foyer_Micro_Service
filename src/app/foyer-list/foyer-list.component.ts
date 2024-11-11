import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoyerService } from '../foyer.service';
import { Foyer } from '../foyer.model';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent implements OnInit {
  foyers: Foyer[] = [];
  
  constructor(
    private foyerService: FoyerService, // Service pour interagir avec le backend
    private router: Router               // Pour la navigation
  ) {}

  ngOnInit(): void {
    this.loadFoyers(); // Charger la liste des foyers au démarrage
  }

  loadFoyers(): void {
    this.foyerService.getFoyers().subscribe((data: Foyer[]) => {
      this.foyers = data;
    }, (error) => {
      console.error('Erreur lors du chargement des foyers:', error);
    });
  }

  redirectToCreateFoyer(): void {
    this.router.navigate(['/foyer-create']); // Rediriger vers le formulaire de création
  }

  redirectToEdit(id: number): void {
    this.router.navigate([`/foyer-edit/${id}`]); // Rediriger vers le formulaire d'édition
  }

  supprimerFoyer(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce foyer ?')) {
      this.foyerService.deleteFoyer(id).subscribe(
        () => {
          console.log('Foyer supprimé avec succès');
          this.loadFoyers(); // Recharger la liste après la suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du foyer:', error);
        }
      );
    }
  }
}


  

