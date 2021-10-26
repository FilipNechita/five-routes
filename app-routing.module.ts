import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DepartmentComponent } from './department/department.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'product', component:ProductComponent},
  {path: 'client', component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentComponent,EmployeeComponent,DetailsComponent,ProductComponent,ClientComponent]