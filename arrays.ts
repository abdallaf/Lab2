let MyTasks:Array<string> = [];

function addTasks(task:string):number{
    return MyTasks.push(task);
}

function ListAllTasks():void{
    console.log("begining of array");
    MyTasks.forEach(function(task){
        console.log(task);
    })
    console.log("End of the array");
}

function deleteTasks(task:string):number{
    let index:number = MyTasks.indexOf(task);

    if (index > -1){
        MyTasks.splice(index,1);
    }
    else{
        console.log("Item: "+task + " not found!");
    }

    return MyTasks.length;
}

addTasks("element1");
addTasks("element2");
addTasks("element3");
ListAllTasks();
deleteTasks("sweeping");

