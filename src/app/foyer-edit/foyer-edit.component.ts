import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from '../foyer.service';
import { Foyer } from '../foyer.model';

@Component({
  selector: 'app-foyer-edit',
  templateUrl: './foyer-edit.component.html',
  styleUrls: ['./foyer-edit.component.css']
})
export class FoyerEditComponent implements OnInit {
  foyerForm!: FormGroup;
  foyerId!: number;

  constructor(
    private fb: FormBuilder,               // Pour créer le formulaire réactif
    private foyerService: FoyerService,    // Service pour interagir avec le backend
    private route: ActivatedRoute,         // Pour récupérer l'ID depuis l'URL
    private router: Router                 // Pour rediriger après la soumission réussie
  ) {}

  ngOnInit(): void {
    this.foyerId = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID de l'URL

    // Initialiser le formulaire
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required, Validators.minLength(3)]],
      capaciteFoyer: ['', [Validators.required, Validators.min(1)]],
      universiteId: ['', Validators.required],
      blocs: ['']
    });

    // Charger les données du foyer
    this.foyerService.getFoyerById(this.foyerId).subscribe((foyer: Foyer) => {
      this.foyerForm.patchValue(foyer); // Remplir le formulaire avec les données existantes
    });
  }

  // Soumettre les modifications
  onSubmit(): void {
    if (this.foyerForm.invalid) {
      return; // Si le formulaire est invalide, ne rien faire
    }

    const updatedFoyer: Foyer = this.foyerForm.value;

    this.foyerService.updateFoyer(this.foyerId, updatedFoyer).subscribe({
      next: (response) => {
        console.log('Foyer mis à jour avec succès!', response);
        this.router.navigate(['/foyers']); // Rediriger vers la liste des foyers
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour du foyer:', error);
      }
    });
  }
}
