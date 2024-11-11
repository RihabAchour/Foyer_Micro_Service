import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from '../chambre.service';
import { Chambre } from '../chambre.model';

@Component({
  selector: 'app-chambre-edit',
  templateUrl: './chambre-edit.component.html',
  styleUrls: ['./chambre-edit.component.css']
})
export class ChambreEditComponent implements OnInit {
  chambreForm!: FormGroup;
  chambreId!: number;

  constructor(
    private fb: FormBuilder,
    private chambreService: ChambreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID de la chambre depuis l'URL
    this.chambreId = Number(this.route.snapshot.paramMap.get('id'));

    // Initialiser le formulaire
    this.chambreForm = this.fb.group({
      numeroChambre: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      typeC: ['', Validators.required],
      blocId: ['', Validators.required],
      reservations: ['', Validators.required]
    });

    // Charger les données existantes de la chambre
    this.chambreService.getChambreById(this.chambreId).subscribe({
      next: (chambre) => {
        this.chambreForm.patchValue({
          numeroChambre: chambre.numeroChambre,
          typeC: chambre.typeC,
          blocId: chambre.blocId,
          reservations: chambre.reservations ? 'reserver' : 'non-reserver' // Adapter à votre modèle
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement de la chambre', err);
      }
    });
  }

  // chambre-edit.component.ts

onSubmit(): void {
  if (this.chambreForm.invalid) {
    return;
  }

  const updatedChambre: Chambre = this.chambreForm.value;

  // Soumettre la requête de mise à jour
  this.chambreService.updateChambre(this.chambreId, updatedChambre).subscribe({
    next: (response) => {
      console.log('Chambre mise à jour avec succès');
      this.router.navigate(['/chambres']);  // Rediriger vers la liste des chambres après la mise à jour
    },
    error: (error) => {
      console.error('Erreur lors de la mise à jour de la chambre', error);
    }
  });
}




}
