import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation.model';

@Component({
  selector: 'app-reclamation-create',
  templateUrl: './reclamation-create.component.html',
  styleUrls: ['./reclamation-create.component.css']
})
export class ReclamationCreateComponent implements OnInit {
  reclamationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire
    this.reclamationForm = this.fb.group({
      nomprenom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      dateCreation: [new Date().toISOString().split('T')[0], Validators.required] // Date actuelle
    });
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid) {
      return; // Ne pas soumettre si le formulaire est invalide
    }

    const newReclamation: Reclamation = this.reclamationForm.value; // Récupère les valeurs du formulaire

    // Appel au service pour créer une nouvelle réclamation
    this.reclamationService.createReclamation(newReclamation).subscribe({
      next: () => {
        console.log('Réclamation créée avec succès');
        this.router.navigate(['/reclamations']); // Redirection vers la liste des réclamations
      },
      error: (err) => {
        console.error('Erreur lors de la création de la réclamation :', err);
      }
    });
  }
}
