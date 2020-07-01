function render() {
  const productsStore = localStorageUtils.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

fetch('server/catalog.json')
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    render(); //renderul il facem dupa ce sa incarcat body in CATALOG, de altfel nu se vor vedea schimbarile
  })
  .catch((error) => {
    console.log(error);
  });
