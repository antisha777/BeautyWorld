import { TabsManager } from './tabs.js';
import { ExpandableText } from './expan-text.js';

window.onload = () =>  {

    // Form

    const form = document.getElementById('form');

	form.addEventListener('submit', event => {
		event.preventDefault();

		const formData = Array
			.from(event.target.elements)
			.filter(el => el.name)
			.map(el => {
			const {value, name} = el;
			return { [name] : value};
			});

			console.log(formData);
	});

    // Scroll

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

    // Tabs

    const tabsElem = document.getElementById('myTabs'); 
    new TabsManager(tabsElem);

    // Expan-text
    
    const textElems = document.querySelectorAll('.expandable-text'); 
   
    for (const el of textElems) { 
    new ExpandableText(el, 362); 
  }
    
}