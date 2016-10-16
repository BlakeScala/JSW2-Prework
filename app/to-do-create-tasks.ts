/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />

var people = ToDoList.people;

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new WorkTask(today, "Go to meeting.", "Medium", people.thor));
tasks.push(new WorkTask(today, "Clean ceiling", "Low", people.loki));

console.log(tasks);
