import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from '../bloc.service';
import { Bloc } from '../bloc.model';

@Component({
  selector: 'app-bloc-edit',
  templateUrl: './bloc-edit.component.html',
  styleUrls: ['./bloc-edit.component.css']
})
export class BlocEditComponent implements OnInit {
  blocForm!: FormGroup;
  blocId!: number;

  constructor(
    private fb: FormBuilder,
    private blocService: BlocService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec des validations
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      foyer: ['', Validators.required] // Assurez-vous que le champ est correct selon votre modèle
    });

    // Récupération de l'ID du bloc depuis l'URL
    this.blocId = +this.route.snapshot.paramMap.get('id')!;
    this.loadBlocDetails();
  }

  // Charger les détails du bloc pour remplir le formulaire
  loadBlocDetails(): void {
    this.blocService.getBlocById(this.blocId).subscribe(
      (bloc: Bloc) => {
        this.blocForm.patchValue(bloc); // Remplir le formulaire avec les détails du bloc
      },
      (error) => {
        console.error('Erreur lors du chargement des détails du bloc:', error);
      }
    );
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.blocForm.invalid) {
      return; // Ne rien faire si le formulaire est invalide
    }

    const updatedBloc: Bloc = {
      ...this.blocForm.value,
      idBloc: this.blocId // Ajouter l'ID du bloc
    };

    this.blocService.updateBloc(this.blocId, updatedBloc).subscribe(
      () => {
        console.log('Bloc mis à jour avec succès');
        this.router.navigate(['/blocs']); // Rediriger vers la liste des blocs après la mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du bloc:', error);
      }
    );
  }
}
