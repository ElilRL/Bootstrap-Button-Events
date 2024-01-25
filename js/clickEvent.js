let btnOne = document.getElementById('click');
btnOne.addEventListener('click', function(event){
    event.target.style.background = "#a0b96b";
});


let btnThree = document.getElementById('rightClick');
btnThree.addEventListener('contextmenu' , function(e){
    e.target.style.background = "#a0b96b";
});


let btnFour = document.getElementById('mousePointer');
btnFour.addEventListener('mouseenter' , function(ev){
    ev.target.style.background = "#69fffc";
});
