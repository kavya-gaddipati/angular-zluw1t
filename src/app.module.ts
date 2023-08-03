import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TaskManagerComponent } from './Components/task-manager/task-manager.component';
import { GetTaskDataService } from './services/get-task-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [TaskManagerComponent],
  providers: [GetTaskDataService],
  bootstrap: [TaskManagerComponent],
})
export class AppModule {}
