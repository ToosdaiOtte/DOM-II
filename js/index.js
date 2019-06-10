// Your code goes here

// 1. MouseOver on .btn
const bttn = document.querySelectorAll('.btn');

bttn.forEach((index) => {
    index.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '3rem';
    });

// 2. MouseOut on .btn  
    index.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "";
    });
    
});

// 3. Rounded Imgs when DoubleClicked
const middleImgs = document.querySelectorAll('.img-content');
middleImgs.forEach((index) => { 
    index.addEventListener('dblclick', (event) => {
     event.target.style.borderRadius = '8rem';
    });
});

// 4. KeyDown Alert Box

const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    alert('Nothing selected!')
});

// 5. Change h4 color when Clicked

const colorChange = document.querySelectorAll('.destination');



colorChange[0].addEventListener('click', (event) => {
        event.target.setAttribute('style', 'color: yellow');  
    });

colorChange[1].addEventListener('click', (event) => {
    event.target.setAttribute('style', 'color: forestgreen');
});

colorChange[2].addEventListener('click', (event) => {
    event.target.setAttribute('style', 'color: #17A2B8');
    
});

// stopPropagation()


// 6. Alert box when Scrolled to bottom
window.addEventListener('scroll', () => {
	const scrollableContent = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY;
	if(Math.ceil(scrolled)===scrollableContent){
		alert('Check out our other pages!');
    }
});

// 7. 




// preventDefault() .nav
const nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
	event.preventDefault();
});



