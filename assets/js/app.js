import { ContactController } from "./controller/Contact_Controller.js";
import { Event } from "./controller/Event.js";
import { GeneralFunctions } from "./controller/GeneralFunctions.js";
import { TaskController } from "./controller/Task_Controller.js";
import { Store } from "./model/Store.js";

const task = new TaskController();

const contact = new ContactController();

const loadContent = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const type = url.searchParams.get("type");

  if (type === "task") {
    if (id) {
      const { title, date } = Store.getData(type).filter(
        (task) => task.indexTask == id
      )[0];
      document.querySelector("[data-name-task]").value = title;
      document.querySelector("[data-date-task]").value = date;
    } else {
      GeneralFunctions.loadMenu("task");
      task.loadTaskList(null);
    }
  } else if (type === "contact") {
    if (id) {
      const { name, phone, email, category } = Store.getData(type).filter(
        (contact) => contact.indexContact == id
      )[0];
      document.querySelector("[data-name-contact]").value = name;
      document.querySelector("[data-phone-contact]").value = phone;
      document.querySelector("[data-email-contact]").value = email;
      document.querySelector("[data-category-contact]").value = category;
    } else {
      GeneralFunctions.loadMenu("contact");
      contact.loadContactList();
    }
  } else {
    if (document.querySelector(".content__list")) {
      GeneralFunctions.loadMenu("task");
      task.loadTaskList(null);
    }
  }
};

const loadMainMenu = {
  mainMenu: () =>
    document
      .querySelector(".aside__buttons")
      .classList.toggle("aside__buttons--move-down"),
};

Event.loadFunction("DOMContentLoaded", loadContent);

Event.loadFunction("blur", null);

Event.loadFunction("click", loadMainMenu);

Event.loadFunction("change", contact.functions);

task.loadEvents();

contact.loadEvents();
