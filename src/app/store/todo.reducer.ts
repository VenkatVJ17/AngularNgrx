import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models/todo.model';
import * as TodoActions from './todo.actions';
export interface TodoState extends EntityState<Todo> {
    loading: boolean;
    error: any;
  }
  
  export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
  
  export const initialState: TodoState = adapter.getInitialState({
    loading: false,
    error: null
  });
  
  export const todoReducer = createReducer(
    initialState,
    on(TodoActions.addTodo, (state, { todo }) => adapter.addOne(todo, state)),
    on(TodoActions.toggleTodo, (state, { id }) => adapter.updateOne({ id, changes: { completed: ! state.entities[id]?.completed } }, state)),
    on(TodoActions.removeTodo, (state, { id }) => adapter.removeOne(id, state)),
    on(TodoActions.loadTodos, state => ({ ...state, loading: true })),
    on(TodoActions.loadTodosSuccess, (state, { todos }) => adapter.setAll(todos, { ...state, loading: false })),
    on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, loading: false, error }))
  );
  
  export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();