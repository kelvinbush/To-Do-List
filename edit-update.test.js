/**
 * @jest-environment jsdom
 */
import ToDoList from './src/modules/to-do-list.js';

describe('ToDoList', () => {
  let toDoList;
  beforeEach(() => {
    toDoList = new ToDoList();
    document.body.innerHTML = '<ul id="to-do-list"></ul>';
    localStorage.clear();
  });
});
