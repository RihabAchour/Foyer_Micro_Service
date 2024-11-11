import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './backoffice/header/header.component';
import { SidebarComponent } from './backoffice/sidebar/sidebar.component';
import { FooterComponent } from './backoffice/footer/footer.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FoyerCreateComponent } from './foyer-create/foyer-create.component';
import { FoyerEditComponent } from './foyer-edit/foyer-edit.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ChambreCreateComponent } from './chambre-create/chambre-create.component';
import { ChambreEditComponent } from './chambre-edit/chambre-edit.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocCreateComponent } from './bloc-create/bloc-create.component';
import { BlocEditComponent } from './bloc-edit/bloc-edit.component';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { UniversiteComponent } from './universite/universite.component';
import { UniversiteCreateComponent } from './universite-create/universite-create.component';
import { UniversiteEditComponent } from './universite-edit/universite-edit.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReclamationCreateComponent } from './reclamation-create/reclamation-create.component';
import { ReclamationEditComponent } from './reclamation-edit/reclamation-edit.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FoyerComponent,
    FoyerCreateComponent,
    FoyerEditComponent,
    FoyerListComponent,
    ChambreComponent,
    ChambreCreateComponent,
    ChambreEditComponent,
    ChambreListComponent,
    BlocComponent,
    BlocCreateComponent,
    BlocEditComponent,
    BlocListComponent,
    UniversiteComponent,
    UniversiteCreateComponent,
    UniversiteEditComponent,
    UniversiteListComponent,
    ReclamationComponent,
    ReclamationCreateComponent,
    ReclamationEditComponent,
    ReclamationListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
