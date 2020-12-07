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
    // Pega o ano atual
    const anoAtual = dataAtual.getFullYear();

    // verifica se o dia é menor ou igual que 31
    const diaNascimento = filtro.slice(0, 2) <= 31 ? filtro.slice(0, 2) : '**';

    // verifica se o mes é menor ou igual a 12
    const mesNascimento = filtro.slice(2, 4) <= 12 ? filtro.slice(2, 4) : '**';

    // verifica se o ano é maior que o ano atual
    const anoNascimento =
      filtro.slice(4, 8) >= anoAtual ? '****' : filtro.slice(4, 8);

    // Transforma a data de nascimento final (00/00/0000)
    const dtNascimento =
      diaNascimento + '/' + mesNascimento + '/' + anoNascimento;

    // verifica se a data de nascimento está com a quantidade de caracteres correta, ou seja passou pela validação (00/00/0000)
    if (dtNascimento.length === 10) this.input.value = dtNascimento;
  }

  // Mascaras do campo RG
  rg() {
    // Seleciona tudo que não for numero
    const regexp = /[^\d]/g;

    // remove tudo que não for numero e retorna todos os numeros
    const filtro = this.input.value.replace(regexp, '');

    // Separa os numeros conforme as regras de um rg (00.000.000-0)
    const primeiro = filtro.slice(0, 2) + '.';
    const segundo = filtro.slice(2, 5) + '.';
    const terceiro = filtro.slice(5, 8) + '-';
    const digito = filtro.slice(8, 9);

    // Forma o numero de RG final (00.000.000-0)
    const rgFinal = primeiro + segundo + terceiro + digito;

    // Verifica a quantidade de caracteres se está correta e adiciona o valor filtrado no input
    if (rgFinal.length === 12) this.input.value = rgFinal;
  }

  // Mascaras do campo CPF
  cpf() {
    // Seleciona apenas os numeros
    const regexp = /[^\d]/g;

    // remove tudo que nao for numero
    const filtro = this.input.value.replace(regexp, '');

    // separa os digitos e adiciona os . e - (000.000.000-00)
    const primeiro = filtro.slice(0, 3) + '.';
    const segundo = filtro.slice(3, 6) + '.';
    const terceiro = filtro.slice(6, 9) + '-';
    const digito = filtro.slice(9, 11);

    // Forma o numero final do cpf
    const cpfFinal = primeiro + segundo + terceiro + digito;

    // verifica se possui a quantidade de numeros correta e adiciona o valor ao input
    if (cpfFinal.length === 14) this.input.value = cpfFinal;
  }

  // Mascaras do campo CEP
  cep() {
    // Seleciona tudo que nao for numero
    const regexp = /[^\d]/g;

    // remove tudo que nao for numero
    const filtro = this.input.value.replace(regexp, '');

    // forma o cep final (00000-000)
    const cepFinal = filtro.slice(0, 5) + '-' + filtro.slice(5, 8);

    // verifica se possui a quantidade de numeros correta e adiciona ao input
    if (cepFinal.length === 9) this.input.value = cepFinal;
  }

  // Mascara numero
  numero() {
    // seleciona todos tudo que não for numero
    const regexp = /[^\d]/g;

    // retorna apenas os numeros
    const filtro = this.input.value.replace(regexp, '');

    // if (!regexp.test(this.input.value)) {
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
    // selecionar tudo que nao for numero
    const telRegex = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

    // filtra apenas os numeros
    const regexp = /[^\d]/g;
    const filtro = this.input.value.replace(regexp, '');

    // verifica se o telefone é válido
    if (telRegex.test(this.input.value)) {
      if (this.input.value.length >= 8) this.input.value = filtro;
    } else {
      this.input.value = 'Telefone incorreto';
    }
  }

  // Mascara celular
  celular() {
    // selecionar tudo que nao for numero
    const telRegex = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

    // filtra apenas os numeros
    const regexp = /[^\d]/g;
    const filtro = this.input.value.replace(regexp, '');

    // verifica se o telefone é válido
    if (telRegex.test(this.input.value)) {
      if (this.input.value.length >= 8) this.input.value = filtro;
    } else {
      this.input.value = 'Celular incorreto';
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
