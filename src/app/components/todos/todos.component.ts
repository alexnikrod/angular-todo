import { Component, OnInit } from '@angular/core';
import { Todos } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todos[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });   
  }

  deleteTodo(todo: Todos) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todos) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    });
    
  }
}
