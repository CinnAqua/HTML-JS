const form = document.getElementById('form-deposito');
const nome = document.getElementById('nome');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById('numeroconta');
    const valor = document.getElementById('valor');
    const mensagemSucesso = `Montante de: <b>${valor.value}</b> depositado para o cliente: <b>${nome.value}</b>  - conta <b>${numeroConta.value}</b>`
    
    formEValido = validaNome(nome.value)
    if (formEValido) {
        const containerMensagem = document.querySelector('.success');
        containerMensagem.innerHTML = mensagemSucesso;
        containerMensagem.style.display = 'block';

        nome.value = '';
        numeroConta.value = '';
        valor.value = ''
    } else {
        nome.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }
})

nome.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)
    if (!formEValido) {
        nome.classList.add('erro');
        //nome.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    } else {
        nome.classList.remove('erro');
        document.querySelector('.error').style.display = 'none';
    }
})