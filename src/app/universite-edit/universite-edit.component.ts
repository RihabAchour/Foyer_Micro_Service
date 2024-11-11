import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversiteService } from '../universite.service';  // Service pour communiquer avec le backend
import { Universite } from '../universite.model';  // Modèle pour l'université
import { HttpErrorResponse } from '@angular/common/http'; // Importation pour la gestion des erreurs HTTP

@Component({
  selector: 'app-universite-edit',
  templateUrl: './universite-edit.component.html',
  styleUrls: ['./universite-edit.component.css']
})
export class UniversiteEditComponent implements OnInit {
  universiteForm!: FormGroup;
  universiteId!: number;
  errorMessage: string = ''; // Variable pour afficher les messages d'erreur

  constructor(
    private fb: FormBuilder,
    private universiteService: UniversiteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.universiteId = Number(this.route.snapshot.paramMap.get('id'));  // Récupère l'ID de l'URL
    this.loadUniversite();  // Charge les informations de l'université
    this.universiteForm = this.fb.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
      idFoyer: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  // Charger les informations de l'université existante
  loadUniversite(): void {
    this.universiteService.getUniversiteById(this.universiteId).subscribe({
      next: (universite) => {
        this.universiteForm.patchValue(universite);  // Remplir le formulaire avec les données récupérées
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur lors du chargement de l\'université', error);
        this.errorMessage = `Erreur lors du chargement de l'université: ${error.message}`; // Affiche un message d'erreur
      }
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.universiteForm.invalid) {
      return; // Si le formulaire est invalide, ne pas soumettre
    }

    const updatedUniversite: Universite = this.universiteForm.value;  // Récupère les données du formulaire

    this.universiteService.updateUniversite(this.universiteId, updatedUniversite).subscribe({
      next: (response) => {
        console.log('Université mise à jour avec succès', response);
        this.router.navigate(['/universites']); // Redirige vers la liste des universités après la mise à jour
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur lors de la mise à jour de l\'université', error);
        this.errorMessage = `Erreur lors de la mise à jour de l'université: ${error.message}`; // Affiche un message d'erreur
      }
    });
  }
}
