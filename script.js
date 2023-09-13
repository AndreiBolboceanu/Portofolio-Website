
//HAMBURGER MENU TOGGLE

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effects

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Freelancer!','Passionate Developer!','Father and Husband!',],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
})

//Active Link State On Scroll

//Get all Links

let navLinks = document.querySelectorAll('nav ul li a')

//Get all Sections

let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop = section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});

//Resume Download

let button = document.querySelector("body a");
button.addEventListener("click", () => {
    const span = document.querySelector ("a span");
    button.style.paddingRight = '10px';
    span.style.visibility = "visible";
    setTimeout(() =>{
        span.style.visibility="hidden";
        button.style.transition = ".3s ease-in-out";
        button.style.paddingRight = "0px";
    }, 3000);
})



