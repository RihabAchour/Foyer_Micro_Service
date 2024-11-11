import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { FoyerCreateComponent } from './foyer-create/foyer-create.component';
import { FoyerEditComponent } from './foyer-edit/foyer-edit.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { ChambreCreateComponent } from './chambre-create/chambre-create.component';
import { ChambreEditComponent } from './chambre-edit/chambre-edit.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { BlocCreateComponent } from './bloc-create/bloc-create.component';
import { BlocEditComponent } from './bloc-edit/bloc-edit.component';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { UniversiteCreateComponent } from './universite-create/universite-create.component';
import { UniversiteEditComponent } from './universite-edit/universite-edit.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { ReclamationCreateComponent } from './reclamation-create/reclamation-create.component';
import { ReclamationEditComponent } from './reclamation-edit/reclamation-edit.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';



const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path :'foyer-create',component:FoyerCreateComponent},
    {path :'foyer-edit/:id',component:FoyerEditComponent},
    {path :'foyers',component:FoyerListComponent},
    {path :'chambre-create',component:ChambreCreateComponent},
    {path :'chambre-edit/:id',component:ChambreEditComponent},
    {path :'chambres',component:ChambreListComponent},
    {path :'bloc-create',component:BlocCreateComponent},
    {path :'bloc-edit/:id',component:BlocEditComponent},
    {path :'blocs',component:BlocListComponent},
    {path :'universite-create',component:UniversiteCreateComponent},
    {path :'universite-edit/:id',component:UniversiteEditComponent},
    {path :'universites',component:UniversiteListComponent},
    {path :'reclamation-create',component:ReclamationCreateComponent},
    {path :'reclamation-edit/:id',component:ReclamationEditComponent},
    {path :'reclamations',component:ReclamationListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
