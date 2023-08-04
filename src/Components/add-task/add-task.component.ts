import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  options = ['Low', 'Medium', 'High', 'Critical'];
  submitted: boolean;
  taskName;
  assignedTo;
  priority;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      assignedTo: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  onSubmit() {}
  onReset() {}
}
