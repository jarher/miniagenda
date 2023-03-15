import { Store } from "../model/Store.js";
import { Template } from "../view/Template.js";
import { Event } from "./Event.js";
import { GeneralFunctions } from "./GeneralFunctions.js";

export class TaskController {
  loadEvents() {
    Event.loadFunction("click", this.datatypesFunctions);
  }
 
  loadTaskList(option) {
    let data = Store.getData("task");
    if (data.length > 0) {
      if (option === "important") {
        data = data.filter((task) => task.isImportant === true);
      }
      if (option === "finished") {
        data = data.filter((task) => task.isFinished === true);
      }
    }
    Template.listTask(data);
  }
 
  getInputsValue() {
    return {
      taskName: document.querySelector("[data-name-task]").value,
      taskDate: document.querySelector("[data-date-task]").value,
    };
  }

  taskData(index, type, inputs) {
    const task = {
      index: index,
      type: type,
      key: "task",
      inputsValue: inputs,
    };
    return task;
  }

  datatypesFunctions = {
    task: (e) => {
      this.loadTaskList(null);
      GeneralFunctions.loadMenu("task");
      GeneralFunctions.toggleMainMenu(e);
    },
    menuDropdown: () => {
      GeneralFunctions.toggleMenu();
    },
    showAllTask: () => {
      this.loadTaskList(null);
      GeneralFunctions.toggleMenu();
    },
    completedTask: () => {
      this.loadTaskList("finished");
      GeneralFunctions.toggleMenu();
    },
    importantTask: () => {
      this.loadTaskList("important");
      GeneralFunctions.toggleMenu();
    },
    taskForm: () => {
      window.location.href = "../../../createTask.html";
    },
    importantCheck: (e) => {
      Store.setData(this.taskData(e.target.dataset.index, e.target.dataset.type, null));
      e.target.classList.toggle("content__icon_color-yellow");
    },
    finishedCheck: (e) => {
      Store.setData(
        this.taskData(e.target.dataset.index, e.target.dataset.type, null)
      );
      e.target.classList.toggle("content__icon_color-green");
    },
    editTaskCheck: (e) => {
      window.location.href = `../../../editTask.html?id=${e.target.dataset.index}&type=task`;
    },
    createTask: (e) => {
      e.preventDefault();
      if (this.getInputsValue().taskName && this.getInputsValue().taskDate) {
        Store.setData(
          this.taskData(null, e.target.dataset.type, this.getInputsValue())
        );
        GeneralFunctions.redirect('task');
      }
    },
    editTask: (e) => {
      e.preventDefault();
      if (this.getInputsValue().taskName && this.getInputsValue().taskDate) {
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        const type = e.target.dataset.type;
        Store.setData(
          this.taskData(id, type, this.getInputsValue())
        );
        GeneralFunctions.redirect('task');
      }
    },
    deleteTask: (e) => {
      GeneralFunctions.delete(e, "task");
    },
    goBackTask: (e) => {
      e.preventDefault();
      GeneralFunctions.redirect("task");
    },
  };
}
