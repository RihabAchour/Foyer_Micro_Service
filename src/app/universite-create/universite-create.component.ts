import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniversiteService } from '../universite.service';  // Service pour communiquer avec le backend
import { Router } from '@angular/router';
import { Universite } from '../universite.model';  // Modèle pour l'université

@Component({
  selector: 'app-universite-create',
  templateUrl: './universite-create.component.html',
  styleUrls: ['./universite-create.component.css']
})
export class UniversiteCreateComponent implements OnInit {
  universiteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private universiteService: UniversiteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec des validations
    this.universiteForm = this.fb.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
      idFoyer: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.universiteForm.invalid) {
      return; // Si le formulaire est invalide, ne pas soumettre
    }

    const newUniversite: Universite = this.universiteForm.value;  // Récupère les données du formulaire

    this.universiteService.createUniversite(newUniversite).subscribe({
      next: (response) => {
        console.log('Université créée avec succès', response);
        this.router.navigate(['/universites']); // Redirige vers la liste des universités après la création
        this.universiteForm.reset(); // Réinitialise le formulaire après la soumission
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'université', error);
      }
    });
  }
}
