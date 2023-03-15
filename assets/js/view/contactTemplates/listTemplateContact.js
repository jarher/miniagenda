const listTemplateContact = ({ indexContact, name, phone, email, isFavorite } ) => {
  return `
    <div class="content__item" draggable="true">
        <div class="content__wrapper_column">
            <div class="content__desc-contact">
                <div>
                    <span class="content__item__title">Nombre</span>
                    <span class="content__name">${name}</span>
                </div>
                <div>
                    <span class="content__item__title">Teléfono:</span>
                    <span class="content__name">${phone}</span>
                </div>
                <div>
                    <span class="content__item__title">Email:</span>
                    <span class="content__name">${email}</span>
                </div>
            </div>
        </div>
        <div class="content__wrapper_row content__wrapper_space">
            <div class="content__icon__wrapper" data-delete-task>
                <span class="content__icon__description">Editar</span>
                <span class="material-symbols-outlined" data-type="editContactCheck" data-index="${indexContact}">
                    edit_note
                </span>
            </div>
            <div class="content__icon__wrapper" data-delete-task>
                <span class="content__icon__description">Eliminar</span>
                <span class="material-symbols-outlined" data-type="deleteContact" data-index="${indexContact}">
                    delete
                </span>
            </div>
        </div>
    </div>
    `;
};
export default listTemplateContact;
