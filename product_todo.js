import products from "./list_product.js";
import productItem from "./productItem.js";
import filterProduct from "./search.js";

const products_area = document.querySelector(".products_area");
const inp_search = document.querySelector("#inp");
const filterRadios = document.getElementsByName("filter-radio");
let tabFiltered = [];

function getValueRadio() {
  let a = "";
  filterRadios.forEach((radio) => {
    if (radio.checked == true) a = radio.value;
  });
  return a;
}

// Filtrage des produits lors de l'evenement input
inp_search.addEventListener("input", (e) => {
  products_area.innerHTML = "";
  tabFiltered = filterProduct({
    name: e.target.value,
    radio: getValueRadio(),
  });
  tabFiltered.forEach((p) => {
    products_area.innerHTML += productItem(p);
  });
});

filterRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    products_area.innerHTML = "";
    tabFiltered = filterProduct({
      name: inp_search.value,
      radio: getValueRadio(),
    });
    tabFiltered.forEach((p) => {
      products_area.innerHTML += productItem(p);
    });
  });
});

// Affichage des produits apres le chargement du Javascript
products.forEach((p) => {
  products_area.innerHTML += productItem(p);
});
