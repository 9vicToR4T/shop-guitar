//in acest proiect totul este global si avem acces direct, inclusiv la produse.
//autorul a ales sa faca in forma de class

class Products {
  //in caz ca avem proprietati ce se vor modifica, trebuie sa le adaugam in constructor
  constructor(){
    this.classNameActive = 'products-element__btn_active';//modificatorul active
    this.labelAdd = "Add to MY BAG";//scrisul de pe btn
    this.labelRemove = 'Delete from MY BAG';//scrisul de pe btnul active
  }

  handleSetLocationStorage(element, id){
    //pentru a avea acces la aceasta metoda prin onClick, trebuie dintii sa chemam exemplrul clasei si apoi pe el
    
    const { pushProduct, products } = localStorageUtils.putProducts(id);//destructurizam ceea ce ne intoarce

    if(pushProduct){//daca e true inseamna ca am adaugat elementul
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    }else{
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);//aceasta vine din header, va reincarca de fiecare data corzina cind vom schimba ceva

  }


  render() {

    const productsStore = localStorageUtils.getProducts();//primim produsele din corzina

    let htmlCatalog = "";

    //avem acces la const Catalog datorita faptului ca totul este global
    CATALOG.forEach(({ id, name, price, img }) => {
      //am facut dintro data destructurizarea

      let activeClass = '';//fiecare elem ales trebuie sa i se adauge clasul active
      let activeText = '';//la fiecare elem ales trebuie sa i se schimbe textul de pe buton
      if(productsStore.indexOf(id) === -1){//daca nu avem asa elem adaugat, atunci pe buton va scrie ADD
        activeText = this.labelAdd;
       
      }else{//daca deja elem e adaugat atunci
        activeClass = " " + this.classNameActive;//adaugam clasul active
        activeText = this.labelRemove;//schimbam scrisul de pe buton
      }

      htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">${price}<img src="img/euro.png" class="myIcon" alt="euro"/></span>
                    <button class="products-element__btn${activeClass}" onClick = "productsPage.handleSetLocationStorage(this, '${id}')">
                      ${activeText}
                    </button>
                </li>
            
            `;
    });

    //li trebuie sa fie in ul
    const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
