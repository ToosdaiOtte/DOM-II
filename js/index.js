// Your code goes here

// 1. Change color when Clicked
const colorChange = document.querySelectorAll('.destination');

colorChange[0].addEventListener('click', (event) => {
         event.target.setAttribute('style', 'color: yellow');
         setTimeout(function(){
            event.target.setAttribute('style', 'color: black');  // Change the color back to the original
          }, 3000); 
    });

colorChange[1].addEventListener('click', (event) => {
    event.target.setAttribute('style', 'color: forestgreen');
    setTimeout(function(){
        event.target.setAttribute('style', 'color: black');  // Change the color back to the original
      }, 3000); 
});

colorChange[2].addEventListener('click', (event) => {
    event.target.setAttribute('style', 'color: #17A2B8');
    setTimeout(function(){
        event.target.setAttribute('style', 'color: black');  // Change the color back to the original
      }, 3000); 
});

// 2. MouseOver on .btn
const bttn = document.querySelectorAll('.btn');

bttn.forEach((index) => {
    index.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '3rem';
    });

// 3. MouseOut on .btn  
    index.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "";
    });
    
// Stop Propagation on button text
    index.addEventListener('click', (event) => {
        event.target.style.color = 'black';
        event.stopPropagation();
    });
});

// 4. Rounded Imgs when DoubleClicked
const middleImgs = document.querySelectorAll('.img-content');
middleImgs.forEach((index) => { 
    index.addEventListener('dblclick', (event) => {
     event.target.style.borderRadius = '8rem';
    });
});

// 5. KeyDown Alert Box
const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    alert('Nothing selected!')
});

// 6. Alert box when Scrolled to bottom
window.addEventListener('scroll', () => {
	const scrollableContent = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY;
	if(Math.ceil(scrolled)===scrollableContent){
		alert('Check out our other pages!');
    }
});

// 7. Yellow Background when Copied
const pTags = document.querySelectorAll('p');
pTags.forEach((index) => {
    index.addEventListener('copy', (event) => {
        event.target.style.color = 'yellow';
    });
});

// // 8. MouseEnter on .main-navigation
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('mouseenter', (event) => {
	event.target.setAttribute('style', 'border-bottom: solid #C0C0C0');
});

// 9. MouseLeave on .main-navigation
mainNav.addEventListener('mouseleave', (event) => {
    event.target.setAttribute('style', 'border-bottom: dashed #C0C0C0');
});

// 10. Prevent Default context menu on .intro Img
const introImg = document.querySelector('.intro img');
introImg.addEventListener('contextmenu', (event) => {
	event.preventDefault();
});

// preventDefault() .nav
const nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
	event.preventDefault();
});



