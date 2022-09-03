const inputText = document.querySelector('#text-input');
const divMeme = document.querySelector('#meme-image-container');
const textMeme = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');

inputText.addEventListener('keyup', (event) => {
  if (event.value !== '') textMeme.innerText = inputText.value;
});

inputImg.addEventListener('change', () => {
  const [file] = inputImg.files;
  if (file) {
    memeImg.src = URL.createObjectURL(file);
  }
});
