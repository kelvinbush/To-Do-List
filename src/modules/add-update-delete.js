export const addToList = (list) => {
  const input = document.querySelector('#input');
  const { value } = input;
  if (value) {
    list.addToDo(value);
    input.value = '';
  }
};

export const removeCompletedFromList = (list) => {
  list.removeAllCompleted();
};

export const updateCompleted = (list, id) => {
  list.updateToDoCompleted(id);
};
