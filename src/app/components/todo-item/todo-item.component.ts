import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleComleted(todo).subscribe(todo => 
      console.log(todo))
  }

  onDelete(todo) {
    console.log('delete')
  }

}