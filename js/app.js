
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


// 

//this is the area of declaration my global variables to use them in the entire project.
const sectionsList = document.querySelectorAll('section');//Gettiing Sections Elements.
const urlNavbar = document.getElementById("navbar__list");// Getting `Nav Bar List` Element.
const fragmentList= document.createDocumentFragment();


/**
 * End Global Variables

*/
const removingActiveClass =()=>{
    sectionsList.forEach((activeSection)=>{
        activeSection.classList.remove("your-active-class");
    })
}

//for loop through sections List
for(let item = 0; item < sectionsList.length; item++){
    let contentOfLink = sectionsList[item].getAttribute("data-nav");
    let aNewLink = document.createElement("A");
    aNewLink.textContent = contentOfLink;
    let aNewLi = document.createElement("li");
    aNewLi.appendChild(aNewLink);
    urlNavbar.appendChild(aNewLi);
    aNewLink.addEventListener("click", (event)=> {
        sectionsList[item].scrollIntoView({behavior:"smooth"});

    })
    
fragmentList.appendChild(aNewLi);
}
urlNavbar.appendChild(fragmentList);

// build the nav
/*to make navigation movable*/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */


const findSectionInviewPort=()=>{
    sectionsList.forEach((section)=>{
        const clientRect = section.getBoundingClientRect();
        if(clientRect.top > 5 && clientRect.top < 295){
    
            const theNavigationSection = section.getAttribute("data-nav");
            removingActiveClass();
            section.classList.add("your-active-class");// Add class 'active' to section when near top of viewport
            const collecLinks = document.querySelectorAll("a");
            collecLinks.forEach((link)=>{
                if(link.innerText == theNavigationSection){
                    collecLinks.forEach((used_link)=>{
                        used_link.style.background = "green";
                    })
                    link.style.background = "blue";
                }
    
            })
        }
    })
}
const toggleActiveState= () =>{
    goToTop();
    findSectionInviewPort();
}

window.addEventListener("scroll", toggleActiveState);




/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var stopScroll = window.pageYOffset;
window.onscroll = ()=> {
  var presenScroll = window.pageYOffset;
  if (stopScroll > presenScroll) {
    document.getElementById("navbar__list").style.top = "0";
  } else {
    document.getElementById("navbar__list").style.top = "-50px";
  }
  stopScroll  = presenScroll;
}



/**
 * End Main Functions
 * Begin Events
 * 
*/
// scroll to top button 


// Go to top button
const goToTop = () => {
    const backToTopBtn = document.querySelector("#toTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

const topFunction = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}




