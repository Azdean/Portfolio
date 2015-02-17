function headerScroll(){
		window.addEventListener('scroll', scrolled);
};

function scrolled(){
	var doc = document.documentElement;
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	var header = document.getElementsByTagName('header')[0];
	var portfolio = document.getElementById('portfolio');

	if(top >= "110"){
		header.style.backgroundColor = '#212121';
		portfolio.style.color =  '#1976D2';
	}
	else{
		header.style.backgroundColor = '';
		portfolio.style.color =  '#fcfcf8';
	}
};

new headerScroll();