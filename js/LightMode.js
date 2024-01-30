document.getElementById('removeCheckbox').addEventListener('change', function() {
    var backgroundContainer = document.getElementById('background-container');
    var sectionHome = document.getElementById('section-home');
    var h1Element = document.querySelector('.conteudo-home h1');
    var h2Element = document.querySelector('.conteudo-home h2');
    var pElement = document.querySelector('.conteudo-home p');
    var icons = document.querySelectorAll('.icons-contato img');
    var navItems = document.querySelectorAll('.nav li a');
    var navUl = document.querySelector('.nav');
    var header = document.querySelector('.header');
    var sobreMimTitle = document.querySelector('#section-sobre-mim h1');
    var sobreMimContent = document.querySelector('#section-sobre-mim p');
    var clevertonImage = document.querySelector('.cleverton');
    var skillsSection = document.querySelector('#skills');
    var skillsH2 = document.querySelector('#skills h2');
    var skillsP = document.querySelector('#skills p');
    var skillsItemH3All = document.querySelectorAll('.skills__item h3');
    var skillsItemPAll = document.querySelectorAll('.skills__item .description-tech');
    var projetosH3 = document.querySelector('#section-projetos .quarto-titulo');
    var projetosH2 = document.querySelectorAll('#section-projetos h2');
    var projetosP = document.querySelectorAll('#section-projetos p');
    var projetosA = document.querySelectorAll('#section-projetos a');
    var footerH3 = document.querySelectorAll('#rodape-contato h3.titleFooter');
    var mainFooter = document.querySelector('.main_footer');
    var mainFooterParagraph = document.querySelectorAll('.main_footer p');
    var socialIcons = document.querySelectorAll('.colfooter img.botao');
    var paragraphs = document.querySelectorAll('.main_footer_copy p');
    var mainFooterCopy = document.querySelector('.main_footer_copy');
    var anchorTags = document.querySelectorAll('.main_footer_copy a');

    

    if (this.checked) {
        backgroundContainer.style.backgroundImage = 'none';
        backgroundContainer.style.background = '#e4e5f1';
        sectionHome.style.backgroundImage = 'none';
        sectionHome.style.backgroundColor = '#f3f6fb';
        h1Element.style.fontFamily = 'sans-serif';
        h1Element.style.color = '#3c415c';

        h2Element.style.fontFamily = 'sans-serif';
        h2Element.style.color = '#3c415c';

        pElement.style.fontFamily = 'sans-serif';
        pElement.style.color = 'black';
        pElement.style.webkitTextStrokeColor = 'transparent';
        pElement.style.fontSize = '1.2rem';
        

        header.style.backgroundColor = '#d9d9d9';
        navUl.style.backgroundColor = '#d9d9d9';

        navItems.forEach(function(item) {
            item.style.color = 'black'; 
            item.style.fontFamily = 'sans-serif'; 
        });
        icons.forEach(function(icon) {
            icon.style.filter = 'brightness(0%)'; 
        });

        sobreMimTitle.style.fontFamily = 'sans-serif'; 
        sobreMimTitle.style.color = '#3c415c';
        sobreMimTitle.style.webkitTextStrokeColor = 'transparent';

        sobreMimContent.style.fontFamily = 'Arial, sans-serif'; 
        sobreMimContent.style.color = 'black'; 
        sobreMimContent.style.backgroundColor = 'white'; 
        sobreMimContent.style.border = '5px solid #3c415c'; 
        sobreMimContent.style.webkitTextStrokeColor = 'transparent';
        sobreMimContent.style.fontSize = '1rem';

        clevertonImage.style.background = 'transparent';

        skillsSection.style.backgroundColor = '#f3f6fb';
        if (window.innerWidth <= 768) {
            skillsSection.style.height = '350vh'; 
        } else {
            skillsSection.style.height = ''; 
        }

        skillsH2.style.fontFamily = 'sans-serif'; 
        skillsH2.style.color = '#3c415c';
        skillsH2.style.webkitTextStrokeColor = 'transparent';

        skillsP.style.fontFamily = 'sans-serif'; 
        skillsP.style.color = 'black'; 
        skillsP.style.webkitTextStrokeColor = 'transparent';

        skillsItemH3All.forEach(function(h3) {
            h3.style.fontFamily = 'sans-serif';
            h3.style.color = '#3c415c';
            h3.style.webkitTextStrokeColor = 'transparent';
            h3.style.fontSize = '1.5rem';
        });

        skillsItemPAll.forEach(function(p) {
            p.style.fontFamily = 'sans-serif';
            p.style.color = 'black';
            p.style.webkitTextStrokeColor = 'transparent';
            p.style.backgroundColor = 'white';
            p.style.border = '1px solid #3c415c';
            p.style.fontSize = '1rem';
        });

        projetosH3.style.fontFamily = 'sans-serif';
        projetosH3.style.color = '#3c415c';
        projetosH3.style.webkitTextStrokeColor = 'transparent';

        projetosH2.forEach(function(h2) {
            h2.style.fontFamily = 'sans-serif';
            h2.style.color = '#3c415c';
            h2.style.webkitTextStrokeColor = 'transparent';
        });

        projetosP.forEach(function(p) {
            p.style.fontFamily = 'sans-serif';
            p.style.color = 'black';
            p.style.webkitTextStrokeColor = 'transparent';
            p.style.backgroundColor = '#f3f6fb';
        });

        projetosA.forEach(function(a) {
            a.style.backgroundColor = '#3c415c'; 
        });

        footerH3.forEach(function(h3) {
            h3.style.fontFamily = 'sans-serif'; 
            h3.style.color = 'black'; 
        });

        mainFooter.style.background = 'linear-gradient(to bottom, white, #3c415c)';
        mainFooterParagraph.forEach(function(mainFooterP) {
            mainFooterP.style.fontFamily = 'sans-serif';
            mainFooterP.style.color = 'black'; 
            mainFooterP.style.fontSize = '1rem'
        });

        socialIcons.forEach(function(socialIcon) {
            socialIcon.style.filter = 'brightness(0%)'; 
        });

        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = 'black';
            paragraph.style.fontSize = '0.8rem';
        });

        mainFooterCopy.style.background = '#9394a5';
        anchorTags.forEach(function(anchorTag) {
            anchorTag.style.color = 'black';
        });
      
    } else {

        backgroundContainer.style.backgroundImage = 'url("../utils/neon-lights-dark-5824x3264-12563.jpg")';
        sectionHome.style.backgroundImage = 'url("../../utils/circuit-lines-upscaled (1).png")';
        sectionHome.style.backgroundColor = '';
        h1Element.style.fontFamily = '';
        h1Element.style.color = '';

        h2Element.style.fontFamily = '';
        h2Element.style.color = '';

        pElement.style.fontFamily = '';
        pElement.style.color = '';
        pElement.style.webkitTextStrokeColor = '';
        pElement.style.fontSize = '';

        header.style.backgroundColor = '';
        navUl.style.backgroundColor = '';

        navItems.forEach(function(item) {
            item.style.color = ''; 
            item.style.fontFamily = ''; 
        });
        icons.forEach(function(icon) {
            icon.style.filter = ''; 
        });

        sobreMimTitle.style.fontFamily = '';
        sobreMimTitle.style.color = '';
        sobreMimTitle.style.backgroundColor = '';
        sobreMimTitle.style.border = '';
        sobreMimTitle.style.webkitTextStrokeColor = '';
        

        sobreMimContent.style.fontFamily = '';
        sobreMimContent.style.color = '';
        sobreMimContent.style.backgroundColor = '';
        sobreMimContent.style.border = '';
        sobreMimContent.style.webkitTextStrokeColor = '';
        sobreMimContent.style.fontSize = '';

        clevertonImage.style.background = '';

        skillsSection.style.backgroundColor = '';
        skillsSection.style.height = '';


        skillsH2.style.fontFamily = '';
        skillsH2.style.color = '';
        skillsH2.style.webkitTextStrokeColor = '';

        skillsP.style.fontFamily = '';
        skillsP.style.color = '';
        skillsP.style.webkitTextStrokeColor = '';

        skillsItemH3All.forEach(function(h3) {
            h3.style.fontFamily = '';
            h3.style.color = '';
            h3.style.webkitTextStrokeColor = '';
            h3.style.fontSize = '';
        });

        skillsItemPAll.forEach(function(p) {
            p.style.fontFamily = '';
            p.style.color = '';
            p.style.webkitTextStrokeColor = '';
            p.style.backgroundColor = '';
            p.style.border = '';
            p.style.fontSize = '';
        });

        projetosH3.style.fontFamily = '';
        projetosH3.style.color = '';
        projetosH3.style.webkitTextStrokeColor = '';

        projetosH2.forEach(function(h2) {
            h2.style.fontFamily = '';
            h2.style.color = '';
            h2.style.webkitTextStrokeColor = '';
        });
    
        projetosP.forEach(function(p) {
            p.style.fontFamily = '';
            p.style.color = '';
            p.style.webkitTextStrokeColor = '';
            p.style.backgroundColor = '';
        });

        projetosA.forEach(function(a) {
            a.style.backgroundColor = ''; 
        });

        footerH3.forEach(function(h3) {
            h3.style.fontFamily = '';
            h3.style.color = '';
        });
        mainFooter.style.background = '';
        mainFooterParagraph.forEach(function(mainFooterP) {
            mainFooterP.style.fontFamily = ''; 
            mainFooterP.style.color = ''; 
            mainFooterP.style.fontSize = ''
        });

        
        socialIcons.forEach(function(socialIcon) {
            socialIcon.style.filter = ''; 
        });

        paragraphs.forEach(function(paragraph) {
            paragraph.style.color = '';
            paragraph.style.fontSize = '';
        });

        mainFooterCopy.style.background = '';
        anchorTags.forEach(function(anchorTag) {
            anchorTag.style.color = '';
        });
        
        
    }
});