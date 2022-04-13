window.onload = () => { 
  const menuScroll = document.querySelector('ul'); 
   
  document.addEventListener('scroll', event => { 
      console.log(event.target.scrollTop) 
  });
   
  const smoothScrollLinks = document.querySelectorAll('.navigation__link'); 
   
  for (let link of smoothScrollLinks) { 
    link.addEventListener('click', event => { 
       event.preventDefault(); 
       
      const target = event.target; 
      const elementToScroll = document.querySelector(target.getAttribute('href')); 
      elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'end'}); 
    }); 
  } 
};