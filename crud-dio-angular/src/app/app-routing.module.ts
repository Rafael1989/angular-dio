import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoComponent } from './pages/todo/todo.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: UsersListComponent
  },
  {
    path: 'form', component: UsersFormComponent
  },
  {
    path: 'form/:id', component: UsersFormComponent
  },
  {
    path: 'todo', component: TodoListComponent
  },
  {
    path: 'data-binding', component: DataBindingComponent
  },
  {
    path: 'pipes', component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
