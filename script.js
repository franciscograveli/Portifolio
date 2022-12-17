var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

//tabela de conhecimentos
const $= document.querySelector.bind(document)
/*
esse const associa ao $ o "document.querySelector",
 mas com a garantia "bind" de que o (document) sempre sera usado, para não perder a funcionalidade do This
*/
function TabNavigation(){
const html = {
    links: [...$('.tab-links').children],/*...+children, vai copiar e colar os arquivos em um array,facilita para manusear*/
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]'),
}
function hideAllTabContent(){
html.contents.forEach(section => {
    section.style.display = "none"
})
}/*forEach= para cada, para usa-lo que usamos o array*/
function removeAllActiveClass(){
    html.links.forEach(tab =>{
        tab.className = tab.className.replace(" active" , "")
    })
}
function showCurrentTab(id){
    const tabcontent = $('#' + id)
    tabcontent.style.display = "block"
}

function selectTab(event){
    hideAllTabContent()
    removeAllActiveClass()

    const target = event.currentTarget
    showCurrentTab(target.dataset.id)
    target.className += " active"
    
}
function listenForChange(){
    html.links.forEach(tab =>{
        tab.addEventListener('click',selectTab) /*reconhece quando clica*/
    })
}
function init(){ /*função de iniciar a aplicação*/ 
    hideAllTabContent() /*chamando a função*/
    listenForChange()

    html.openTab.click()
}
return{
    init
}}

/*quando a janela carregar, vai carregar a função de ficar ouvindo 'load' */
window.addEventListener('load',() =>{
     const tabNavigation = TabNavigation() /*cria uma variavel 'tabNavigation' e atribui valor*/
     tabNavigation.init()
})
// var conhecimento = document.querySelector(".menu-item #btn");
// conhecimento.addEventListener('click', function (){
//     console.log('BOAAAAAAAA');
//     window.scrollTo(document.body.scrollHeight);
// var height = document.querySelector(".sessao-header");
// var conhecimento = (document.scrollingElement || document.body);
// conhecimento.scrollTop = height.scrollHeight;
// })