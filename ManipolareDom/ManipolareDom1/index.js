const addProduct = () => {
  const inputField = document.querySelector('input[type="text"]');
  const taskList = document.querySelector('ul');

  if (inputField.value.trim() !== '') {
    // Creazione del nuovo elemento task
    const newTask = document.createElement('li');
    const taskText = document.createTextNode(inputField.value);

    // Creazione del checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Aggiunta del task e del checkbox alla lista
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    taskList.appendChild(newTask);

    // Pulisce l'input field dopo aver aggiunto il task
    inputField.value = '';
  }
};

