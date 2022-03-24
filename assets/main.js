//chan navbar styles on scroll


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})




// show/hine faq answer

const faq = document.querySelectorAll('.faqs');

faq.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');

        //change icon

        const icon = faqs.querySelector('.faq_icon i');

        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }else {
            icon.className = "uil uil-plus"
        }
    })
})



// slide wipe

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //menu show/hide

  const menu = document.querySelector('.nav_menu');
  const menubtn = document.querySelector('.open-menu-btn');
  const closebtn = document.querySelector('.close-menu-btn');


menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
});


//close menu

const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}

closebtn.addEventListener ('click', closeNav)

