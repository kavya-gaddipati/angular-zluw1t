import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../model/task';
import { GetTaskDataService } from '../../services/get-task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any;
  constructor(private getTaskDataService: GetTaskDataService) {
    //Use when fetching data using http get call
    // this.getTaskDataService.getTasks().subscribe((data) => {
    //   this.tasks = data;
    // });
  }

  onComplete(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'Closed';
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        console.log(this.tasks);
      }
    });
  }

  onStart(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'In Progress';
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    });
  }

  ngOnInit() {
    this.tasks = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }
}
