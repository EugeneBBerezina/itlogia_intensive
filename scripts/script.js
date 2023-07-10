document.getElementById("button_text-square-action").onclick = function () {
    document.getElementById("menu__contant").scrollIntoView({ behavior: "smooth" });
}

let links = document.querySelectorAll(".menuitem > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () { document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" }); }
}

let linksOrder = document.querySelectorAll(".menu__card_button > a");
for (let i = 0; i < linksOrder.length; i++) {
    linksOrder[i].onclick = function () { document.getElementById("order").scrollIntoView({ behavior: "smooth" }); }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами.");
    }
}


let prices = document.getElementsByClassName("menu__card_price");

document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 84;
    }
    else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }

    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    }
    else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;


    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;

    }

}

