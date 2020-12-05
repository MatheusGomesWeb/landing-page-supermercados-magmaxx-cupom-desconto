const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  numero: {
    regex: /^\d+$/,
    message: 'Utilize apenas números',
  },
  cep: {
    regex: /[0-9]{5}-[0-9]{3}/,
    message: 'Informe um cep válido',
  },
};

export default function validateForm(type, value) {
  // Mensagem de erro
  let mensagem = '';

  // Valida os valores e compara com a regex
  function validate(value) {
    if (type === false && value === false) return true;

    if (value.length === 0) {
      mensagem = `Preencha um valor no campo: <strong style="margin-left: .3rem;">${type}</strong>`;
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
