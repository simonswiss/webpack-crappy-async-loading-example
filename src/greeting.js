// this module will be async loaded 
// when clicking on our UI button

export default function() {
  
  const greeting = document.createElement('h3')
  greeting.innerHTML = `Hello, I am async loaded!`
  
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(greeting);

}