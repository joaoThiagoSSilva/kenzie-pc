let ulCards = document.querySelector('.ul__cards')
let ulCarrinho = document.querySelector('.carrinho__vazio')
let btnPesquisa = document.querySelector('.form__btn-pesquisa')
let navBar = document.querySelector('.navbar')
let p1Cart = document.querySelector('.cart')
let p2Cart = document.querySelector('.addCart')
let inputSearch = document.querySelector('#search')
let todosP = document.querySelector('.all')
let todosDesk = document.querySelector('.desk')
let todosMonit = document.querySelector('.monit')
let todosPerif = document.querySelector('.perif')

const renderizaCards = (obj) => {
    const liCards = document.createElement('li')
    const figCards = document.createElement('figure')
    const imgCards = document.createElement('img')
    const divCards = document.createElement('div')
    const spanCards = document.createElement('span')
    const h3Cards = document.createElement('h3')
    const pCards = document.createElement('p')
    const precoCards = document.createElement('p')
    const btnCards = document.createElement('button')

    liCards.classList.add('ul__li__cards')
    figCards.classList.add('ul__li__figure')
    imgCards.classList.add('ul__li__figure__img')
    divCards.classList.add('ul__div__cards')
    spanCards.classList.add('ul__li__categoria')
    h3Cards.classList.add('ul__li__titulo')
    pCards.classList.add('ul__li__descricao')
    precoCards.classList.add('ul__li__preco')
    btnCards.classList.add('ul__li__btn')

    imgCards.src = obj.img
    spanCards.innerText = obj.tag
    h3Cards.innerText = obj.nameItem
    pCards.innerText = obj.description
    precoCards.innerText = `R$ ${obj.value},00`
    btnCards.innerText = obj.addCart
    btnCards.id = obj.id

    figCards.append(imgCards)
    divCards.append(spanCards, h3Cards, pCards, precoCards, btnCards)
    liCards.append(figCards, divCards)

    ulCards.append(liCards)
}
const percorrerLista = (obj) => {
    ulCards.innerHTML = ''
    for (let i = 0; i < obj.length; i++) {
        let data = obj[i]
        renderizaCards(data)
    }
}
percorrerLista(data)

let arrayCarrinho = []

// fazer uma funçao para mostrar (event)
//fazer um event listener em cima do nav vai ser do tipo click e receber a funçao mostrar como parametro
// criar 4 varias pros p na função
// cada um deles vai receber event.target
// if(o tag name === 'BUTTON')
// fot(data){
//um if(value do botao === todos) faz o push pra array e 3 else if
// percorrerLista(data)
// else if (botao.vlue === data[i].tag[0])

const criaCarrinho = (obj) => {

    const liCards = document.createElement('li')
    const figCards = document.createElement('figure')
    const imgCards = document.createElement('img')
    const divCards = document.createElement('div')
    const h4Cards = document.createElement('h4')
    const precoCards = document.createElement('p')
    const btnCards = document.createElement('button')

    liCards.classList.add('carrinho__ul__li')
    figCards.classList.add('carrinho__ul__li__figure')
    imgCards.classList.add('carrinho__ul__li__figure__img')
    divCards.classList.add('carrinho__tagP')
    h4Cards.classList.add('carrinho__ul__li__h4')
    precoCards.classList.add('carrinho__ul__li__preco')
    btnCards.classList.add('carrinho__ul__li__btn')

    imgCards.src = obj.img
    h4Cards.innerText = obj.nameItem
    precoCards.innerText = `R$ ${obj.value},00`
    btnCards.innerText = 'Remover'
    btnCards.id = obj.id

    liCards.append(figCards, divCards)
    figCards.append(imgCards)
    divCards.append(h4Cards, precoCards, btnCards)
    ulCarrinho.append(liCards)
    arrayCarrinho.push(obj)
}



const buttonAdd = document.querySelectorAll('.ul__li__btn')

let favCount = 0

buttonAdd.forEach((elemento) => {
    elemento.addEventListener('click', function (event) {
        const id = event.target.id
        criaCarrinho(data[id])
        favCount++
        document.querySelector('.qtd').innerText = `${favCount}`
        somaProd()
        ulCarrinho.classList.add('carrinho__ul')
        ulCarrinho.classList.remove('carrinho__vazio')
        p1Cart.remove()
        p2Cart.remove()
    })
})
ulCarrinho.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        let li = event.target.closest('li')
        li.remove()
        favCount--
        document.querySelector('.qtd').innerText = `${favCount}`
        arrayCarrinho.splice(li, 1)
        somaProd()
        //if array vazio add tag p
    }
})
const somaProd = () => {
    let totalSum = 0
    for (let i = 0; i < arrayCarrinho.length; i++) {
        totalSum += arrayCarrinho[i].value
    }
    document.querySelector('.tot').innerText = `R$ ${totalSum}`
}

// navBar.addEventListener('click', function(event){
//     if(data.tag == 'Desktop' && event.target.classList.contains('desk')){

