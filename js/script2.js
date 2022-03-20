// let nama = document.querySelector('.flex-item h6')[2];
// let cart = document.querySelector('cart');
let nama = document.querySelectorAll('.nama-barang');
let gambar = document.querySelectorAll('.imgBrg');
let buyButton = document.querySelectorAll('.btn');

// console.log(nama);

// let namaBrg = {};
// let imgBrg = {};
let myObj = {};
let myAry = [];

function getItem(data) {
  for (let i = 0; i < nama.length; i++) {
    if (data === i) {
      //   namaBrg.push(nama[i].innerHTML);
      //   myObj.item = nama[i].innerHTML;
      myObj.item = nama[i].textContent;
    }
  }

  for (let j = 0; j < gambar.length; j++) {
    if (data === j) {
      //   imgBrg.push(gambar[j].src);
      myObj.image = gambar[j].src;
    }
  }

  myAry.push(myObj);
  console.log(myAry);

  //   return sendItem(myObj);
}

// function sendItem(data) {
//   console.log(myAry);
// }

//   console.log(namaBrg);
//   console.log(imgBrg);

// Memasukan array ke dalam cookies
// var myAry = [
//   { item: 'nama barang 1', gambar: 'gambar1.jpg' },
//   { item: 'nama barang 2', gambar: 'gambar2.jpg' },
// ];
// const d = new Date();
// d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
// let expires = 'expires=' + d.toUTCString();
// document.cookie = 'chart' + '=' + JSON.stringify(myAry) + ';' + expires + ';path=/';
