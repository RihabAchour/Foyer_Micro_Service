// chambre-create.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from '../chambre.service';  // Assurez-vous que le service est bien importé
import { Chambre } from '../chambre.model';  // Assurez-vous que votre modèle est bien importé
import { Router } from '@angular/router';

@Component({
  selector: 'app-chambre-create',
  templateUrl: './chambre-create.component.html',
  styleUrls: ['./chambre-create.component.css']
})
export class ChambreCreateComponent implements OnInit {
  chambreForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private chambreService: ChambreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec des validations
    this.chambreForm = this.fb.group({
      numeroChambre: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      typeC: ['', Validators.required],
      reservations: ['', Validators.required]
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.chambreForm.invalid) {
      return; // Si le formulaire est invalide, on ne soumet pas
    }

    const newChambre: Chambre = this.chambreForm.value;  // Récupère les données du formulaire

    this.chambreService.createChambre(newChambre).subscribe({
      next: (response) => {
        console.log('Chambre créée avec succès', response);
        this.router.navigate(['/chambres']); // Redirige vers la liste des chambres après la création
        this.chambreForm.reset(); // Réinitialiser le formulaire après la soumission
      },
      error: (error) => {
        console.error('Erreur lors de la création de la chambre', error);
      }
    });
  }
}
