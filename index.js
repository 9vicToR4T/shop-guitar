function render() {
  const productsStore = localStorageUtils.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

render();
