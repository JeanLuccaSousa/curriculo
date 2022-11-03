// Portoghese 
$(document).ready(()=> { 
    $('.pt').click(function() {
        $('.language-selected').text('Português-Brasil')
        $('.language-selected').addClass('.change-pt')
        $('.titulo1').text('Sobre mim')
        $('.paragrafo1').text('Desenvolvedor Front-End')
        $('.titulo2').text('Principais ferramentas de trabalho')
        $('.btn1').text('Baixar CV')
        $('.btn2').text('Entre em contato')
        $('.rodape').text('Desenvolvido por JeanLuccaSousa')
    });
}) 

 // Italian 
$(document).ready(()=> { 
    $('.it').click(function() {
        $('.titulo1').text('Un po di me')
        $('.language').addClass('change.it')
        $('.language-selected').text('Italiano')
        $('.paragrafo1').text('Sviluppatore Front-End')
        $('.titulo2').text('Principali strumenti di lavoro')
        $('.btn1').text('Scarica CV')
        $('.btn2').text('Contatto')
        $('.rodape').text('Sviluppato da JeanLuccaSousa')
    });
}) 


// English
$(document).ready(()=> { 
    $('.en').click(function() {
        $('.titulo1').text('About me')
        $('.language-selected').text('English')
        $('.language-selected').addClass('.change-en')
        $('.paragrafo1').text('Front-End developer')
        $('.titulo2').text('Main work tools')
        $('.btn1').text('Download CV')
        $('.btn2').text('Contact')
        $('.rodape').text('Developed by JeanLuccaSousa')
    });
}) 
