import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TaskManagerComponent } from './Components/task-manager/task-manager.component';
import { GetTaskDataService } from './services/get-task-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router/app-router.module';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { TaskListComponent } from './Components/task-list/task-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
  ],
  declarations: [TaskManagerComponent, AddTaskComponent, TaskListComponent],
  providers: [GetTaskDataService],
  bootstrap: [TaskManagerComponent],
})
export class AppModule {}
