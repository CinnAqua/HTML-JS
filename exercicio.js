const form = document.getElementById('formularioexercicio');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroa = document.getElementById('numeroa');
    const numerob = document.getElementById('numerob');
    const resultado1 = document.querySelector('.resultado1');
    const resultado2 = document.querySelector('.resultado2');

    if (numerob.value >> numeroa.value) {
        const resultadoCerto = `Válido!`;
        resultado1.innerHTML = resultadoCerto;
        resultado1.style.display = 'flex';
        resultado2.style.display = 'none';
    } else {
        const resultadoErrado = `Inválido!`;
        resultado2.innerHTML = resultadoErrado;
        resultado2.style.display = 'flex';
        resultado1.style.display = 'none';
    }
})