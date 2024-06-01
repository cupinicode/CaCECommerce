fetch('./data/fashionJSON.json')
.then(response => {
    if(!response.ok){
        throw new Error('No se pudo cargar el archivo');
    }
    return response.json();
})
.then(data => {
    cargarProductos(data);
})
.catch(error => {
    console.error(error);
});

function crearCard(info, index){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', `card-${index}`);
    
    card.innerHTML = `
        <div class="card-top">
            <img src="${info.ImageURL}" alt="" class="imagen-card">
            <div class="favorito-card">
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0002 4.39686L11.853 3.21767C9.16024 0.449676 4.22266 1.40487 2.44026 4.88486C1.60347 6.52166 1.41467 8.88485 2.94266 11.9008C4.41466 14.8048 7.47705 18.2832 13.0002 22.072C18.5234 18.2832 21.5842 14.8048 23.0578 11.9008C24.5858 8.88325 24.3986 6.52166 23.5602 4.88486C21.7778 1.40487 16.8402 0.448076 14.1474 3.21607L13.0002 4.39686ZM13.0002 24C-11.5325 7.78885 5.44665 -4.86391 12.7186 1.82887C12.8146 1.9174 12.9085 2.0086 13.0002 2.10247C13.0904 2.00801 13.1843 1.91727 13.2818 1.83047C20.5522 -4.86711 37.533 7.78725 13.0002 24Z" fill="black"/>
                </svg>  
            </div>
        </div>
        <div class="card-info">
            <p class="titulo-card">${info.ProductTitle}</p>
            <p class="precio-card">${parseInt(Math.random() * 80000 + 20000)}</p>
            <a class="boton-card" id="item-${index}" href="#">Agregar al carrito</a>
        </div>
    `;

    card.querySelector('.favorito-card').addEventListener('click', () => {
        card.querySelector('.favorito-card').classList.toggle('liked');
    });

    card.querySelector('.titulo-card').addEventListener('click', () => {
        localStorage.setItem('producto', JSON.stringify(info));
        window.location.href = './producto.html';
    });

    return card;
}

function cargarProductos(listaProductos){
    let contenedor = document.getElementById('contenedor-productos');
    const listaCarrito = document.querySelector('.lista-items-carrito');
    for(let i = 0; i < 21; i++){
        let card = crearCard(listaProductos[i], i);
        contenedor.appendChild(card);

        if(i % 5 === 0){
            const item = document.createElement('div');
            item.classList.add('item-carrito');
            item.innerHTML = `
                <img src="${listaProductos[i].ImageURL}" alt="" class="imagen-carrito">
                <p class="nombre-item-carrito">${listaProductos[i].ProductTitle}</p>
                <p class="precio-item-carrito">${parseInt(Math.random() * 80000 + 20000)}</p>
            `;
            listaCarrito.appendChild(item);
        }
    }
}

const iconoBolsa = document.querySelector('.icono-bolsa');
iconoBolsa.addEventListener('click', () => {
    const carrito = document.querySelector(".carrito");
    carrito.classList.toggle("mostrar-carrito");
    iconoBolsa.classList.toggle('rotate');
    if(iconoBolsa.classList.contains('rotate')){
        iconoBolsa.classList.remove("bi-bag");
        iconoBolsa.classList.add("bi-bag-x");
    }else{
        iconoBolsa.classList.remove("bi-bag-x");
        iconoBolsa.classList.add("bi-bag");
    }
});

const iconoMenu = document.querySelector('.list-icon');
iconoMenu.addEventListener('click', () => {
    const body = document.querySelector('body');
    const subMenu = document.querySelector('.contenedor-menu-mobile');
    subMenu.classList.toggle('mostrar-contenedor-menu');
    iconoMenu.classList.toggle('girar');
    body.classList.toggle('no-scroll');
    if(iconoMenu.classList.contains('girar')){
        iconoMenu.classList.remove("bi-list");
        iconoMenu.classList.add("bi-x-lg");

    }else{
        iconoMenu.classList.remove("bi-x-lg");
        iconoMenu.classList.add("bi-list");
    }
});