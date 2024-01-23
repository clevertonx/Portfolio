const projectContainers = [...document.querySelectorAll('.project-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

projectContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    let intervalId;

    // Função para avançar o carrossel
    const nextSlide = () => {
        if (item.scrollLeft + containerWidth >= item.scrollWidth) {
            // Verifica se chegou ao final
            item.scrollLeft = 0; // Volta ao início
        } else {
            item.scrollLeft += containerWidth;
        }
    };

    // Função para retroceder o carrossel
    const prevSlide = () => {
        item.scrollLeft -= containerWidth;
    };

    // Adiciona listeners aos botões
    nxtBtn[i].addEventListener('click', () => {
        nextSlide();
        clearInterval(intervalId); // Limpa o intervalo para evitar conflitos
    });

    preBtn[i].addEventListener('click', () => {
        prevSlide();
        clearInterval(intervalId);
    });

    // Adiciona rotação automática
    const startAutoScroll = () => {
        intervalId = setInterval(() => {
            nextSlide();
        }, 2000); // Ajuste o intervalo de tempo conforme necessário (aqui, é 5000 milissegundos ou 5 segundos)
    };

    // Inicia rotação automática quando a página carrega
    startAutoScroll();

    // Pausa a rotação automática quando o mouse está sobre o carrossel
    item.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Reinicia a rotação automática quando o mouse sai do carrossel
    item.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
});
