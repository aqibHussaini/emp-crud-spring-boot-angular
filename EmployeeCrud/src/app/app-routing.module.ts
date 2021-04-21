import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpFormComponent} from './emp-form/emp-form.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path: 'app-emp-form', // child route path
    component: EmpFormComponent, // child route component that the router renders
  },
  {
    path: 'app-employee-list', // child route path
    component: EmployeeListComponent, // child route component that the router renders
  },
  {
    path: 'app-update-employee/:id', // child route path
    component: UpdateEmployeeComponent, // child route component that the router renders
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
