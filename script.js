const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn = document.querySelector('#btn');
const pw1 = document.querySelector('#pw1');
const pw2 = document.querySelector('#pw2');

btn.addEventListener('click', () => {
  generatePassword()
});

function generatePassword() {
  pw1.textContent = 'click'
  pw2.textContent = 'click'
}
