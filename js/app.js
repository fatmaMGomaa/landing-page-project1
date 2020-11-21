/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let nav_ul = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let my_fragmant = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// the refernse for this method https://vanillajstoolkit.com/helpers/isinviewport/
function isInViewport (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

function activeTab (section) {
    let tabs = document.querySelectorAll(".menu__link");
    tabs.forEach((tab) => {
        if (tab.getAttribute('href') === `#${section.getAttribute('id')}`){
            tabs.forEach(link => link.classList.remove("active_tab"));
            tab.classList.add("active_tab");
        };
    });
};

function activeSection () {
    sections.forEach((section) => {
        if (isInViewport(section)){
            sections.forEach(sec => sec.classList.remove("your-active-class"));
            section.classList.add("your-active-class");
            activeTab (section);
        };
    });
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (i = 0; i < sections.length; i++) {
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.href = `#${sections[i].getAttribute("id")}`;
    new_a.classList.add("menu__link");
    new_a.textContent = sections[i].getAttribute("data-nav");
    new_li.appendChild(new_a);
    my_fragmant.appendChild(new_li);
}
nav_ul.appendChild(my_fragmant);
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
activeSection ()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', function (event) {
    activeSection ();
});


