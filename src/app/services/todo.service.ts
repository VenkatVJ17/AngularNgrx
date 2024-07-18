import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn:'root'
})
export class TodoService{
    private todos: Todo[] = [];


    getTodos(): Observable<Todo[]>{
        return of(this.todos);
    }

    addTodo(todo: Todo): Observable<Todo>{
        this.todos.push(todo);
        return of(todo);
    }

    updateTodo(todo: Todo): Observable<Todo>{
        const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
        return of(todo);
    }

    deleteTodo(id: string): Observable<string>{
        this.todos = this.todos.filter(todo => todo.id !== id);
        return of(id);
    }
}