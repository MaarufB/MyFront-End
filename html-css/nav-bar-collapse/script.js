const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


const hamburgerToggler = document.querySelectorAll(".nav-link");

hamburgerToggler.forEach(element => {
    element.addEventListener("click", () =>
    {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});

// Different approach
// const navItems = hamburgerToggler.length;

// for(var i=0; i<navItems; i++)
// {
//     document.querySelectorAll(".nav-link")[i].addEventListener("click", ()=>
//     {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     });
// }

var children = navMenu.children;
for(var i=0; i<children.length; i++)
{
    var child = children[i].childNodes[0];
    
    console.log(`${child.innerHTML}`);


}