function tocarSom(seletorAudio) {
	const elemento = document.querySelector(seletorAudio).play()

	if (elemento && elemento.localName === 'audio') {
		elemento.play()
	} else {
		console.log('Elemento não encontrado ou inválido.')
	}

}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let i = 0; i < listaDeTeclas.length; i++) {

	const tecla = listaDeTeclas[i]
	const instrumento = tecla.classList[1]
	const seletorAudio = `#som_${instrumento}`

	tecla.onclick = function () {
		tocarSom(seletorAudio)
	}

	tecla.onkeydown = function (event) {

		if (event.code === 'Enter' || event.code === 'Space') {
			tecla.classList.add('ativa');
		}

	}

	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	}

}
