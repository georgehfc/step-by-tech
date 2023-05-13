// document.body.onmousemove = moveCursor;

// var curTxt = document.createElement('div');

// curTxt.id = "cursorText";
// curTxt.innerHTML = "Hidrate-se! 💦";

// document.body.appendChild(curTxt);

// var curTxtLen = [curTxt.offsetWidth,curTxt.offsetHeight];

// function moveCursor(e){
//     if(!e) {
//       e = window.event;
//     }

//     curTxt.style.left = e.clientX - curTxtLen[0] + 'px';
//     curTxt.style.top = e.clientY - curTxtLen[1] + 'px';
// }

console.log('Hi! Parsing CSV:');
async function getData() {
  const resposta = await fetch('./Bebedouros.csv');
  const bebedouros = await resposta.text();

  const tabela = bebedouros.split('\n').slice(1);

  tabela.forEach(linha => {
    const coluna = linha.split(',');
    const nome = coluna[0];
    const end = coluna[1];
    const loc = coluna[2];
    const src = coluna[3];

    var div = document.createElement("div.item");
    var image = document.createElement("img");
    image.src = `${src}`;
    div.appendChild(image);
    // div.innerHTML = "Image added";

    console.log(nome);

    const csv = document.getElementById("csv_content");
    csv.append(div);

  })
}
getData();
