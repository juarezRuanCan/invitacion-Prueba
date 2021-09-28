function animar15() {
	caT.style.animation = "aparecer 1s infinite"
}

function animar14() {
	caT.style.animation = "slide_r 1s"
	teT.style.animation = 'aparecer 1s infinite'
	setTimeout(animar15, 1000)
}

function animar13() {
	teT.style.animation = "slide_l 1s"
	doT.style.animation = "aparecer 1s infinite"
	setTimeout(animar14, 1000)
}

function animar12() {
	spT.style.animation = ""
	nT.style.animation = ""
	dT.style.animation = ""
	onT.style.animation = ""


	doT.style.animation = "slide_r 1s"
	setTimeout(animar13, 1000)
}

function pausar4() {
	onT.style.animation = "aparecer 1s infinite"
	setTimeout(animar12, 6000)
}
function animar11() {
	onT.style.animation = "slide_l 400ms"
	dT.style.animation = "aparecer 1s infinite"
	setTimeout(pausar4, 400)
}
function animar10() {
	dT.style.animation = "slide_r 400ms"
	nT.style.animation = "aparecer 1s infinite"
	setTimeout(animar11, 400)
}
function animar9(){
	nT.style.animation = "slide_l 400ms"
	spT.style.animation = "aparecer 1s infinite"
	setTimeout(animar10, 400)
}
function animar8(){
	sxT.style.animation = ""
	spT.style.animation = "slide_r 1s"
	setTimeout(animar9, 1000)
}
function pausar3(){
	sxT.style.animation = "aparecer 1s infinite"
	setTimeout(animar8, 1000)
}
function animar7(){
	cT.style.animation = "";
	qT.style.animation = "";
	sxT.style.animation = "slide_l 1s"
	setTimeout(pausar3, 1000)
}
function pausar2(){
	qT.style.animation = "aparecer 1s infinite"
	setTimeout(animar7, 1500)
}
function animar6(){
	qT.style.animation = "slide_r 1s"
	cT.style.animation = "aparecer 1s infinite"
	setTimeout(pausar2, 1000)

}
function animar5(){
	cT.style.animation = "slide_l 1s"
	setTimeout(animar6, 1000)
}
function animar4(){
	pT.style.animation = "";
	sT.style.animation = "";
	tT.style.animation = "";
	setTimeout(animar5, 100)
}
function pausar(){
	tT.style.animation = "aparecer 1s infinite";
	setTimeout(animar4, 5000)
}
function animar3(){
	tT.style.animation = "slide_l 1s";
	sT.style.animation = "aparecer 1s infinite";
	setTimeout(pausar, 1000)
}
function animar2(){
	sT.style.animation = "slide_r 1s";
	pT.style.animation = "aparecer 1s infinite";
	setTimeout(animar3, 1000)
}
function animar(){
	pT.style.animation = "slide_l 1s";
	setTimeout(animar2, 1000)
}

setTimeout(animar, 1500)







function boton() {
	btn.style.opacity = "1"
}

function intercambio() {
	sobres.style.opacity = "0"
	sobre.style.opacity = "1"
	sobres.style.animation = ""
	setTimeout(boton, 600)
}

function rotacion() {
	sobres.style.animation = "rotacion 1s"
	sobre.style.animation = "rotacion 1s"
	setTimeout(intercambio, 500)
}

function aparicion() {
	sobres.style.animation = "zoom 1s"
	sobres.style.opacity = "1"
	setTimeout(rotacion, 1500)
}

setTimeout(aparicion, 1000)

