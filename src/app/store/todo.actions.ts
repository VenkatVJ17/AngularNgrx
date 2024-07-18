import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const addTodo = createAction('[Todo] add Todo',props<{ todo: Todo }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{id: string}>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{id : string }>());
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos success', props<{todos: Todo[]}>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{error: any}>());