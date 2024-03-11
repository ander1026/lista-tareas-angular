import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  tasksList: string[] = [];
  newTask: string = '';

  private _taskService = inject(TaskService);

  ngOnInit(): void {
    this.tasksList = this._taskService.getTasks();
  }

  addTask() {
    this._taskService.addTask(this.newTask);
    this.newTask = '';
    this.tasksList = this._taskService.getTasks();
  }

  deleteTask(index: number) {
    this._taskService.deleteTask(index);
    this.tasksList = this._taskService.getTasks();
  }
}
