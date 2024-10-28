const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.js"

async function vizualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  console.log(dados);
  
}

vizualizarInformacoesGlobais()