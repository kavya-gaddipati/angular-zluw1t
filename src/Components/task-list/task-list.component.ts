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
    this.getTaskDataService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.tasks = JSON.parse(window.localStorage.getItem('tasks'));
    });
  }

  onComplete(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'Completed';
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    });
  }

  onStart(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'In Progress';
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    });
  }

  ngOnInit() {}
}
