import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from './models/todo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  // title = 'angular-tour-of-heroes';

  public subscription : Subscription;
  public todos: Todo[] = [];

  constructor(
    public todoService : TodoService
  ) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.subscription = this.todoService.getAllTodos().subscribe(data => {
      console.log('data', data);
      this.todos = data;
    }, error => {
      console.log(error);
    })
  }

  ngOnDestroy() {

  }

}
