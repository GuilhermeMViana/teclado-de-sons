function tocarSomPom() {
	document.querySelector('#som_tecla_pom').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocarSomPom;
listaDeTeclas[1].onclick = tocarSomClap;
listaDeTeclas[2].onclick = tocarSomTim;
listaDeTeclas[3].onclick = tocarSomPuff;
listaDeTeclas[4].onclick = tocarSomSplash;
listaDeTeclas[5].onclick = tocarSomToim;
listaDeTeclas[6].onclick = tocarSomPsh;
listaDeTeclas[7].onclick = tocarSomTic;
listaDeTeclas[8].onclick = tocarSomTom;

