import ToDo from './to-do.js';

export default class ToDoList {
  constructor() {
    this.toDos = [];
  }

  addToDo(index, description, completed) {
    this.toDos.push(new ToDo(index, description, completed));
    this.#saveToDos();
  }

  #addToDos(toDos) {
    toDos.forEach((toDo) => {
      this.addToDo(toDo.index, toDo.description, toDo.completed);
    });
  }

  getToDos() {
    return this.toDos;
  }

  removeToDo(id) {
    this.toDos = this.toDos.filter((toDo) => toDo.index !== id);
    this.#saveToDos();
  }

  updateToDo(id, description, completed) {
    this.toDos = this.toDos.map((toDo) => {
      if (toDo.index === id) {
        return new ToDo(id, description, completed);
      }
      return toDo;
    });
    this.#saveToDos();
  }

  removeAllCompleted() {
    this.toDos = this.toDos.filter((toDo) => toDo.completed === true);
    this.#saveToDos();
  }

  loadToDos() {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    if (toDos) {
      this.#addToDos(toDos);
    }
  }

  #saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }
}
