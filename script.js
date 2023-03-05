const input = document.querySelector('#getCep')
const btnEnviar = document.querySelector('#enviar')
const colarCepSpan = document.querySelector('#resultadoCep')
  
function handleClick(event) {
  event.preventDefault()
  if(input.value == ''){
    colarCepSpan.innerText = 'Está vazio'
  }else{
  buscaCep(input.value.replace('.', '').replace('-', ''))
  }
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    colarCepSpan.innerText = body.replace('{', '').replace('}', '')
    colarCepSpan.style.display = "block"
  })
.catch(error => {
  colarCepSpan.innerText = `Ocorreu um erro(${error})`
  colarCepSpan.style.display = "block"
})
}

btnEnviar.addEventListener('click', handleClick)