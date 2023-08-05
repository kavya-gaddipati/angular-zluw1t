import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tasks } from '../../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  options = ['Low', 'Medium', 'High', 'Critical'];
  submitted: boolean = false;
  // priority = 'Low';
  tasks: any;
  showMessage: boolean = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tasks = localStorage.getItem('allTasks')
      ? JSON.parse(localStorage.getItem('allTasks'))
      : [];
    this.tasks.sort(function (a, b) {
      return a.id - b.id;
    });
    // sorting the tasks based on ID to find the last ID value
    this.setForm();
  }

  setForm() {
    this.addTaskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      assignedTo: ['', Validators.required],
      priority: ['Low', Validators.required],
    });
  }

  onSubmit(form) {
    this.submitted = true;
    if (this.addTaskForm.invalid) {
      return;
    }
    let id = this.tasks[this.tasks.length - 1].id;
    let task = new Tasks();
    task.id = id + 1;
    task.taskName = form.taskName;
    task.assignedTo = form.assignedTo;
    task.priority = form.priority;
    task.status = 'Open';
    this.tasks.push(task);
    localStorage.setItem('allTasks', JSON.stringify(this.tasks));
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
    this.addTaskForm.reset();
    this.setForm();
    this.submitted = false;
  }
}
