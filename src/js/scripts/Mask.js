export default class Mask {
  constructor(type, input) {
    this.type = type;
    this.input = input;

    this.frontController = this.frontController.bind(this);

    this.rg = this.rg.bind(this);
  }

  // Mascaras data de nascimento

  dtNascimento() {
    // Substitui tudo que não for numero por nada (retorna apenas os numeros digitados)
    const filtro = this.input.value.replace(/[^\d]/g, '');

    // Pega a data atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    if (filtro.length >= 8) {
      const dia = filtro.slice(0, 2);
      const mes = filtro.slice(2, 4);
      const ano = filtro.slice(4, 8);

      const dtNascimentoFinal =
        dia <= 31 && mes <= 12 && ano < anoAtual && ano > 1900
          ? `${dia}/${mes}/${ano}`
          : `**/**/****`;

      this.input.value = dtNascimentoFinal;
    }
  }

  // Mascaras do campo RG
  rg() {
    // remove tudo que não for numero e retorna todos os numeros
    const filtro = this.input.value.replace(/[^\d]/g, '');

    if (filtro.length >= 9) {
      const primeiro = filtro.slice(0, 2);
      const segundo = filtro.slice(2, 5);
      const terceiro = filtro.slice(5, 8);
      const digito = filtro.slice(8, 9);

      const rgFinal = `${primeiro}.${segundo}.${terceiro}-${digito}`;

      this.input.value = rgFinal;
    }
  }

  // Mascaras do campo CPF
  cpf() {
    // remove tudo que nao for numero
    const filtro = this.input.value.replace(/[^\d]/g, '');

    // verifica se possui 11 numeros digitados e retorna o valor com mascara
    if (filtro.length >= 11) {
      const primeiro = filtro.slice(0, 3);
      const segundo = filtro.slice(3, 6);
      const terceiro = filtro.slice(6, 9);
      const digito = filtro.slice(9, 11);

      const cpfFinal = `${primeiro}.${segundo}.${terceiro}-${digito}`;

      this.input.value = cpfFinal;
    }
  }

  // Mascaras do campo CEP
  cep() {
    // remove tudo que nao for numero
    const filtro = this.input.value.replace(/[^\d]/g, '');

    if (filtro.length >= 8) {
      const cepFinal = filtro.slice(0, 5) + '-' + filtro.slice(5, 8);

      this.input.value = cepFinal;
    }
  }

  // Mascara numero
  numero() {
    // retorna apenas os numeros
    const filtro = this.input.value.replace(/[^\d]/g, '');

    if (filtro.length === 5) {
      this.input.value = filtro.slice(0, 2) + '.' + filtro.slice(2, 5);
    } else if (filtro.length === 4) {
      this.input.value = filtro.slice(0, 1) + '.' + filtro.slice(1, 4);
    } else {
      this.input.value = filtro.slice(0, 1);
    }
  }

  // Mascara telefone
  telefone() {
    const filtro = this.input.value.replace(/[^\d]/g, '');

    if (filtro.length >= 8) {
      let telefoneFinal;

      // sem 9 na frente
      if (filtro.length === 8) {
        // 0000-0000
        telefoneFinal = filtro.slice(0, 4) + '-' + filtro.slice(4, 8);
      }

      // com 9 na frente
      else if (filtro.length === 9) {
        // 0 0000-0000
        telefoneFinal = filtro.slice(0, 5) + '-' + filtro.slice(5, 9);
      }

      // fixo na frente
      else if (filtro.length === 10) {
        // 00 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 2) +
          ')' +
          filtro.slice(2, 6) +
          '-' +
          filtro.slice(6, 10);
      }

      // com ddd (00)
      else if (filtro.length === 11) {
        // 00 0 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 2) +
          ')' +
          filtro.slice(2, 7) +
          '-' +
          filtro.slice(5, 9);
      }

      // com ddd (000)
      else if (filtro.length >= 12) {
        // 000 0 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 3) +
          ')' +
          filtro.slice(3, 8) +
          '-' +
          filtro.slice(8, 12);
      }

      this.input.value = telefoneFinal;
    }
  }

  // Mascara celular
  celular() {
    const filtro = this.input.value.replace(/[^\d]/g, '');

    if (filtro.length >= 8) {
      let telefoneFinal;

      // sem 9 na frente
      if (filtro.length === 8) {
        // 0000-0000
        telefoneFinal = filtro.slice(0, 4) + '-' + filtro.slice(4, 8);
      }

      // com 9 na frente
      else if (filtro.length === 9) {
        // 0 0000-0000
        telefoneFinal = filtro.slice(0, 5) + '-' + filtro.slice(5, 9);
      }

      // fixo na frente
      else if (filtro.length === 10) {
        // 00 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 2) +
          ')' +
          filtro.slice(2, 6) +
          '-' +
          filtro.slice(6, 10);
      }

      // com ddd (00)
      else if (filtro.length === 11) {
        // 00 0 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 2) +
          ')' +
          filtro.slice(2, 7) +
          '-' +
          filtro.slice(5, 9);
      }

      // com ddd (000)
      else if (filtro.length >= 12) {
        // 000 0 0000-0000
        telefoneFinal =
          '(' +
          filtro.slice(0, 3) +
          ')' +
          filtro.slice(3, 8) +
          '-' +
          filtro.slice(8, 12);
      }

      this.input.value = telefoneFinal;
    }
  }

  // Redireciona para a função desejada
  frontController() {
    if (this.type === 'dtNascimento') this.dtNascimento();
    else if (this.type === 'rg') this.rg();
    else if (this.type === 'cpf') this.cpf();
    else if (this.type === 'cep') this.cep();
    else if (this.type === 'numero') this.numero();
    else if (this.type === 'telefone') this.telefone();
    else if (this.type === 'celular') this.celular();
  }

  addEvents() {
    this.input.addEventListener('change', this.frontController);
  }

  init() {
    if (this.type && this.input) this.addEvents();
  }
}
