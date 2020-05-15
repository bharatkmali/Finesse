import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms'

import { AuthComponent } from './auth/auth.component';
import { AuthheaderComponent } from './shared/authheader/authheader.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { ManageCatagoriesComponent } from './home/manage-catagories/manage-catagories.component';
import { MangeExpencesComponent } from './home/mange-expences/mange-expences.component';
import { AddCatagoriesComponent } from './home/manage-catagories/add-catagories/add-catagories.component';
import { EditCategoryComponent } from './home/manage-catagories/edit-category/edit-category.component';
import { AllCategoryComponent } from './home/manage-catagories/all-category/all-category.component';
import { AddExpencesComponent } from './home/mange-expences/add-expences/add-expences.component';
import { EditExpencesComponent } from './home/mange-expences/edit-expences/edit-expences.component';
import { AllExpencesComponent } from './home/mange-expences/all-expences/all-expences.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AuthService } from 'src/service/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';



  
@NgModule({
  declarations: [
    AppComponent,
    
    ResetPasswordComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    AuthComponent,
    AuthheaderComponent,
    HomeComponent,
    DashboardComponent,
    ExpenceSummaryComponent,
    ManageCatagoriesComponent,
    MangeExpencesComponent,
    AddCatagoriesComponent,
    EditCategoryComponent,
    AllCategoryComponent,
    AddExpencesComponent,
    EditExpencesComponent,
    AllExpencesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    CarouselModule.forRoot(),
    

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
