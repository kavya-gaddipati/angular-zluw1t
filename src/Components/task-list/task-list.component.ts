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
  filteredTasks: any;
  options = ['All', 'Open', 'In Progress', 'Closed'];
  statusSelected = 'All';
  constructor(private getTaskDataService: GetTaskDataService) {
    this.tasks = localStorage.getItem('allTasks')
      ? JSON.parse(localStorage.getItem('allTasks'))
      : [];
    this.filteredTasks = this.tasks;
    //Use when fetching data using http get call
    // this.getTaskDataService.getTasks().subscribe((data) => {
    //   if (data != null) {
    //     this.tasks = data;
    //   }
    // });
  }

  onComplete(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'Closed';
        localStorage.setItem('allTasks', JSON.stringify(this.tasks));
      }
    });
    this.onFilterChange(this.statusSelected);
  }

  onStart(id) {
    this.tasks.forEach((task) => {
      if (task.id == id) {
        task.status = 'In Progress';
        localStorage.setItem('allTasks', JSON.stringify(this.tasks));
      }
    });
    this.onFilterChange(this.statusSelected);
  }

  ngOnInit() {
    this.tasks = localStorage.getItem('allTasks')
      ? JSON.parse(localStorage.getItem('allTasks'))
      : [];
    this.filteredTasks = this.tasks;
  }

  onFilterChange(status) {
    if (status != null && status != undefined && status != 'All') {
      let totaldata = localStorage.getItem('allTasks')
        ? JSON.parse(localStorage.getItem('allTasks'))
        : [];
      let data = totaldata.filter((task) => task.status == status);
      this.filteredTasks = data;
    } else if (status == 'All' || status == null || status == undefined) {
      this.filteredTasks = localStorage.getItem('allTasks')
        ? JSON.parse(localStorage.getItem('allTasks'))
        : [];
    }
  }
}
