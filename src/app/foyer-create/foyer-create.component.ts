import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from '../foyer.service'; // Assurez-vous que ce service est bien importé
import { Foyer } from '../foyer.model';  // Assurez-vous que le modèle est correctement défini
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foyer-create',
  templateUrl: './foyer-create.component.html',
  styleUrls: ['./foyer-create.component.css']
})
export class FoyerCreateComponent implements OnInit {
  foyerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,              // Pour la création du formulaire réactif
    private foyerService: FoyerService,    // Service pour interagir avec le backend
    private router: Router                // Pour rediriger après la soumission réussie
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire réactif
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required, Validators.minLength(3)]],
      capaciteFoyer: ['', [Validators.required, Validators.min(1)]],
      universiteId: ['', Validators.required], // ID de l'université
      blocs: ['']  // Optionnel, peut être ajusté selon la logique de ton application
    });
  }

  // Fonction pour soumettre le formulaire
  onSubmit(): void {
    if (this.foyerForm.invalid) {
      return; // Si le formulaire est invalide, on ne fait rien
    }

    const newFoyer: Foyer = this.foyerForm.value; // Récupérer les données du formulaire

    this.foyerService.createFoyer(newFoyer).subscribe({
      next: (response) => {
        console.log('Foyer créé avec succès!', response);
        this.router.navigate(['/foyers']);  // Rediriger vers la page des foyers
        this.foyerForm.reset();  // Réinitialiser le formulaire après la création
      },
      error: (error) => {
        console.error('Erreur lors de la création du foyer:', error);
      }
    });
  }
}
