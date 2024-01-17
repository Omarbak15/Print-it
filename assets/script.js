const slides = [
	{
		"image":"slide1.jpg",
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

let i = 0; 
const number = slides.length;


const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');


left.addEventListener("click", function () {
    if (i === 0) {
        i = number - 1;
    }
	else {
        i--;
    }
    banner(i);
});

right.addEventListener("click", function () {
    if (i === number - 1) {
        i = 0;
    } 
	else {
        i++;
    }
    banner(i);

});

function updateDot() {
	const ListDots = document.querySelectorAll(".dot");	
	for (let index = 0; index < ListDots.length;index++) {
	 
	  const dot = ListDots[index];
	  if (index == i){
		  dot.classList.add('dot_selected');		
		}
		else{
	  	dot.classList.remove('dot_selected');	 
		}
	}  
  }

function banner(i){
	
  	const element = slides[i];
		const img = document.querySelector(".banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/" + element.image);

		const p = document.querySelector(".banner-texte");
		p.innerHTML= element.tagLine;
		updateDot();
}


