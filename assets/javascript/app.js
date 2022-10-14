let cards = document.querySelectorAll(".products-cards");
const products = document.querySelector(".products__article");
const asideDes = document.querySelector("aside");
const aside = document.querySelector(".aside__content");
const closed = document.querySelector(".closed");
const carShop = document.querySelector("#car__shop");
const btns = document.querySelectorAll(".btn")

getData();

let counter = 1;
let counterArray = 1;
carShop.addEventListener("click", () =>{
    asideDes.style.display = "block";
})

closed.addEventListener("click", () =>{
    asideDes.style.display = "none";
})

function getData() {
let allProducts = [];
const arrayCards = [...cards];
arrayCards.map((arrayCard) =>{
    arrayCard.addEventListener("click", (e) =>{
        if(e.target.classList.contains("btn")) {
            const getImg = arrayCard.children[0].getAttribute("src");
            const name = arrayCard.children[1].children[0].textContent;
            const price = arrayCard.children[2].children[0].textContent;
            const getId = arrayCard.getAttribute("id");
            allProducts+= JSON.stringify({name: name, price: price, img:getImg, id: getId});
        }
        localStorage.setItem("products", allProducts);  
    });
    let getDatas = localStorage.getItem("products");
    console.log(getDatas);
});

}
