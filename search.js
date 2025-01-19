import products from "./list_product.js";

const filterProduct = (tag) => {
  console.log(tag);
  let tabProductsFilter = products.filter((p) => {
    return p.name.toUpperCase().includes(tag.name.toUpperCase());
  });
  console.log(tabProductsFilter);
  if (tag.radio === "under50")
    tabProductsFilter = tabProductsFilter.filter((p) => p.price < 50);
  else if (tag.radio === "over50")
    tabProductsFilter = tabProductsFilter.filter((p) => p.price >= 50);
  else if (tag.radio === "clothes")
    tabProductsFilter = tabProductsFilter.filter((p) => p.type === "clothes");
  else if (tag.radio === "electronics")
    tabProductsFilter = tabProductsFilter.filter(
      (p) => p.type === "electronics"
    );
  else if (tag.radio === "accessorys")
    tabProductsFilter = tabProductsFilter.filter(
      (p) => p.type === "accessorys"
    );
  else if (tag.radio !== "dontApply") return [];
  return tabProductsFilter;
};

export default filterProduct;
