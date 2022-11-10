const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn = document.querySelector('#btn');
const pw1 = document.querySelector('#pw1');
const pw2 = document.querySelector('#pw2');
const toolTip1 = document.querySelector('#tooltip1');
const toolTip2 = document.querySelector('#tooltip2');

//fill password fields and reset tooltips if needed
btn.addEventListener('click', () => {
  pw1.textContent = generatePassword();
  pw2.textContent = generatePassword();
  toolTip1.textContent = 'click to copy to clipboard';
  toolTip2.textContent = 'click to copy to clipboard';
});

function generatePassword() {
  let password = '';
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

//click passwords to copy text to clipboard
pw1.addEventListener('click', () => {
  navigator.clipboard.writeText(pw1.textContent)
  toolTip1.textContent = 'Copied!'
})

pw2.addEventListener('click', () => {
  navigator.clipboard.writeText(pw2.textContent)
  toolTip2.textContent = 'Copied!'
})