// })
if (arrayCarrinho == []) {

    p1Cart = document.createElement('p')
    p2Cart = document.createElement('p')

    p1Cart.classList.add('cart')
    p2Cart.classList.add('addCart')

    ulCarrinho.append(p1Cart, p2Cart)

}
btnPesquisa.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e)
    let aux = inputSearch.value
    let result = buscar(aux)
    percorrerLista(result)
})
function buscar(parametro) {
    let auxiliar = []
    for (let i = 0; i < data.length; i++) {
        if(parametro == data[i].nameItem || parametro == data[i].tag || parametro == data[i].description){
            auxiliar.push(data[i])
         }  if(parametro.toLowerCase() == data[i].nameItem || parametro.toUpperCase() == data[i].tag){
            auxiliar.push(data[i])
        }
    }
    return auxiliar
}
const renderizaDesk = (obj) => {
    if(obj.tag == 'Desktop'){
    const liCards = document.createElement('li')
    const figCards = document.createElement('figure')
    const imgCards = document.createElement('img')
    const divCards = document.createElement('div')
    const spanCards = document.createElement('span')
    const h3Cards = document.createElement('h3')
    const pCards = document.createElement('p')
    const precoCards = document.createElement('p')
    const btnCards = document.createElement('button')

    liCards.classList.add('ul__li__cards')
    figCards.classList.add('ul__li__figure')
    imgCards.classList.add('ul__li__figure__img')
    divCards.classList.add('ul__div__cards')
    spanCards.classList.add('ul__li__categoria')
    h3Cards.classList.add('ul__li__titulo')
    pCards.classList.add('ul__li__descricao')
    precoCards.classList.add('ul__li__preco')
    btnCards.classList.add('ul__li__btn')

    imgCards.src = obj.img
    spanCards.innerText = obj.tag
    h3Cards.innerText = obj.nameItem
    pCards.innerText = obj.description
    precoCards.innerText = `R$ ${obj.value},00`
    btnCards.innerText = obj.addCart
    btnCards.id = obj.id

    figCards.append(imgCards)
    divCards.append(spanCards, h3Cards, pCards, precoCards, btnCards)
    liCards.append(figCards, divCards)

    ulCards.append(liCards)

    }
}
const percorrerDesk = (obj) => {
    ulCards.innerHTML = ''
    for (let i = 0; i < obj.length; i++) {
        let data = obj[i]
        renderizaDesk(data)
    }
}
const renderizaMonit = (obj) => {
    if(obj.tag == 'Monitor'){
    const liCards = document.createElement('li')
    const figCards = document.createElement('figure')
    const imgCards = document.createElement('img')
    const divCards = document.createElement('div')
    const spanCards = document.createElement('span')
    const h3Cards = document.createElement('h3')
    const pCards = document.createElement('p')
    const precoCards = document.createElement('p')
    const btnCards = document.createElement('button')

    liCards.classList.add('ul__li__cards')
    figCards.classList.add('ul__li__figure')
    imgCards.classList.add('ul__li__figure__img')
    divCards.classList.add('ul__div__cards')
    spanCards.classList.add('ul__li__categoria')
    h3Cards.classList.add('ul__li__titulo')
    pCards.classList.add('ul__li__descricao')
    precoCards.classList.add('ul__li__preco')
    btnCards.classList.add('ul__li__btn')

    imgCards.src = obj.img
    spanCards.innerText = obj.tag
    h3Cards.innerText = obj.nameItem
    pCards.innerText = obj.description
    precoCards.innerText = `R$ ${obj.value},00`
    btnCards.innerText = obj.addCart
    btnCards.id = obj.id

    figCards.append(imgCards)
    divCards.append(spanCards, h3Cards, pCards, precoCards, btnCards)
    liCards.append(figCards, divCards)

    ulCards.append(liCards)

    }
}
const percorrerMonit = (obj) => {
    ulCards.innerHTML = ''
    for (let i = 0; i < obj.length; i++) {
        let data = obj[i]
        renderizaMonit(data)
    }
}
const renderizaPerif = (obj) => {
    if(obj.tag == 'Periférico'){
        const liCards = document.createElement('li')
    const figCards = document.createElement('figure')
    const imgCards = document.createElement('img')
    const divCards = document.createElement('div')
    const spanCards = document.createElement('span')
    const h3Cards = document.createElement('h3')
    const pCards = document.createElement('p')
    const precoCards = document.createElement('p')
    const btnCards = document.createElement('button')

    liCards.classList.add('ul__li__cards')
    figCards.classList.add('ul__li__figure')
    imgCards.classList.add('ul__li__figure__img')
    divCards.classList.add('ul__div__cards')
    spanCards.classList.add('ul__li__categoria')
    h3Cards.classList.add('ul__li__titulo')
    pCards.classList.add('ul__li__descricao')
    precoCards.classList.add('ul__li__preco')
    btnCards.classList.add('ul__li__btn')

    imgCards.src = obj.img
    spanCards.innerText = obj.tag
    h3Cards.innerText = obj.nameItem
    pCards.innerText = obj.description
    precoCards.innerText = `R$ ${obj.value},00`
    btnCards.innerText = obj.addCart
    btnCards.id = obj.id

    figCards.append(imgCards)
    divCards.append(spanCards, h3Cards, pCards, precoCards, btnCards)
    liCards.append(figCards, divCards)

    ulCards.append(liCards)

    }
}
const percorrerPerif = (obj) => {
    ulCards.innerHTML = ''
    for (let i = 0; i < obj.length; i++) {
        let data = obj[i]
        renderizaPerif(data)
    }}

todosP.addEventListener('click', function (e) {
    e.preventDefault()
    percorrerLista(data)
})
todosDesk.addEventListener('click', function (e) {
    e.preventDefault()
    percorrerDesk(data)
})
todosMonit.addEventListener('click', function (e) {
    e.preventDefault()
    percorrerMonit(data)
})
todosPerif.addEventListener('click', function (e) {
    e.preventDefault()
    percorrerPerif(data)
})