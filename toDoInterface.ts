

export interface toDoInterface{

    MyTasks:Array<string>;
    addTasks(task:string):number;
    ListAllTasks():void; 
    deleteTasks(task:string):number;
}