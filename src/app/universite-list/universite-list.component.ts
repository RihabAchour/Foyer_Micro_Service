import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../universite.service';
import { Universite } from '../universite.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[] = [];
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private universiteService: UniversiteService, private router: Router) { }

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites(): void {
    this.universiteService.getAllUniversites().subscribe({
      next: (data) => {
        this.universites = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des universités.';
        this.loading = false;
      }
    });
  }

  redirectToCreateUniversite(): void {
    this.router.navigate(['/universite-create']);
  }

  redirectToEditUniversite(id: number): void {
    this.router.navigate([`/universite-edit/${id}`]);
  }

  deleteUniversite(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette université ?')) {
      this.universiteService.deleteUniversite(id).subscribe({
        next: () => this.loadUniversites(),
        error: (error) => {
          this.errorMessage = 'Erreur lors de la suppression de l\'université.';
        }
      });
    }
  }
}
