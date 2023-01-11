function tocarSom(idAudio) {
	document.querySelector(idAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

	const tecla = listaDeTeclas[i]
	const instrumento = tecla.classList[1]
	const idAudio = `#som_${instrumento}`

	tecla.onclick = function () {
		tocarSom(idAudio)
	}
	/*  Teste
	   if (keycode === 13 || keycode === 32) {
   
		   tecla.onkeydown = function () {
			   tecla.classList.add('ativa');
		   }
   
		   tecla.onkeyup = function () {
			   tecla.classList.remove('ativa');
		   }
	   }
   */

}
