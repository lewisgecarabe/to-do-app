addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "list-group-item";

    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "btn btn-warning btn-sm";
    editButton.addEventListener("click", () => {
        const newTaskText = prompt("Edit your task:", taskSpan.innerText);
        if (newTaskText) taskSpan.innerText = newTaskText;
    });

    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.className = "btn btn-success btn-sm";
    doneButton.addEventListener("click", () => {
        taskSpan.style.textDecoration =
            taskSpan.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(doneButton);
    buttonGroup.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonGroup);

    taskList.appendChild(listItem);
    taskInput.value = "";
});
