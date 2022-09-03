const inputText = document.querySelector('#text-input');
const divMeme = document.querySelector('#meme-image-container');
const textMeme = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const defaultMeme = document.querySelector('#default-memes');

inputText.addEventListener('keyup', (event) => {
  if (event.value !== '') textMeme.innerText = inputText.value;
});

inputImg.addEventListener('change', () => {
  const [file] = inputImg.files;
  if (file) {
    memeImg.src = URL.createObjectURL(file);
  }
});

fireBtn.addEventListener('click', () => {
  divMeme.style.border = '3px dashed rgb(255, 0, 0)';
});

waterBtn.addEventListener('click', () => {
  divMeme.style.border = '5px double rgb(0, 0, 255)';
});

earthBtn.addEventListener('click', () => {
  divMeme.style.border = '6px groove rgb(0, 128, 0)';
});

defaultMeme.addEventListener('click', (origin) => {
  memeImg.src = origin.target.src;
});
