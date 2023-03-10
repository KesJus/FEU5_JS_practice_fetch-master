import { getData } from './modules/fetch.js';

console.log('main.js file was loaded');

async function app() {
  // parissiusti duomenis

  const propertiesArr = await getData();

  console.log('propertiesArr ===', propertiesArr);

  propertiesArr.forEach((pObj) => {
    if (checkImageURL(pObj.image)) {
      console.log('prastas paveikslelis');
      return;
    }
    const img = document.createElement('img');
    img.src = pObj.image;
    document.body.append(img);
  });
}

app();

function checkImageURL(url) {
  let img = new Image();
  img.src = url;
  if (img.naturalWidth > 0) return true;
  else return false;
}
