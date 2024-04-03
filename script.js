const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const copyCode = document.querySelector('.copyCode');
const myHexaCode = () => {
  let myHexVal = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode = hexCode + myHexVal[Math.floor(Math.random() * 16)];
  }
  return hexCode;
};
let rgb1 = 'rgb(92, 145, 229)';
let rgb2 = 'rgb(152, 63, 198)';
function btn1click() {
  rgb1 = myHexaCode();
  //   console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;

  btn1.innerText = `${rgb1}`;
}
function btn2click() {
  rgb2 = myHexaCode();
  //   console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;

  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;

  btn2.innerText = `${rgb2}`;
}
btn1.addEventListener('click', btn1click);
btn2.addEventListener('click', btn2click);

// COPY TO CLIPBOARD
localStorage.setItem('book', 'jsBook');
