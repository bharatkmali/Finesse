import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { ManageCatagoriesComponent } from './home/manage-catagories/manage-catagories.component';
import { MangeExpencesComponent } from './home/mange-expences/mange-expences.component';
import { AllCategoryComponent } from './home/manage-catagories/all-category/all-category.component';
import { AddCatagoriesComponent } from './home/manage-catagories/add-catagories/add-catagories.component';
import { EditCategoryComponent } from './home/manage-catagories/edit-category/edit-category.component';
import { AllExpencesComponent } from './home/mange-expences/all-expences/all-expences.component';
import { AddExpencesComponent } from './home/mange-expences/add-expences/add-expences.component';
import { EditExpencesComponent } from './home/mange-expences/edit-expences/edit-expences.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent,children:[
    {path:'', component: SignUpComponent },
    {path:'sign-in', component: SignInComponent },
    {path:'reset-password', component: ResetPasswordComponent }
  ]},
  { path: 'Home', component: HomeComponent,children:[
    {path:'', component: DashboardComponent},
    {path:'expence-summary', component: ExpenceSummaryComponent },
    {path: 'manage-catagories', component: ManageCatagoriesComponent,children:[
        {path: '', component: AllCategoryComponent},
        {path:'add-catagories', component: AddCatagoriesComponent },
        {path:'edit-category/:id', component: EditCategoryComponent }
    ]},
    {path: 'mange-expences', component: MangeExpencesComponent,children:[
      {path: '', component: AllExpencesComponent},
        {path:'add-expences', component: AddExpencesComponent },
        {path:'edit-expences/:id', component: EditExpencesComponent }
    ]},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
