// import { shopItemsList } from './elements.js';
/*
      <li class="shopItem">
      <li class="shopItem">
        <div class="shopItemTop">
          <a href="/single-product.html">
            <img src="img/1.jpg" alt="item image">
            <h2>€30,000</h2>
            <h3>Vilnius</h3>
            <p>Gražus namas prie upės, 5 kambariai</p>
          </a>
        </div>
      </li>
      </li>
*/

export function makeOneItem(shopItemObj) {
  // sukurti isorini li create element
  const liEl = document.createElement('li');
  liEl.className = 'shopItem';
  // suskaiciuoti kaina
  // is kainos atimam discount procenta
  const priceAfterDiscount =
    shopItemObj.price - shopItemObj.price * (shopItemObj.discountPercentage / 100);
  // vidu sukurti su innerHtml
  liEl.innerHTML = `

  <li class="shopItem">
  <div class="shopItemTop">
    <a href="/single-product.html">
      <img src="img/1.jpg" alt="item image">
      <h2>€30,000</h2>
      <h3>Vilnius</h3>
      <p>Gražus namas prie upės, 5 kambariai</p>
    </a>
  </div>
</li>

  
    <div class="shopItemTop">
      <a href="/single-product.html?itemId=${shopItemObj.id}">
        <img src="${shopItemObj.thumbnail}" alt="${shopItemObj.title}">
        <span>sale</span>
      </a>
    </div>
    <div class="shopItemInfo">
      <h3 class="title">${shopItemObj.title}</h3>
      <p class="category">${shopItemObj.category}</p>
      <p class="price onSale"><span class="salePrice">$${shopItemObj.price.toFixed(
        2
      )}</span>$${priceAfterDiscount.toFixed(2)}</p>
    </div>
  `;
  return liEl;
}

export function makeOneSingleItem(shopItemObj) {
  console.log('generating item');
  const divEl = document.createElement('div');
  divEl.className = 'shopItem singleProduct';
  const priceAfterDiscount =
    shopItemObj.price - shopItemObj.price * (shopItemObj.discountPercentage / 100);
  divEl.innerHTML = `
  <div class="shopItemTop">
    <a href="/single-product.html">
      <img src="${shopItemObj.thumbnail}" alt="${shopItemObj.title}">
      <span>sale</span>
    </a>
  </div>
  <div class="shopItemInfo">
    <h3 class="title ">${shopItemObj.title}</h3>
    <p class="text">${shopItemObj.description}
    </p>
    <p class="category">${shopItemObj.category}</p>
    <p class="price onSale"><span class="salePrice">$${shopItemObj.price.toFixed(
      2
    )}</span>$${priceAfterDiscount.toFixed(2)}</p>
    <button id="buyNow">Buy now</button>
    <button id='addToCart'>Add to cart</button>
    <a href="/update-product.html">Update Item</a>
  </div>
  `;
  const buyNowBtn = divEl.querySelector('#buyNow');
  buyNowBtn.addEventListener('click', makeBuyNow);
  console.log('sugeneruota, grazinu (shopItemObj.title .id .price), divEl===',divEl);
  // debugger
  return divEl;
}

export function render(arr) {
  if (shopItemsList) {
    shopItemsList.innerHTML = '';
    arr.map(makeOneItem).forEach((liEl) => shopItemsList.append(liEl));
  }
}

function makeBuyNow() {
  console.log('makeBuyNow');
}
