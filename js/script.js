/*const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn,onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
}
*/


//
//animacion

const typed = new Typed('.typed', {
    strings: [
        '<i class="saludos">Hola Keily</i>', 
        '<i class="saludos">como estas</i>', 
        '<i class="saludos">espero que bien</i>',
        '<i class="saludos">puede ser que esto te agrade</i>', 
        '<i class="saludos">o puede ser que no </i>',
        '<i class="saludos">podria decir  mil palabra</i>',
        '<i class="saludos">pero solo serian palabras vacias</i>',
        '<i class="saludos">espero que te guste</i>',
        '<i class="saludos">feliz cumpleaño</i>',
        '<i class="saludos">ahhh mentira </i>',
        '<i class="saludos">tu cumpleaño ya paso</i>',
        '<i class="saludos">solo estoy probando la pagina</i>',
        '<i class="saludos">chaoo GOOD NIGH.</i>'




        
        ],

        //stringsElement:'#cadenas-texto',
        typeSpeed: 75,
        startDelay: 1500,
        backSpeed: 100,
        smartBackspace: true,
        shuffle: false,
        blackDelay: 5000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',

});

/*const typed2 = new Typed('.typed2', {
    strings: [
        '<i class="saludos2">como estas</i>', 
        '<i class="saludos2">puede ser </i>', 
        '<i class="saludos2">como estas</i>',
        '<i class="saludos2">espero que bien</i>'
        
        ],

        //stringsElement:'#cadenas-texto',
        typeSpeed: 75,
        startDelay: 6000,
        backSpeed: 50,
        smartBackspace: true,
        shuffle: false,
        blackDelay: 2500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',

});

*/