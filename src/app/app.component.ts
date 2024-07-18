import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import * as TodoActions from './store/todo.actions';
import { selectAllTodos } from './store/todo.selectors';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store){
    this.todos$ = this.store.select(selectAllTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo(text: string){
    if(text.trim()){
      const todo: Todo = {id: Date.now().toString(), text, completed : false}
      this.store.dispatch(TodoActions.addTodo({todo}));
    }
  }

  toggleTodo(id: string){
    this.store.dispatch(TodoActions.toggleTodo({id}));
  }

  removeTodo(id: string){
    this.store.dispatch(TodoActions.removeTodo({id}));
  }
}
