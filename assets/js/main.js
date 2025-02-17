function globalEscope() {
    const form = document.getElementById("form");

    function formEvent(evento) {
        evento.preventDefault();

        const inputNota1 = document.getElementById("nota1");
        const inputNota2 = document.getElementById("nota2");

        const nota1 = Number(inputNota1.value);
        const nota2 = Number(inputNota2.value);

        if (isNaN(nota1) || isNaN(nota2)) {
            resultado('Por favor, digite números válidos.', false);
            return;
        }

        const calculo = getCalculo(nota1, nota2);
        const status = getStatus(calculo);
        const msg = `Sua média é de ${calculo} e está ${status}`;
        resultado(msg);
    }

    function getCalculo(nota1, nota2) {
        const media = (nota1 + nota2) / 2
        return Number(media.toFixed(1));
    }

    function getStatus(calculo) {
        return calculo >= 5 ? 'aprovado' : 'reprovado';
    }

    function criarP() {
        const p = document.createElement('p');
        return p;
    }

    function resultado(msg) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';

        const p = criarP();
        p.innerHTML = msg;
        resultado.appendChild(p);
        p.classList.add('p-resultado');

    }
    form.addEventListener('submit', formEvent);
}

globalEscope();
