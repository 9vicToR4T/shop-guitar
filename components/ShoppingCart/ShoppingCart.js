class Shopping {
    handleClear(){
         ROOT_SHOPPING.innerHTML = "";
         if ( ROOT_SHOPPING.innerHTML = "") {
             document.getElementsByTagName("body")[0].style.overflow = "visible";
           }
    }



  render() {
    const productsStore = localStorageUtils.getProducts(); //primim produsele din corzina

    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                    <div class="shopping-element-wrapp">
                        <span class="shopping-element__name"><img src="img/sales.svg" alt="sale" class="saleIcon" />  ${name}</span>
                        <span class="shopping-element__price">${price}<img src="img/euro.png" class="myIcon" alt="euro"/></span>
                    </div>
                  `;
        sumCatalog += +price;
      }
    });

    const html = `
        <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
          <div class="shopping-rows-wrap">
            ${htmlCatalog}
            <div class="shopping-element-wrapp">
            <span class="shopping-element__name shopping-element__position"><img src="img/calculator.svg" alt="sale" class="iconCalculator" />Total:</span>
            <span class="shopping-element__price">${sumCatalog.toLocaleString()}<img src="img/euro.png" class="myIcon" alt="euro"/></span>
             </div>
          </div>


        </div>
        
        `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
