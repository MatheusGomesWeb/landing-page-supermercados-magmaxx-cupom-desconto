/*

   $("#dtNascimento").mask('00/00/0000');
    $("#rg").mask('00.000.000-0');
    $("#cpf").mask('000.000.000-00', { reverse: true });
    $("#cep").mask('00000-000');
    $("#telefone").mask('(00) 0000-0000')
    $("#celular").mask('(00) 0000-0000');

    */

export default class Mask {
  constructor(type, input) {
    this.type = type;
    this.input = input;

    this.frontController = this.frontController.bind(this);

    this.rg = this.rg.bind(this);
  }

  rg() {
    const number = Number(this.input.value);

    if (
      Number.isInteger(number) //&&
      // (this.input.value === '.' || this.input.value === '-')
    ) {
      let rg = this.input.value.split();

      const primeiro = rg[0][0] + rg[0][1] + '.';
      const segundo = rg[0][2] + rg[0][3] + rg[0][4] + '.';
      const terceiro = rg[0][5] + rg[0][6] + rg[0][7] + '-';
      const digito = rg[0][8];

      if (this.input.value.length === 3) this.input.value = primeiro;
      else if (this.input.value.length === 7)
        this.input.value = primeiro + segundo;
      else if (this.input.value.length === 11) this.input.value = terceiro;
      else if (this.input.value.length === 12) this.input.value = digito;
    }
  }

  cpf() {
    console.log('CPF:' + this.input.value);
  }

  cep() {
    console.log('CEP:' + this.input.value);
  }

  telefone() {
    console.log('TELEFONE:' + this.input.value);
  }

  celular() {
    console.log('CELULAR:' + this.input.value);
  }

  frontController() {
    if (this.type === 'rg') this.rg();
    else if (this.type === 'cpf') this.cpf();
    else if (this.type === 'cep') this.cep();
    else if (this.type === 'telefone') this.telefone();
    else if (this.type === 'celular') this.celular();
  }

  addEvents() {
    this.input.addEventListener('keyup', this.frontController);
  }

  init() {
    if (this.type && this.input) this.addEvents();
  }
}
