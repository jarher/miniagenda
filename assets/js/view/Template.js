import listTemplateContact from "./contactTemplates/listTemplateContact.js";
import menuContactTemplate from "./contactTemplates/menuContactTemplate.js";
import listTemplateTask from "./taskTemplates/listTemplateTask.js";
import menuTaskTemplate from "./taskTemplates/menuTaskTemplate.js";

export class Template {
  
  static menu(selector, type) {
    const menu_title = document.querySelector("[data-menu-title]");
    if (type === "task") {
      this.renderHtml(selector, menuTaskTemplate());
      menu_title.textContent = "Actividades";
    }
    if (type === "contact") {
      this.renderHtml(selector, menuContactTemplate());
      menu_title.textContent = "Contactos";
    }
  }

  static listTask(data) {
    let content = "";
    data.forEach((task) => {
      content += listTemplateTask(task);
    });
    this.renderHtml(".content__list", content);
  }

  static listContact(data){
    let content = "";
    data.forEach((contact) => {
      content += listTemplateContact(contact)
    });
    this.renderHtml(".content__list", content)
  }

  static renderHtml(selector, template) {
    template
      ? (document.querySelector(selector).innerHTML = template)
      : (document.querySelector(selector).innerHTML =
          "<div>No hay nada para mostrar</div>");
  }
}
