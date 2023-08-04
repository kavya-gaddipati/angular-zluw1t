import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../Components/add-task/add-task.component';
import { TaskListComponent } from '../Components/task-list/task-list.component';

const appRoutes: Routes = [
  { path: 'taskList', component: TaskListComponent },
  { path: 'addTask', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
