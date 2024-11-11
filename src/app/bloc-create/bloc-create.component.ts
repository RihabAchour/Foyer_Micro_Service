import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from '../bloc.service';
import { Bloc } from '../bloc.model';

@Component({
  selector: 'app-bloc-create',
  templateUrl: './bloc-create.component.html',
  styleUrls: ['./bloc-create.component.css']
})
export class BlocCreateComponent implements OnInit {
  blocForm: FormGroup;

  constructor(
    private fb: FormBuilder,           // Pour créer le formulaire
    private blocService: BlocService,  // Service pour interagir avec le backend
    private router: Router             // Pour la navigation
  ) {
    // Initialisation du formulaire
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [0, [Validators.required, Validators.min(1)]],
      foyerId: [0, Validators.required]
    });
  }

  ngOnInit(): void {}

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.blocForm.valid) {
      const newBloc: Bloc = this.blocForm.value;
      this.blocService.createBloc(newBloc).subscribe(
        () => {
          console.log('Bloc créé avec succès');
          this.router.navigate(['/bloc-list']); // Rediriger vers la liste des blocs
        },
        (error) => {
          console.error('Erreur lors de la création du bloc:', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}
