import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation.model';

@Component({
  selector: 'app-reclamation-edit',
  templateUrl: './reclamation-edit.component.html',
  styleUrls: ['./reclamation-edit.component.css']
})
export class ReclamationEditComponent implements OnInit {
  reclamationForm!: FormGroup;
  reclamationId!: number;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID de la réclamation à partir des paramètres d'URL
    this.reclamationId = +this.route.snapshot.paramMap.get('id')!;

    // Initialisation du formulaire
    this.reclamationForm = this.fb.group({
      nomprenom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      dateCreation: ['', Validators.required]
    });

    // Charger les données de la réclamation à modifier
    this.loadReclamationData();
  }

  // Charger les données de la réclamation à partir du service
  loadReclamationData(): void {
    this.reclamationService.getReclamationById(this.reclamationId).subscribe({
      next: (data: Reclamation) => {
        // Pré-remplir le formulaire avec les données existantes
        this.reclamationForm.patchValue(data);
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la réclamation :', err);
      }
    });
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid) {
      return; // Ne pas soumettre si le formulaire est invalide
    }

    const updatedReclamation: Reclamation = this.reclamationForm.value;

    // Appel au service pour mettre à jour la réclamation
    this.reclamationService.updateReclamation(this.reclamationId, updatedReclamation).subscribe({
      next: () => {
        console.log('Réclamation mise à jour avec succès');
        this.router.navigate(['/reclamations']); // Redirection vers la liste des réclamations
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de la réclamation :', err);
      }
    });
  }
}
