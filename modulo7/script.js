const form = document.getElementById('numbers-form')
let formEValido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numberA = document.getElementById('campo-a');
    let numberB = document.getElementById('campo-b');
    let mensagemSucesso = `Muito bem! O número do campo B (${numberB.value}) é maior que o número do campo A (${numberA.value}).`

    formEValido = Number(numberB.value) > Number(numberA.value) ? true : false

    if (formEValido == true) {
        const containerMensagemSucesso = document.querySelector('.success')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numberB.style.border = 'none';
        document.querySelector('.error').style.display = 'none';

        numberA.value = '';
        numberB.value = '';
    } else {
        numberB.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }
})
