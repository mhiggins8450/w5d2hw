// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Task 1.0: Select and cache the <main> element 
//in a variable named mainEl.
const mainEl = document.querySelector('main');

// Create a <link> element to link the CSS file.
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'style.css';

// Append the <link> element to the <head> of the 
//HTML document.
document.head.appendChild(linkElement);

// Task 1.1: Set the background color of mainEl to
//the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2: Set the content of mainEl to 
//<h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3: Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// Task 2.0: Select and cache the <nav id="top-menu"> 
//element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1: Set the height of topMenuEl to be 100%.
topMenuEl.style.height = '100%';

// Task 2.2: Set the background color of topMenuEl 
//to the value stored in the --top-menu-bg CSS 
//custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3: Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Task 3.1: Iterate over the entire menuLinks array 
//and create <a> elements for each link.
menuLinks.forEach(link => {
    const newLink = document.createElement('a');
    newLink.href = link.href;
    newLink.textContent = link.text;
    topMenuEl.appendChild(newLink);
});

// Task 4.0: Select and cache the <nav id="sub-menu"> element.
var subMenuEl = document.getElementById('sub-menu');

// Task 4.1: Set the height of subMenuEl to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2: Set the background color of subMenuEl to the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3: Add the class of flex-around to subMenuEl.
subMenuEl.classList.add('flex-around');

// Task 4.4: Set the CSS position property of subMenuEl 
//to the value of 'absolute'.
subMenuEl.style.position = 'absolute';

// Task 4.5: Set the CSS top property of subMenuEl to 
//the value of '0'.
subMenuEl.style.top = '0';

// Task 5.1: Select and cache all the <a> elements inside 
//of `topMenuEl` in a variable named `topMenuLinks`.
var topMenuLinks = topMenuEl.querySelectorAll('a');

// Task 5.2: Attach a delegated 'click' event listener to 
//topMenuEl. The first line of code of the event listener 
//function should call the event object's preventDefault()
//method. The second line of code function should 
//immediately return if the element clicked was not an 
//<a> element.
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  if (event.target.tagName !== 'A') {
    return;
  }

  console.log(event.target.textContent);
});