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

  test('editTask', () => {
    toDoList.addToDo('task1');
    toDoList.addToDo('task2');
    toDoList.addToDo('task3');
    toDoList.updateDescription(1, 'task1 edited');
    document.querySelector('#to-do-list').innerHTML = toDoList.renderToDos();
    expect(document.querySelectorAll('#to-do-list .container')[0].children[1].value)
      .toBe('task1 edited');
  });

});
