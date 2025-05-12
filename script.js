 let placarTimeA = 0;
let placarTimeB = 0;
let tempoSegundos = 0;
let temporizador;

function marcarGol(time) {
    if (time === 'a') {
        placarTimeA++;
        document.getElementById('placar-time-a').textContent = placarTimeA;
    } else if (time === 'b') {
        placarTimeB++;
        document.getElementById('placar-time-b').textContent = placarTimeB;
    }
}

function iniciarTemporizador() {
    if (!temporizador) {
        temporizador = setInterval(() => {
            tempoSegundos++;
            let minutos = Math.floor(tempoSegundos / 60);
            let segundos = tempoSegundos % 60;
            document.getElementById('tempo-jogo').textContent = `${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
        }, 1000);
    }
}

function pararTemporizador() {
    clearInterval(temporizador);
    temporizador = null;
}

function formatarTempo(tempo) {
    return tempo < 10 ? '0' + tempo : tempo;
}
