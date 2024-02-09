const card = document.querySelector('.card');
const url = "https://api.imgflip.com/get_memes";

async function getMemes() {
    const response = await fetch(url);
    const memes = await response.json();
    const img = document.createElement('img');
    console.log(memes.data.memes[0]);
    img.setAttribute('src',memes.data.memes[0].url);
    img.setAttribute('height','400px');
    img.setAttribute('width','400px');
    card.appendChild(img);
  }

getMemes();  
  