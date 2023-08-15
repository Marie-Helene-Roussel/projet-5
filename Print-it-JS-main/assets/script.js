const slides = [
	{
		"image":".slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0


// fonctionnement du slide
// fonctions qui permet de créer les bullet point//

function genererBullet(){
	for (let i=0; i < slides.length; i++){
		// Création d'une balise pour la première slide
		const bullet = document.createElement("div")
		if(i===0){
			bullet.className = "dot dot_selected"

		}
		else{
			bullet.className = "dot" 
		}
		

		const dotsBull = document.querySelector(".dots")
		dotsBull.appendChild(bullet)
	}
}



// Premier affichage du caroussel
genererBullet()

// mise en place du Listener pour faire fonctionner les flèches.

const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", function(slide1){
index = index+1
const slide = slides[index]
const bannerImg = document.querySelector(".banner-img")
const chemin = "./assets/images/slideshow/"
bannerImg.src = chemin+slide.image

})
console.log(arrowRight)
	
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", function(slide1){
index = index-1
const slide = slides[index]
const bannerImg = document.querySelector(".banner-img")
const chemin = "./assets/images/slideshow/"
bannerImg.src = chemin+slide.image

})
console.log(arrowLeft)




