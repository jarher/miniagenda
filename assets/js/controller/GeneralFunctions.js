import { Store } from "../model/Store.js";
import { Template } from "../view/Template.js";

export class GeneralFunctions{
    static loadMenu(type){
        Template.menu(".content-menu__items", type);
    }
    static toggleMainMenu(e){
       e.target.parentElement.classList.toggle("aside__buttons--move-down"); 
    }
    static toggleMenu(){
        document
          .querySelector(".content-menu__items")
          .classList.toggle("content__menu__items--move-down");
    }
    static delete(e, type){
        Store.deleteData(e.target.dataset.index, type);
        e.target.parentElement.parentElement.parentElement.remove();
    }
    static redirect(type){
        window.location.href = `../../../index.html?type=${type}`;
    }
}