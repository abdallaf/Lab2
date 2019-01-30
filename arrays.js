var MyTasks = [];
function addTasks(task) {
    return MyTasks.push(task);
}
function ListAllTasks() {
    console.log("begining of array");
    MyTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of the array");
}
function deleteTasks(task) {
    var index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
    }
    else {
        console.log("Item: " + task + " not found!");
    }
    return MyTasks.length;
}
addTasks("element1");
addTasks("element2");
addTasks("element3");
ListAllTasks();
deleteTasks("sweeping");
