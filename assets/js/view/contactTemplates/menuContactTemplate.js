const menuContactTemplate = () => `
      <div class="content-menu__item content-menu__contact">
          <div class="content-menu__inner-wrapper">
              <form class="content-menu__contact-form">
                  <input type="text" data-search-input placeholder="nombre, teléfono o email">
                  <button data-type="search">
                      <span class="material-symbols-outlined" data-type="search">
                          search
                      </span>
                  </button>
              </form>
          </div>
      </div>
      <div class="content-menu__item content-menu__contact">
          <div class="content-menu__inner-wrapper">
              <span class="content-menu__title">Filtrar por:</span>
              <select class="content-menu__select" data-type="getCategory">
                  <option value="" selected>---</option>
                  <option value="parent">Parentesco</option>
                  <option value="friend">Amigo</option>
                  <option value="mate">Pareja</option>
                  <option value="colleague">Colega</option>
                  <option value="partner">Socio</option>
                  <option value="neighbor">Vecino</option>
                  <option value="Emergency">Emergencias</option>
                  <option value="Other">Otro</option>
              </select>
          </div>
      </div>
      <div class="content-menu__item content-menu__contact">
          <button class="content-menu__button content-menu__button_blue" data-type="contactForm">Crear
              contacto</button>
      </div>
      <div class="content-menu__item content-menu__contact">
          <button class="content-menu__button content-menu__button_blue" data-type="showAllContacts">
            mostrar todos
          </button>
      </div>
    `;
export default menuContactTemplate;
