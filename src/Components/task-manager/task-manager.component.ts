import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../model/task';
import { GetTaskDataService } from '../../services/get-task-data.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
