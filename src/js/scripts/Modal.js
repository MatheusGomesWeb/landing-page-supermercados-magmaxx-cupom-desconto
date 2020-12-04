export default class Modal {
  constructor(container, modal, closeBtn) {
    this.container = document.querySelector(container);
    this.modal = document.querySelector(modal);
    this.closeBtn = document.querySelector(closeBtn);

    this.closeModal = this.closeModal.bind(this);
  }

  // Mensagem dentro do Modal
  messageModal({ type, typeTitle, typeMessage, message }) {
    // Mensagem do Titulo do Modal
    this.modal.querySelector('.c-modal__title__type').innerHTML = typeTitle;
    this.modal.querySelector(
      '.c-modal__title__message'
    ).innerHTML = typeMessage;

    // Insere a mensagem no modal e a Cor do Modal dependendo do tipo de Erro
    function insertMessage(classTitle, classItem) {
      document.querySelector('.c-modal__title').classList.add(classTitle);

      // Mensagem Modal
      message.forEach((msg) => {
        document.querySelector('.c-modal__list').innerHTML += `
          <li class="c-modal__list__item ${classItem}">${msg}</li>    
        `;
      });
    }

    /* 
    Tipos de erros
     * 0: erro
     * 1: sucesso
     */

    if (type === 0) {
      insertMessage('c-modal__title--erro', '');
    } else if (type === 1) {
      insertMessage('c-modal__title--sucesso', 'c-modal__item--sucesso');
    }
  }

  // Abre o modal
  openModal() {
    if (this.container.dataset.activeModal === 'false') {
      this.container.dataset.activeModal = 'true';
    }
  }

  // Fecha o Modal
  closeModal() {
    if (this.container.dataset.activeModal === 'true') {
      this.container.dataset.activeModal = 'false';
    }
  }

  // Fecha modal ao clicar fora
  outsideCloseModal({ target }) {
    if (!target.dataset.activeModal) {
      this.container.dataset.activeModal = false;
      this.container.removeEventListener('click', this.outsideCloseModal);
    }
  }

  // Adiciona evento de click para fechar o modal ao clicar no botao X
  addEvents() {
    this.closeBtn.addEventListener('click', this.closeModal);
    this.container.addEventListener('click', this.outsideCloseModal);
  }

  // Inicia a classe
  start() {
    if (this.container && this.modal && this.closeBtn) {
      this.addEvents();
      this.openModal();
    }
  }
}
