export default class Mask {
  constructor(type, input) {
    this.type = type;
    this.input = input;

    this.frontController = this.frontController.bind(this);

    this.rg = this.rg.bind(this);
  }

  // Mascaras data de nascimento

  dtNascimento() {
    // Seleciona tudo que não for decimal (numero)
    const regexp = /[^\d]/g;

    // Substitui tudo que não for numero por nada (retorna apenas os numeros digitados)
    const filtro = this.input.value.replace(regexp, '');

    // Pega a data atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const dtNascimentoMask = filtro.split();

    if (dtNascimentoMask[0].length >= 8) {
      const dia = dtNascimentoMask[0][0] + dtNascimentoMask[0][1];
      const mes = dtNascimentoMask[0][2] + dtNascimentoMask[0][3];
      const ano =
        dtNascimentoMask[0][4] +
        dtNascimentoMask[0][5] +
        dtNascimentoMask[0][6] +
        dtNascimentoMask[0][7];

      const dtNascimentoFinal =
        dia <= 31 && mes <= 12 && ano < anoAtual && ano > 1900
          ? `${dia}/${mes}/${ano}`
          : `**/**/****`;

      this.input.value = dtNascimentoFinal;
    }
  }

  // Mascaras do campo RG
  rg() {
    // Seleciona tudo que não for numero
    const regexp = /[^\d]/g;

    // remove tudo que não for numero e retorna todos os numeros
    const filtro = this.input.value.replace(regexp, '');

    const rgMask = filtro.split();

    if (rgMask[0].length >= 9) {
      const primeiro = rgMask[0][0] + rgMask[0][1];
      const segundo = rgMask[0][2] + rgMask[0][3] + rgMask[0][4];
      const terceiro = rgMask[0][5] + rgMask[0][6] + rgMask[0][7];
      const digito = rgMask[0][8];

      const rgFinal = `${primeiro}.${segundo}.${terceiro}-${digito}`;

      this.input.value = rgFinal;
    }
  }

  // Mascaras do campo CPF
  cpf() {
    // Seleciona apenas os numeros
    const regexp = /[^\d]/g;

    // remove tudo que nao for numero
    const filtro = this.input.value.replace(regexp, '');

    // Converte em array
    const cpfMask = filtro.split();

    // verifica se possui 11 numeros digitados e retorna o valor com mascara
    if (cpfMask[0].length >= 11) {
      const primeiro = cpfMask[0][0] + cpfMask[0][1] + cpfMask[0][2];
      const segundo = cpfMask[0][3] + cpfMask[0][4] + cpfMask[0][5];
      const terceiro = cpfMask[0][6] + cpfMask[0][7] + cpfMask[0][8];
      const digito = cpfMask[0][9] + cpfMask[0][10];

      const cpfFinal = `${primeiro}.${segundo}.${terceiro}-${digito}`;

      this.input.value = cpfFinal;
    }
  }

  // Mascaras do campo CEP
  cep() {
    // Seleciona tudo que nao for numero
    const regexp = /[^\d]/g;

    // remove tudo que nao for numero
    const filtro = this.input.value.replace(regexp, '');

    const cepMask = filtro.split();

    if (cepMask[0].length >= 8) {
      const cepFinal =
        cepMask[0][0] +
        cepMask[0][1] +
        cepMask[0][2] +
        cepMask[0][3] +
        cepMask[0][4] +
        '-' +
        cepMask[0][5] +
        cepMask[0][6] +
        cepMask[0][7];

      this.input.value = cepFinal;
    }
  }

  // Mascara numero
  numero() {
    // seleciona todos tudo que não for numero
    const regexp = /[^\d]/g;

    // retorna apenas os numeros
    const filtro = this.input.value.replace(regexp, '');

    const split = filtro.split();

    if (split[0].length === 5) {
      this.input.value =
        split[0][0] +
        split[0][1] +
        '.' +
        split[0][2] +
        split[0][3] +
        split[0][4];
    } else if (split[0].length === 4) {
      this.input.value =
        split[0][0] + '.' + split[0][1] + split[0][2] + split[0][3];
    } else {
      this.input.value = split[0];
    }
  }

  // Mascara telefone
  telefone() {
    // filtra apenas os numeros
    const regexp = /[^\d]/g;
    const filtro = this.input.value.replace(regexp, '');

    const telefoneMask = filtro.split();

    if (telefoneMask[0].length >= 8) {
      let telefoneFinal;

      // sem 9 na frente
      if (telefoneMask[0].length === 8) {
        // 0000-0000
        telefoneFinal =
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          '-' +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7];
      }

      // com 9 na frente
      else if (telefoneMask[0].length === 9) {
        // 0 0000-0000
        telefoneFinal =
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          '-' +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          telefoneMask[0][8];
      }

      // fixo na frente
      else if (telefoneMask[0].length === 10) {
        // 00 0000-0000
        telefoneFinal =
          '(' +
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          ')' +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          '-' +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          telefoneMask[0][8] +
          telefoneMask[0][9];
      }

      // com ddd (00)
      else if (telefoneMask[0].length === 11) {
        // 00 0 0000-0000
        telefoneFinal =
          '(' +
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          ')' +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          '-' +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          telefoneMask[0][8];
      }

      // com ddd (000)
      else if (telefoneMask[0].length >= 12) {
        // 000 0 0000-0000
        telefoneFinal =
          '(' +
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          ')' +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          '-' +
          telefoneMask[0][8] +
          telefoneMask[0][9] +
          telefoneMask[0][10] +
          telefoneMask[0][11];
      }

      this.input.value = telefoneFinal;
    }
  }

  // Mascara celular
  celular() {
    // filtra apenas os numeros
    const regexp = /[^\d]/g;
    const filtro = this.input.value.replace(regexp, '');

    const telefoneMask = filtro.split();

    if (telefoneMask[0].length >= 8) {
      let telefoneFinal;

      // sem 9 na frente
      if (telefoneMask[0].length === 8) {
        // 0000-0000
        telefoneFinal =
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          '-' +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7];
      }

      // com 9 na frente
      else if (telefoneMask[0].length === 9) {
        // 0 0000-0000
        telefoneFinal =
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          '-' +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          telefoneMask[0][8];
      }

      // com ddd (00)
      else if (telefoneMask[0].length === 11) {
        // 00 0 0000-0000
        telefoneFinal =
          '(' +
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          ')' +
          telefoneMask[0][2] +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          '-' +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          telefoneMask[0][8];
      }

      // com ddd (000)
      else if (telefoneMask[0].length >= 12) {
        // 000 0 0000-0000
        telefoneFinal =
          '(' +
          telefoneMask[0][0] +
          telefoneMask[0][1] +
          telefoneMask[0][2] +
          ')' +
          telefoneMask[0][3] +
          telefoneMask[0][4] +
          telefoneMask[0][5] +
          telefoneMask[0][6] +
          telefoneMask[0][7] +
          '-' +
          telefoneMask[0][8] +
          telefoneMask[0][9] +
          telefoneMask[0][10] +
          telefoneMask[0][11];
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
