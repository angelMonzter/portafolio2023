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

const mediaQueryLaptop = window.matchMedia('(max-width: 1500px)');
const mediaQueryMovil = window.matchMedia('(max-width: 900px)');

if (mediaQueryLaptop.matches) {
  window.onscroll = function() {
    let y = window.scrollY;
    const nav = document.querySelector('nav');
    if (y > 220) {
      nav.style.position = 'fixed';
      nav.style.top = '0%';
    }else{
      nav.style.position = 'absolute';
      nav.style.top = '39%';
    }
  };
}

if (mediaQueryMovil.matches) {
  window.onscroll = function() {
    let y = window.scrollY;
    const nav = document.querySelector('nav');
    if (y > 220) {
      nav.style.position = 'fixed';
      nav.style.top = '0%';
    }else{
      nav.style.position = 'absolute';
      nav.style.top = '23%';
    }
  };
}