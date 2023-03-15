const listTemplateTask = ({
  indexTask,
  title,
  date,
  isImportant,
  isFinished,
}) => `
    <div class="content__item" draggable="true">
        <div class="content__item__description">
            <span class="material-symbols-outlined">
                drag_indicator
            </span>
            <div class="content__item__text">
                <span class="content__item__title content__item__title_center">${title}</span>
                <span class="content__item__date">fecha limite ${date}</span>
            </div>
        </div>
        <div class="content__item__icons">
            <div class="content__icon__wrapper">
                <span class="content__icon__description">Importante</span>
                <span class="material-symbols-outlined ${
                  isImportant ? "content__icon_color-yellow" : ""
                }" data-type="importantCheck" data-index="${indexTask}">
                  stars
                </span>
            </div>
            <div class="content__icon__wrapper">
                <span class="content__icon__description">Editar</span>
                <span class="material-symbols-outlined" data-type="editTaskCheck" data-index="${indexTask}">
                  edit_note
                </span>
            </div>
            <div class="content__icon__wrapper">
                <span class="content__icon__description">Terminada</span>
                <span class="material-symbols-outlined ${
                  isFinished ? "content__icon_color-green" : ""
                }" data-type="finishedCheck" data-index="${indexTask}">
                  check_box
                </span>
            </div>
            <div class="content__icon__wrapper">
                <span class="content__icon__description">Eliminar</span>
                <span class="material-symbols-outlined" data-type="deleteTask" data-index="${indexTask}">
                  delete
                </span>
            </div>
        </div>
    </div>
  `;
export default listTemplateTask;