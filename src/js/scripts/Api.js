export async function buscarCep(cep) {
  const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const json = await resp.json();

  if (resp.status === 200) {
    return {
      logradouro: json.logradouro,
      bairro: json.bairro,
    };
  }
}
