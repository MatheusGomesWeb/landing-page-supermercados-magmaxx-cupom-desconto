import Modal from './Modal';

export default class Form {
  constructor() {
    this.form = document.forms.formulario;

    this.submit = this.submit.bind(this);
  }

  // Validar Formulario ao Submeter
  submit(event) {
    event.preventDefault();

    // Instanciando Modal
    const modal = new Modal(
      '.c-modal',
      '.c-modal__container',
      '.c-modal__close'
    );

    // Validação Formulário
    const b = false;

    const nome = this.form.nome.value;
    const sexo = this.form.sexo.value;

    // Sucesso
    if (nome && sexo) {
      // Mensagem do Modal
      modal.messageModal({
        type: 1,
        typeTitle: 'sucesso',
        typeMessage: 'mensagem enviada com sucesso',
        message: ['Mensagem enviada com sucesso !'],
      });

      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)
      modal.start();
    } else {
      // Mensagem do Modal
      modal.messageModal({
        type: 0,
        typeTitle: 'ERRO',
        typeMessage: 'verifique os dados',
        message: ['Preencha o campo nome', 'Selecione o campo sexo'],
      });
      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)
      modal.start();
    }
  }

  // Adiciona Evento ao formulario
  addEvents() {
    this.form.addEventListener('submit', this.submit);
  }

  // Inicia a classe
  start() {
    if (this.form) {
      this.addEvents();
    }
  }
}
