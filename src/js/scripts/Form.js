import Modal from './Modal';
import validateForm, { converterDtNascimento } from './validateForm';
import { buscarCep } from './Api';
import Mask from './Mask';

export default class Form {
  constructor() {
    this.form = document.forms.formulario;

    this.preencherCep = this.preencherCep.bind(this);
    this.submit = this.submit.bind(this);
  }

  // Preenche o campo endereço automaticamente
  preencherCep() {
    const cep = async () => {
      let loading = false;

      // Instanciando Modal
      const modal = new Modal(
        '.c-modal',
        '.c-modal__container',
        '.c-modal__close'
      );

      try {
        // Valor de loading
        loading = true;

        // se estiver carregando...
        if (loading) {
          modal.openModal();

          // Mensagem do Modal
          modal.messageModal({
            type: 2,
            typeTitle: 'CARREGANDO INFORMAÇÕES DE',
            typeMessage: `${this.form.cep.value}`,
            message: [' '],
          });
        }

        // Faz a requisição na API
        const request = await buscarCep(this.form.cep.value);

        // Coloca os dados da API nos campos do formulario
        this.form.endereco.value = request.logradouro;
        this.form.bairro.value = request.bairro;
      } catch (e) {
        throw new Error('Erro ao buscar o endereço com o cep informado');
      } finally {
        loading = false;

        // Após carregar fecha o modal de loading
        if (!loading) {
          modal.closeModal();
        }
      }
    };

    // Se o campo cep estiver correto (passou no test do RegExp) executa a função de buscar na API
    if (!validateForm('cep', this.form.cep.value).mensagem) {
      cep();
    }
  }

