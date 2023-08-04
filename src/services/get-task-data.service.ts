import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import taskData from '../mockdata/taskData.json';

@Injectable({
  providedIn: 'root',
})
export class GetTaskDataService {
  constructor() {}
  data = taskData;

  getTasks() {
    //When working with actual data fetch it using http GET call.
    window.localStorage.setItem('tasks', JSON.stringify(this.data));
    return of(this.data);
  }
}
