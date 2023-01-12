const cep = document.getElementById("cep")

cep.addEventListener("change", buscarCep)

async function buscarCep(){
    const url = "https://viacep.com.br/ws/"+cep.value+"/json/"

    const busca = await fetch(url)

    const respostaTexto = await busca.json()

    //console.log(respostaTexto.logradouro)
    document.getElementById("rua").value = respostaTexto.logradouro
    document.getElementById("bairro").value = respostaTexto.bairro


}