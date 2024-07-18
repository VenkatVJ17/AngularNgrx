import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './app/store/todo.reducer';
import { TodoEffects } from './app/store/todo.effects';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({todos: todoReducer}),
    provideEffects([TodoEffects]),
    provideStoreDevtools({ maxAge:25, logOnly:false})
  ]
}).catch((err) => console.error(err));
