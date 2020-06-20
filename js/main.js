const input = document.getElementById("task-input");
const totalTasks = document.getElementById("total");
const completedTasks = document.getElementById("completed");
const modal = document.getElementById("modal");
const maxRecentlyDeleted = 4;

loadData("totalTasks") || saveData("totalTasks",0);
loadData("completedTasks") || saveData("completedTasks",0);
loadData("toDoTheme") || saveData("toDoTheme","light");


input.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
        let task = new task(input.value);
        input.value = "";

    }
});
