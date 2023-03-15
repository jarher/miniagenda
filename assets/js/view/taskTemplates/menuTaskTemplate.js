const menuTaskTemplate = () =>
    `
    <div class="content-menu__item">
        <button class="content-menu__button content-menu__button_green" data-type="completedTask">Terminadas</button>
    </div>
    <div class="content-menu__item">
        <button class="content-menu__button content-menu__button_fucsia" data-type="importantTask">Importantes</button>
    </div>
    <div class="content-menu__item">
        <button class="content-menu__button content-menu__button_blue" data-type="taskForm">Crear nueva tarea</button>
    </div>
    <div class="content-menu__item">
        <button class="content-menu__button content-menu__button_dark_blue" data-type="showAllTask">Ver todas</button>
    </div>
    `;
    export default menuTaskTemplate;