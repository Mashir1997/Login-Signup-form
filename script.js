let signupbutton = document.querySelector('.signupbtn');
let signinbutton = document.querySelector('.signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.under-line');
let text = document.querySelector('.text');

signinbutton.addEventListener('click',()=>{
  namefield.style.maxHeight = '0';

  title.innerHTML = 'sign In';
  text.innerHTML = 'Forget Passwoerd ';
  signupbutton.classList.add('disable');
  signinbutton.classList.remove('disable');

  underline.style.transform = 'translateX(35px)';
})
  signupbutton.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';
    text.innerHTML = 'Passwoerd Suggestion ';
    title.innerHTML = 'sign Up';
    signupbutton.classList.remove('disable');
    signinbutton.classList.add('disable');
  
    underline.style.transform  = 'translateX(0)';
})