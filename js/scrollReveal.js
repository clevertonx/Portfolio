const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1300,
    reset: false,
   })

   scrollReveal.reveal(
    '.conteudo-home, .icons-contato ul, .header__left, .header__right, .header__image, .cleverton, .skills__content, .pre-btn, .nxt-btn, .project-container,  .colfooter, .main_footer_copy ',
    {
   interval: 300,
    },
   )