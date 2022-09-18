import { Component } from '@angular/core';
import { Tarea } from 'src/models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareaList: Tarea[];
  newTarea: string;

  constructor() {
    this.tareaList = [];
    this.newTarea = "";
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTarea();
    }
  }

  addTarea() {
    const tarea: Tarea = new Tarea(this.newTarea)
    this.tareaList.push(tarea);
    this.newTarea = "";
  }

  deleteTarea(index: number) {
    this.tareaList.splice(index, 1);
  }

  postpone(index: number) {
    this.tareaList[index].status = "postpone";
  }

  complete(index: number) {
    this.tareaList[index].status = "complete";
  }

  clean() {
    this.tareaList = this.tareaList.filter(item => {
      return item.status !== "complete";
    })
  }

  restore() {
    this.tareaList.forEach(item => {
      if (item.status === "postpone") {
        item.status = "";
      }
    })
  }

  getStyle(index: number) {
    if (this.tareaList[index].status === "complete") {
      return "list-group-item list-group-item-success";
    } else {
      return "list-group-item";
    }
  }
}
