const productContent = document.querySelector(".products");
const asideDes = document.querySelector("aside");
const aside = document.querySelector(".aside__content");
const closed = document.querySelector(".closed");
const carShop = document.querySelector("#car__shop");

const Allsproducts = [
    {name: "Computer", price: 180, stock: 8, img: "/assets/imgs/12-2-computer-pc-download-png.png", id: 1},
    {name: "ComputerAdvance", price: 170, stock: 7, img: "/assets/imgs/computer-lab-.png", id: 2},
    {name: "ComputerAdvance2D", price: 160, stock: 6, img: "/assets/imgs/Desktop-Computer-PNG-Transparent.png", id: 3},
    {name: "Computer 35GB ram", price: 150, stock: 5, img: "/assets/imgs/Desktop-Computer.png", id: 4},
    {name: "Controller", price: 140, stock: 4, img: "/assets/imgs/Playstation-4-Controller-.png", id: 5},
    {name: "playStation", price: 130, stock: 8, img: "/assets/imgs/PlayStation-4.png", id: 6},
    {name: "console PS1", price: 120, stock: 7, img: "/assets/imgs/PlayStationConsole_bkg-transparent.png", id: 7},
    {name: "SmarthPhone", price: 110, stock: 6, img: "/assets/imgs/smarthPhone.jpg", id: 8},
    {name: "Phone", price: 110, stock: 5, img: "/assets/imgs/SmarthPhones.png", id: 9},
    {name: "Juego", price: 110, stock: 4, img: "/assets/imgs/technology.png", id: 10},
    {name: "PlayStation-4", price: 110, stock: 8, img: "/assets/imgs/PlayStation-4.png", id: 11}
]

addHTML()
let productsCard = document.querySelectorAll(".products-cards");
let count = document.querySelector(".count")
let countToNumber = Number(count.textContent);
countToNumber = 1;

carShop.addEventListener("click", () =>{
    asideDes.style.display = "block";
})

closed.addEventListener("click", () =>{
    asideDes.style.display = "none";
})


productsCard.forEach((productCard) =>{
    productCard.addEventListener("click", (e) =>{
        if(e.target.className == "btn"){
            count.innerHTML = countToNumber++;
            Allsproducts.forEach((product) => {
                const getId = e.target.getAttribute("id");
                if(Number(getId) === product.id){
                    aside.innerHTML += `<div class="products-aside">
                                                <img class="product-img" src="${product.img}">
                                                <div class="product-name">Product: ${product.name}</div>
                                                <div class="product-price">Price: ${product.price}$</div>
                                                <div class="product-amount">Amount: 1</div>
                                        </div>
                                    `
                }
            })
        }
    })
})

function addHTML() {
    Allsproducts.forEach((product) =>{
        productContent.innerHTML += `<div class="products-cards" id="${product.id}">
        <img src="${product.img}" alt=${product.name}>
        <p class="products-name">name: <span>${product.name}</span></p>
        <p class="products-price">price: <span>${product.price}$</span></p>
        <p class="stocks">stock: ${product.stock}</p>
        <p class="btn" id="${product.id}">ADD</p>
        </div>`
    })
}
