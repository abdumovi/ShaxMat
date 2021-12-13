let border = document.querySelector('.bordr');
let btn = document.querySelectorAll('.figur');
let body = document.querySelector('body');
let span = document.querySelector('.span');
let idf = true;

let count = 0;
let y = 1;
let x = 0;

for (let i = 0; i < 36; i++) {
  if (idf) {
    count += 1;
    x += 1;
    create(x, y, "co1");
    idf = false;
    if (count % 8 == 0) {
      idf = true;
      x = 0;
      y += 1;
    }
  }
  if (!idf) {
    count += 1;
    x += 1;
    create(x, y, "co2");
    idf = true;
    if (count % 8 == 0) {
      idf = false;
      x = 0;
      y += 1;
    }
  }
}
function create(x, y, color) {
  let clon = document.createElement('div');
  clon.className = `div`;
  clon.id = `${y}${x}`;
  clon.classList.add(color);
  border.appendChild(clon);
}

let figurItem = 0;
btn.forEach(item => {
  item.addEventListener('click', e => {
    for (let i of btn) {
      i.classList.remove('active');
    }
    e.target.classList.add('active');
    let figur = e.target.value;
    figurItem = figur;
  });
});

let div = document.querySelectorAll('.div');
div.forEach(item => {
  item.addEventListener('click', e => {
    removeColor();
    count = 0;
    x = 0;
    y = 1;
    let id = e.target.id;
    if (figurItem == 3) {
      fil(id);
      img(id,3);
    }
    else if (figurItem == 4) {
      tor(id);
      img(id,4);
    }
    else if (figurItem == 1) {
      ot(id);
      img(id,1);
    }
    else if (figurItem == 2) {
      tor(id);
      fil(id);
      img(id,2);
    }
  });
});
function ot(id) {
  let idid = + id;
  let ot = [];
  let tepaOng = idid - 20 + 1;
  ot.push(tepaOng);
  let tepaOngPas = tepaOng + 10 + 1;
  ot.push(tepaOngPas);
  let tepaChap = tepaOng - 2;
  ot.push(tepaChap);
  let tepaChapPas = tepaChap + 10 - 1;
  ot.push(tepaChapPas);
  let pasOng = idid + 20 + 1;
  ot.push(pasOng);
  let pasOngTepa = pasOng - 10 + 1;
  ot.push(pasOngTepa);
  let pasChap = pasOng - 2;
  ot.push(pasChap);
  let pasCHapTepa = pasChap - 10 - 1;
  ot.push(pasCHapTepa);
  ot.push(id);
  colorid(ot);
}
function tor(id) {
  let torTepa = + id;
  let torPas = + id;
  let torOng = + id;
  let torCHap = + id;
  let torMin = id[0];
  let torMax = torMin + 8;
  torMin = torMin + 1;
  let tor = [];
  for (let i = 0; i < 8; i++) {
    torTepa = torTepa - 10;
    if (torTepa > 10) {
      tor.push(torTepa);
    }
    torPas = torPas + 10;
    if (torPas <= 88) {
      tor.push(torPas);
    }
    torOng = torOng + 1;
    if (torOng <= +torMax) {
      tor.push(torOng);
    }
    torCHap = torCHap - 1;
    if (torCHap >= +torMin) {
      tor.push(torCHap);
    }
  }
  tor.push(id);
  colorid(tor);

}
function fil(id) {
  let filOng = + id;
  let filOngpas = + id;
  let filChap = + id;
  let filChappas = + id;
  let fill = [];
  for (let i = 0; i < 8; i++) {
    filOng = filOng - 10 + 1;
    if (filOng > 11) {
      if (id == 78) {
        fill.push(78);
        break;
      }
      if (id == 87) {
        fill.push(87, 78);
        break;
      }
      if (id == 88) {
        fill.push(88);
        break;
      }
      if (id >= 58) {
        if (filOng > 58) {
          fill.push(filOng);
        }
      }
      if (id >= 48) {
        if (filOng != 12 && filOng != 22 && filOng != 31 &&
          filOng != 13 && filOng != 21 && filOng != 41 &&
          filOng != 32 && filOng != 23 && filOng != 14) {
          fill.push(filOng);
        }
      }
      else {
        fill.push(filOng);
      }
    }
  }
  for (let i = 0; i < 8; i++) {
    filOngpas = filOngpas + 10 + 1;
    if (filOngpas <= 88) {
      if (id == 18) {
        break;
      }
      if (id == 17) {
        fill.push(17, 28);
        break;
      }
      if (id == 28) {
        fill.push(28);
        break;
      }
      if (id == 16) {
        fill.push(16, 27, 38);
        break;
      }
      if (id == 27) {
        fill.push(27, 38);
        break;
      }
      if (id == 37) {
        fill.push(37, 48);
        break;
      }
      if (id == 38) {
        fill.push(38);
        break;
      }
      if (id == 48) {
        break;
      }
      else if (id >= 15 && id < 36) {
        if (filOngpas != 81) { fill.push(filOngpas); }
      }
      else { fill.push(filOngpas); }
    }
  }
  for (let i = 0; i < 8; i++) {
    filChap = filChap - 10 - 1;
    if (id == 51 || id == 62 || id == 73 || id == 84) {
      if (filChap != 18) {
        fill.push(filChap);
      }
    }
    else if (id == 61 || id == 72 || id == 83) {
      if (filChap != 17 && filChap != 28) {
        fill.push(filChap);
      }
    }
    else if (id == 71 || id == 82) {
      if (filChap != 16 && filChap != 27 && filChap != 38) {
        fill.push(filChap);
      }
    }
    else if (id == 81) {
      if (filChap != 15 && filChap != 26 && filChap != 37 && filChap != 48) {
        fill.push(filChap);
      }
    }
    else {
      fill.push(filChap);
    }
  }
  for (let i = 0; i < 8; i++) {
    filChappas = filChappas + 10 - 1;
    if (filChappas < 88) {
      if (id == 15 || id == 24 || id == 33 || id == 42 || id == 51) {
        if (filChappas != 78 && filChappas != 87) {
          fill.push(filChappas);
        }
      }
      else if (id == 13 || id == 22 || id == 31) {
        if (filChappas != 58 && filChappas != 67 && filChappas != 76 && filChappas != 85) {
          fill.push(filChappas);
        }
      }
      else if (id == 14 || id == 23 || id == 32 || id == 41) {
        if (filChappas != 68 && filChappas != 77 && filChappas != 86) {
          fill.push(filChappas);
        }
      }
      else if (id == 21 || id == 12) {
        if (filChappas != 75 && filChappas != 66 && filChappas != 57 && filChappas != 48 && filChappas != 84) {
          fill.push(filChappas);
        }
      }
      else if (id == 11) { console.log('s'); }
      else {
        fill.push(filChappas);
      }
    }
  }
  fill.push(id);
  colorid(fill);
}
function colorid(item) {
  for (let i of item) {
    for (let j of div) {
      if (i == j.id) {
        j.classList.add('red');
      }
    }
  }
}
function removeColor() {
  div.forEach(item => {
    item.classList.remove('red');
  });
}
function img(id,count){
  for(let i of div){
    if(i.id == id){
      for(let j of div){
        j.innerHTML = "";
      }
      if(count == 1){
        i.innerHTML = '<img class="imgs" src="./img/fi1.svg" alt="img">';
      }
      else if(count == 2){
        i.innerHTML = '<img class="imgs" src="./img/fi4.svg" alt="img">';
      }
      else if(count == 3){
        i.innerHTML = '<img class="imgs" src="./img/fi3.svg" alt="img">';
      }
      else if(count == 4){
        i.innerHTML = '<img class="imgs" src="./img/fi2.svg" alt="img">';
      }
    }
  }
}