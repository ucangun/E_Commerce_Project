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
const row = document.querySelector(".row");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card text-center col-sm-12 col-md-5 col-lg-3 p-0";

  card.innerHTML = `
    <img src="${product.image_url}" class="card-img-top" alt="${product.name}" />
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <a href="#" class="btn btn-primary ">Add to Chart</a>
    </div>
  `;

  row.appendChild(card);
});

//! LOGIN FUNCTION
const login = document.querySelector(".loginLast");
const username = document.getElementById("inputUsername");
const pass = document.getElementById("inputPassword");
/*
login.addEventListener("click", (event) => {
  event.preventDefault();
  if (username.value === "UMUT" && pass.value == "1907") {
    container.classList.remove("opacity-0");
    container.classList.add("opacity-100");
  }
});
*/

const loginButton = document.querySelector(".loginLast");
const loginFirstButton = document.querySelector(".loginFirst");
const welcome = document.querySelector(".welcome");
const cart = document.querySelector(".cart");
const offcanvasElement = document.getElementById("staticBackdrop");
const offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("qq");
  if (username.value === "UMUT" && pass.value === "1907") {
    offcanvasInstance.hide();
    container.classList.remove("opacity-0");
    container.classList.add("opacity-100");
    loginFirstButton.classList.add("d-none");
    welcome.classList.remove("d-none");
  } else {
    alert("Invalid username or password");
  }
});
