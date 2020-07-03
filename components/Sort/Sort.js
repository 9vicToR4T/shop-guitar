//let a = [1, 5, 66, 7, 22];

// for (let i = 0; i < a.length; i++) {
//   for (let j = i; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       let res = a[i];
//       a[i] = a[j];
//       a[j] = res;
//     }
//     console.log(a);
//   }

// }
let cresc = document.querySelector('#cresc-btn');
console.log(cresc);


cresc.addEventListener('click', () =>{
    sortList('data-price');
})


document.querySelector('#desc-btn').onclick = function () {
  sortListDesc('data-price');
};

function sortList(sortType) {
  let items = document.querySelector('.products-container');
  console.log(items);

  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
        console.log(1);
        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function sortListDesc(sortType) {
  let items = document.querySelector('.products-container');
  console.log('items', items);

  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
        console.log(1);
        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
