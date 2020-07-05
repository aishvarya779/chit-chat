import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo-list/todo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoRoutingModule, SharedModule]
})
export class TodoModule {}
