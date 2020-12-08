const types = {
  dtNascimento: {
    /* 
      25.04.2017  
      02.04.2017  
      2.4.2017  
      25/04/2017  
      5/12/2017  
      15/2/2017  
      25-04-2017  
      6-10-2017  
      16-5-2017 
    */
    regex: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
    message: 'Data de Nascimento inválida',
  },
  rg: {
    /*
    00.000.000-0 | X
    */
    regex: /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/,
    message: 'RG inválido',
  },
  cpf: {
    regex: /(?:\d{3}[-.]?){3}\d{2}/,
    message: 'CPF inválido',
  },
  cep: {
    regex: /[0-9]{5}-[0-9]{3}/,
    message: 'Informe um cep válido',
  },
  numero: {
    regex: /[\d]/,
    message: 'Utilize apenas números',
  },
  celular: {
    regex: /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/,
    message: 'Celular inválido',
  },
  telefone: {
    /*
    '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
    */
    regex: /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/,
    message: 'Telefone inválido',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
};

export default function validateForm(type, value) {
  // Mensagem de erro
  let mensagem = '';

  // Valida os valores e compara com a regex
  function validate(value) {
    if (type === false && value === false) return true;

    if (!value) {
      mensagem = `Preencha um valor no campo: <strong class="c-modal__list__campo">${type}</strong>`;
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      mensagem = `${types[type].message}: <strong style="margin-left: .3rem;">${type}</strong>`;

      return false;
    } else {
      mensagem = '';

      return true;
    }
  }

  // Executa a função para retornar o valor no objeto
  validate(value);

  // Retorna um objeto com o valor de erro
  return {
    mensagem,
  };
}
