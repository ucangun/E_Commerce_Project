const products = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Zeige deinen Stil mit unseren Grafik-T-Shirts.",
    category: "Clothing",
    price: 29.99,
    image_url: "./img/img-1-min.jpg",
  },
  {
    id: 2,
    name: "Kapuzenshirt",
    description:
      "Erlebe Streetwear mit unseren bequemen und stylischen Kapuzenshirts.",
    category: "Clothing",
    price: 49.99,
    image_url: "./img/img-2-min.jpg",
  },
  {
    id: 3,
    name: "Sneaker",
    description: "Fühle den Rhythmus der Stadt mit unseren Sneakern.",
    category: "Footwear",
    price: 89.99,
    image_url: "./img/img-3-min.jpg",
  },
  {
    id: 4,
    name: "Mütze",
    description: "Vervollständige dein Outfit: Streetstyle-Mützen.",
    category: "Accessories",
    price: 19.99,
    image_url: "./img/img-4-min.jpg",
  },
  {
    id: 5,
    name: "Jacke",
    description: "Mit stylischen und funktionalen Jacken jede Saison rocken.",
    category: "Clothing",
    price: 99.99,
    image_url: "./img/img-5-min.jpg",
  },
  {
    id: 6,
    name: "Jogginghose",
    description: "Komfort und Stil vereint in unseren Jogginghosen.",
    category: "Clothing",
    price: 39.99,
    image_url: "./img/img-6-min.jpg",
  },
  {
    id: 7,
    name: "Tasche",
    description: "Stylische Taschen für deine täglichen Bedürfnisse.",
    category: "Accessories",
    price: 59.99,
    image_url: "./img/img-7-min.jpg",
  },
  {
    id: 8,
    name: "Sonnenbrille",
    description: "Setze ein Statement mit unseren ikonischen Sonnenbrillen.",
    category: "Accessories",
    price: 24.99,
    image_url: "./img/img-8-min.jpg",
  },
  {
    id: 9,
    name: "Sweatshirt",
    description: "Weiche und bequeme Sweatshirts für den Streetlook.",
    category: "Clothing",
    price: 59.99,
    image_url: "./img/img-9-min.jpg",
  },
];

//! ADD CARDS TO HTML
const container = document.querySelector(".container");
const hpRow = document.querySelector(".hp-row");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card text-center col-sm-12 col-md-5 col-lg-3 p-0";

  card.innerHTML = `
    <img src="${product.image_url}" class="card-img-top" alt="${product.name}" />
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <button href="#" type="button" class="btn btn-primary btnAdd" id="${product.id}">Add to Cart</button>
    </div>
  `;

  hpRow.appendChild(card);
});

//! LOGIN FUNCTION
const login = document.querySelector(".loginLast");
const username = document.getElementById("inputUsername");
const pass = document.getElementById("inputPassword");

const loginButton = document.querySelector(".loginLast");
const loginFirstButton = document.querySelector(".loginFirst");
const loginHeader = document.querySelector(".login-header");
const welcome = document.querySelector(".welcome");
const cart = document.querySelector(".cart");
const offcanvasElement = document.getElementById("staticBackdrop");
const offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (username.value === "UMUT" && pass.value === "1907") {
    offcanvasInstance.hide();
    container.classList.remove("opacity-0");
    container.classList.add("opacity-100");
    loginFirstButton.classList.add("d-none");
    welcome.classList.remove("d-none");
    loginHeader.classList.add("d-none");
  } else {
    alert("Invalid username or password");
  }
});

//! ADD TO CART

const btnAdd = document.querySelector(".btnAdd");
const modalBody = document.querySelector(".modal-body");

container.addEventListener("click", (event) => {
  clickedButton = event.target;

  if (!clickedButton.classList.contains("btnAdd")) return;
  //else console.log(clickedButton);
  const buttonId = clickedButton.id;
  //console.log(buttonId);

  products.forEach((product) => {
    if (product.id === +buttonId) {
      const productBox = document.createElement("div");
      productBox.className = "product-box";
      productBox.innerHTML += `
      <div class="product-img">
       <img src="${product.image_url}" alt="${product.name}">
     </div>
     <div class="product-info">
      <p class="product-title">${product.name}</p>
      <p class="product-price">${product.price}</p>
      <div class="product-total">
       <div class="product-total-btn">
        <button class="product-btn">
        <i class="bi bi-dash minus"></i>
        <span class="product-quantity">1</span>
        <i class="bi bi-plus plus"></i>
        </button>
        <i class="bi bi-trash trash"></i>
        </div>
        </div>
      </div>
      <div class="product-total-price">
       <p> ${product.price}  </p>
      </div>

    `;
      modalBody.appendChild(productBox);
    }
  });
});

//! MINUS , PLUS , DELETE FUNCTION

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.textContent > 1)
      e.target.nextElementSibling.textContent--;
    calcTotalPrice(e.target);
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.textContent++;
    calcTotalPrice(e.target);
  } else if (e.target.classList.contains("trash")) {
    const productBox = e.target.closest(".product-box");
    productBox.remove();
  }
});

//! CALC TOTAL PRICE

const calcTotalPrice = (btn) => {
  const productBox = btn.closest(".product-box");
  const productPrice = parseFloat(
    productBox.querySelector(".product-price").textContent
  );
  const productQuantity = parseInt(
    productBox.querySelector(".product-quantity").textContent
  );
  let totalPrice = productBox.querySelector(".product-total-price p");

  totalPrice.textContent = (productPrice * productQuantity).toFixed(2);

  calcLastPrice();
};

//! CALC LAST PRICE

const lastPrice = document.querySelector(".last-price");

const calcLastPrice = () => {
  const modalBody = document.querySelector(".modal-body");
  console.log(modalBody);
  const totalPrices = modalBody.querySelectorAll(".product-total-price p");
  console.log(totalPrices);

  const lastPrices = [...totalPrices];
  let sumAll = lastPrices
    .reduce((sum, price) => sum + Number(price.textContent), 0)
    .toFixed(2);
  lastPrice.textContent = `Total Price : ${sumAll}`;
};
