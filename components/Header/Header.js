class Header {
  //onClick e operatie asyncrona de aceea cind chemam aceasta metoda trebuie sa scriem inainte exemplarul clasului
  handleOpenShoppingPage() {
    shoppingPage.render();
    if (ROOT_SHOPPING.innerHTML !== "") {
    //   document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.querySelector(".shopping-container").style.overflow = "scroll";
    } 
  }

  render(count) {
    //count este marimea masivului din localStorage
    const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">
            <img src="img/shopping-bag.png" />${count}
            </div>
        </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const productsStore = localStorageUtils.getProducts();

headerPage.render(productsStore.length);
