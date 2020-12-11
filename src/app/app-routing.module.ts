import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';




const routes: Routes = [
  {path : '',redirectTo : 'dashboard', pathMatch : 'full'},
  {path : 'dashboard', component : StudentlistComponent},
  { path:"Edit/:id", component:EditStudentComponent }
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
