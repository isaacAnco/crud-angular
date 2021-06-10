import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'create', component: CreateEmployeeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
