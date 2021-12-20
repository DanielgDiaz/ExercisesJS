


const app = document.getElementById('app');
const btnRemove = document.getElementById('btn-remove');
const inputText = document.getElementById('input-text');

btnRemove.addEventListener('click', removeVowels)

function removeVowels(string){
    if (inputText != ''){
    let result = string.replace(/[aeiuo]/g,'')
    
    document.getElementById('result').innerHTML = result;
    }
  }
