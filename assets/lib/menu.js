new openMenu();

function openMenu(){
	var body = document.body;
	var toggle = document.getElementById('menuToggle');
	var header = document.getElementsByTagName('header')[0];
	var menu = document.getElementById('menuWrap');


	toggle.addEventListener('click', function(){

		if(body.style.top == null || body.style.top == '0em' || body.style.top == ""){
			body.style.top = '4.1em';
			menu.style.top = '0em';
			header.style.top = '4.1em';
		}
		else{
			body.style.top = '0em';
			menu.style.top = '-4em';
			header.style.top = '0em';
			}
	});
}