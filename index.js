function render() {
  const productsStore = localStorageUtils.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render(); //chemam spinerul care se va roti pina se incarca produsele

let CATALOG = [];

fetch('server/catalog.json')
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    
    spinnerPage.handleClear(); //inainte de a se incarca pagina stergem spinerul din pagina
    render(); //renderul il facem dupa ce sa incarcat body in CATALOG, de altfel nu se vor vedea schimbarile
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
