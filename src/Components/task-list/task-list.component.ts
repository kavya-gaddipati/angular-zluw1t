import {
  Component,
  OnInit,
  ɵbypassSanitizationTrustScript,
} from '@angular/core';
import { Tasks } from '../../model/task';
import { GetTaskDataService } from '../../services/get-task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any;
  options = ['All', 'Open', 'In Progress', 'Closed'];
  statusSelected = 'All';
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
        localStorage.setItem('allTasks', JSON.stringify(this.tasks));
      }
    });
  }

  onStart(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'In Progress';
        localStorage.setItem('allTasks', JSON.stringify(this.tasks));
      }
    });
  }

  ngOnInit() {
    this.tasks = localStorage.getItem('allTasks')
      ? JSON.parse(localStorage.getItem('allTasks'))
      : [];
  }

  onFilterChange(status) {
    if (status != null && status != undefined && status != 'All') {
      let totaldata = localStorage.getItem('allTasks')
        ? JSON.parse(localStorage.getItem('allTasks'))
        : [];
      let data = totaldata.filter((task) => task.status == status);
      this.tasks = data;
    } else if (status == 'All' || status == null || status == undefined) {
      this.tasks = localStorage.getItem('allTasks')
        ? JSON.parse(localStorage.getItem('allTasks'))
        : [];
    }
  }
}
