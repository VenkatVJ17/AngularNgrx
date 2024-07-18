import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState, selectAll } from "./todo.reducer";
import { Todo } from "../models/todo.model";

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(selectTodoState, selectAll);

export const selectTodosLoading = createSelector(selectTodoState, state => state.loading);

export const selectTodosError = createSelector(selectTodoState,state => state.error);