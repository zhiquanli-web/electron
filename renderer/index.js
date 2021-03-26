const fs = require('fs');

window.onload = function () {
  const btn = this.document.querySelector('#btn');
  const main = this.document.querySelector('#main');
  btn.onclick = function () {
    fs.readFile('src/test/test.txt', (err, data) => {
      main.innerHTML = data
    })
  }
}