  // Cores das bordas dos input
  inputError(input, typeError) {
    if (typeError === 0) {
      // Pinta a borda de vermelho
      input.style.border = '1px solid #ff3333';
      if (input.localName !== 'select') {
        input.value = '';
      }
      input.focus();

      // tira a borda do select ao selecionar outro valor do input
      if (input.localName === 'select') {
        input.addEventListener('change', () => {
          input.style.border = '1px solid #cfcfcf';
        });
      }

      // Adiciona evento keyup para tirar a borda vermelha ao digitar
      input.addEventListener('keyup', () => {
        input.style.border = '1px solid #cfcfcf';
      });

      // Adiciona borda verde caso o input esteja correto
    } else if (typeError === 1) {
      input.style.border = '1px solid #5fa553';
      input.focus();
      input.addEventListener('keyup', () => {
        input.style.border = '1px solid #cfcfcf';
      });
    }
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
    const nome = validateForm('nome', this.form.nome.value);
    const dtNascimento = validateForm(
      'dtNascimento',
      converterDtNascimento(this.form.dtNascimento.value)
    );

    // Retorna true ou false se selecionou uma opção correta
    const sexo =
      this.form.sexo.value !== 'masculino' &&
      this.form.sexo.value !== 'feminino'
        ? false
        : true;

    // Retorna true ou false se selecionou uma opção correta
    const estadoCivil =
      this.form.estadoCivil.value !== 'casado' &&
      this.form.estadoCivil.value !== 'solteiro'
        ? false
        : true;

    // Seleciona os valores dos campos e os valida
    const rg = validateForm('rg', this.form.rg.value);
    const cpf = validateForm('cpf', this.form.cpf.value);
    const endereco = validateForm('endereco', this.form.endereco.value);
    const numero = validateForm('numero', this.form.numero.value);
    const cep = validateForm('cep', this.form.cep.value);
    const bairro = validateForm('bairro', this.form.bairro.value);
    const telefone = validateForm('telefone', this.form.telefone.value);
    const celular = validateForm('celular', this.form.celular.value);
    const email = validateForm('email', this.form.email.value);
    const checkbox = this.form.termos.checked;

    // Verifica se possui alguma mensagem de erro nos campos
    if (
      nome.mensagem ||
      dtNascimento.mensagem ||
      !sexo ||
      !estadoCivil ||
      rg.mensagem ||
      cpf.mensagem ||
      endereco.mensagem ||
      numero.mensagem ||
      cep.mensagem ||
      bairro.mensagem ||
      telefone.mensagem ||
      celular.mensagem ||
      email.mensagem ||
      !checkbox
    ) {
      // Inicia o Modal (Abre o modal e adiciona evento de fechar modal)
      modal.start();

      // Mensagem do Modal
      modal.messageModal({
        type: 0,
        typeTitle: 'ERRO',
        typeMessage: 'verifique os dados',
        message: [
          nome.mensagem,
          dtNascimento.mensagem,
          !sexo ? 'Selecione o campo SEXO' : null,
          !estadoCivil ? 'Selecione o campo Estado Cívil' : null,
          rg.mensagem,
          cpf.mensagem,
          endereco.mensagem,
          numero.mensagem,
          cep.mensagem,
          bairro.mensagem,
          telefone.mensagem,
          celular.mensagem,
          email.mensagem,
          !checkbox
            ? 'Você precisa concordar com os termos para enviar.'
            : null,
        ],
      });

      /*
       * Pinta a borda do campo se estiver correto ou incorreto e da foco
       * 0 - Erro
       * 1 - Sucesso
       */
      nome.mensagem
        ? this.inputError(this.form.nome, 0)
        : this.inputError(this.form.nome, 1);
      dtNascimento.mensagem
        ? this.inputError(this.form.dtNascimento, 0)
        : this.inputError(this.form.dtNascimento, 1);
      !sexo
        ? this.inputError(this.form.sexo, 0)
        : this.inputError(this.form.sexo, 1);
      !estadoCivil
        ? this.inputError(this.form.estadoCivil, 0)
        : this.inputError(this.form.estadoCivil, 1);
      rg.mensagem
        ? this.inputError(this.form.rg, 0)
        : this.inputError(this.form.rg, 1);
      cpf.mensagem
        ? this.inputError(this.form.cpf, 0)
        : this.inputError(this.form.cpf, 1);
      cep.mensagem
        ? this.inputError(this.form.cep, 0)
        : this.inputError(this.form.cep, 1);
      numero.mensagem
        ? this.inputError(this.form.numero, 0)
        : this.inputError(this.form.numero, 1);
      endereco.mensagem
        ? this.inputError(this.form.endereco, 0)
        : this.inputError(this.form.endereco, 1);
      bairro.mensagem
        ? this.inputError(this.form.bairro, 0)
        : this.inputError(this.form.bairro, 1);
      telefone.mensagem
        ? this.inputError(this.form.telefone, 0)
        : this.inputError(this.form.telefone, 1);
      celular.mensagem
        ? this.inputError(this.form.celular, 0)
        : this.inputError(this.form.celular, 1);
      email.mensagem
        ? this.inputError(this.form.email, 0)
        : this.inputError(this.form.email, 1);
    } else {
      // Aqui envia o POST para a API
      const apiPost = true;

      // se o Retorno do POST na api for true, mostra a mensagem sucesso e redireciona em 3s
      if (apiPost) {
        // abre o modal sem o evento de fechar
        modal.openModal();

        // Mensagem do Modal
        modal.messageModal({
          type: 1,
          typeTitle: 'sucesso',
          typeMessage: 'mensagem enviada com sucesso',
          message: ['Aguarde enquanto redirecionamos você!'],
        });

        // Redireciona em 3s apos mostrar a mensagem do modal
        setTimeout(() => {
          location.reload(true);
        }, 3000);
      }

      console.log(
        this.form.nome.value,
        this.form.dtNascimento.value,
        this.form.sexo.value,
        this.form.estadoCivil.value,
        this.form.rg.value,
        this.form.cpf.value,
        this.form.cep.value,
        this.form.numero.value,
        this.form.endereco.value,
        this.form.bairro.value,
        this.form.telefone.value,
        this.form.celular.value,
        this.form.email.value,
        this.form.termos.checked
      );
    }
  }

  // Adiciona eventos ao formulario
  addEvents() {
    // Mascaras formulario
    const rg = new Mask('rg', this.form.rg);
    const cpf = new Mask('cpf', this.form.cpf);
    const cep = new Mask('cep', this.form.cep);
    const telefone = new Mask('telefone', this.form.telefone);
    const celular = new Mask('celular', this.form.celular);
    rg.init();
    cpf.init();
    cep.init();
    telefone.init();
    celular.init();

    // Eventos
    this.form.cep.addEventListener('change', this.preencherCep);
    this.form.addEventListener('submit', this.submit);
  }

  // inicia a classe e adiciona os eventos
  start() {
    if (this.form) {
      this.addEvents();
    }
  }
}
