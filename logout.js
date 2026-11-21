let tasks = [];

function addTask(task) {
    tasks.push({
        name: task,
        completed: false
    });

    console.log("Task added!");
}

function completeTask(index) {
    if (!tasks[index]) {
        console.log("Task not found");
        return;
    }

    tasks[index].completed = true;
}

function showTasks() {
    console.log("MY TASKS");

    tasks.forEach((task, index) => {
        const status = task.completed ? "Done" : "Pending";

        console.log(`${index + 1}. ${task.name} - ${status}`);
    });
}

addTask("Learn JavaScript");
addTask("Practice coding");
addTask("Build a website");

completeTask(0);

showTasks();