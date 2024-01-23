const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: false,
   })

   scrollReveal.reveal(
    '.conteudo-home, .icons-contato ul,.gif,.icons-tech, .gif-img, .pre-btn, .nxt-btn, .project-container, .content,  .colfooter, .main_footer_copy ',
    {
   interval: 300,
    },
   )