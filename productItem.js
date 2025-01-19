const productItem = (p) => {
  return `<div class="relative flex flex-col px-4 pt-4 text-[20px] rounded-md
     border-4 bg-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-white">
      <h2 class="font-bold text-2xl">${p.name}</h2>
      <span>price : <span class="font-semibold">${p.price} $</span></span>
      <span>Quantité : <span class="font-semibold">${p.quantity}</span> piece(s)</span>
      <span>${p.type}</span>
      <div class="absolute w-28 right-4 ">
          <img src="img/${p.image}"/>
      </div>
      <div class="flex items-center gap-2">
          <button class="text-red-500">-</button>
          <input type="text" class="w-6 h-4 border"/>
          <button class="text-green-500">+</button>
          <button class="bg-blue-600 w-20 font-semibold m-3 rounded-md text-white">Ajouter</button>
      </div>
  </div>
  `;
};

export default productItem;
