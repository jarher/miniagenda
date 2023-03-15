import { Store } from "../model/Store.js";
import { Template } from "../view/Template.js";
import { Event } from "./Event.js";
import { GeneralFunctions } from "./GeneralFunctions.js";

export class ContactController {
  loadEvents() {
    Event.loadFunction("click", this.datatypesFunctions);
  }
  
  loadContactList() {
    Template.listContact(Store.getData("contact"));
  }

  filterData(key, value, type) {
    const data = Store.getData("contact");
    if (type === "search") {
      return data.filter((contact) => Object.values(contact).includes(value));
    }
    if (type === "select") {
      return data.filter((contact) => contact[key] === value);
    }
  }
  searchData() {
    const input = document.querySelector("[data-search-input]");
    return this.filterData(null, input.value, "search");
  }
  getInputsValue() {
    return {
      contactName: document.querySelector("[data-name-contact]").value,
      contactPhone: document.querySelector("[data-phone-contact]").value,
      contactEmail: document.querySelector("[data-email-contact]").value,
      contactCategory: document.querySelector("[data-category-contact]").value,
    };
  }
  contactData(index, type, inputs){
    const contact = {
      index: index,
      type: type,
      key: "contact",
      inputsValue: inputs,
    };
    return contact;
  }

  datatypesFunctions = {
    contacts: (e) => {
      this.loadContactList();
      GeneralFunctions.loadMenu("contact");
      GeneralFunctions.toggleMainMenu(e);
    },
    showAllContacts: () => {
      this.loadContactList();
      GeneralFunctions.toggleMenu();
    },
    contactForm: () => {
      window.location.href = "../../../createContact.html";
    },
    editContactCheck: (e) => {
      window.location.href = `../../../editContact.html?id=${e.target.dataset.index}&type=contact`;
    },
    search: (e) => {
      e.preventDefault();
      Template.listContact(this.searchData());
      GeneralFunctions.toggleMenu();
    },
    getCategory: (e) => {
      Template.listContact(
        this.filterData("category", e.target.value, "select")
      );
    },
    createContact: (e) => {
      e.preventDefault();
      if (
        this.getInputsValue().contactName &&
        this.getInputsValue().contactPhone &&
        this.getInputsValue().contactEmail &&
        this.getInputsValue().contactCategory
      ) {
        Store.setData(
          this.contactData(null, e.target.dataset.type, this.getInputsValue())
        );
        GeneralFunctions.redirect("contact");
      }
    },
    editContact: (e) => {
      e.preventDefault();
      if (
        this.getInputsValue().contactName &&
        this.getInputsValue().contactPhone &&
        this.getInputsValue().contactEmail &&
        this.getInputsValue().contactCategory
      ) {
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        const type = e.target.dataset.type;
        Store.setData(
          this.contactData(id, type, this.getInputsValue())
        );
        GeneralFunctions.redirect("contact");
      }
    },
    deleteContact: (e) => {
      GeneralFunctions.delete(e, 'contact');
    },
    goBackContact: (e) => {
      e.preventDefault();
      GeneralFunctions.redirect('contact');
    },
  };
}
