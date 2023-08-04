import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import taskData from '../mockdata/taskData.json';

@Injectable({
  providedIn: 'root',
})
export class GetTaskDataService {
  constructor() {
    localStorage.setItem('tasks', JSON.stringify(this.data));
  }
  data = taskData;

  getTasks() {
    //When working with actual data fetch task details using http GET call.

    return of(this.data);
  }
}
