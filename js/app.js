window.onscroll = function() {
  let y = window.scrollY;
  const nav = document.querySelector('nav');
  if (y > 450) {
  	nav.style.position = 'fixed';
  	nav.style.top = '5%';
  }else{
  	nav.style.position = 'absolute';
  	nav.style.top = '55%';
  }
};