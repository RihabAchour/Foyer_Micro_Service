import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlocService } from '../bloc.service';
import { Bloc } from '../bloc.model';

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent implements OnInit {
  blocs: Bloc[] = [];

  constructor(
    private blocService: BlocService, // Service pour interagir avec l'API
    private router: Router             // Pour la navigation
  ) {}

  ngOnInit(): void {
    this.loadBlocs(); // Charger la liste des blocs au démarrage
  }

  loadBlocs(): void {
    this.blocService.getBlocs().subscribe(
      (data: Bloc[]) => {
        this.blocs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des blocs:', error);
      }
    );
  }

  redirectToCreateBloc(): void {
    this.router.navigate(['/bloc-create']); // Rediriger vers le formulaire de création
  }

  redirectToEditBloc(id: number): void {
    this.router.navigate([`/bloc-edit/${id}`]); // Rediriger vers le formulaire d'édition
  }

  deleteBloc(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?')) {
      this.blocService.deleteBloc(id).subscribe(
        () => {
          console.log('Bloc supprimé avec succès');
          this.loadBlocs(); // Recharger la liste après la suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du bloc:', error);
        }
      );
    }
  }
}
