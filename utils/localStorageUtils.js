class LocalStorageUtils {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    //primeste toate produsele
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      //daca avem ceva facem in masiv
      return JSON.parse(productsLocalStorage); //FACEM DIN STRINg in masiv
    }
    return []; //daca nu apui intoarce masiv gol
  }

  
  putProducts(id) {
    let products = this.getProducts(); //aici vom primi tot ce se afla in localStorage
    //avem nevoie sa verificam ca un elem sa nu se repete

    let pushProduct = false; //este un flag pentru a verifica daca sa adaugat elem in BAG sau nu

    const index = products.indexOf(id); //daca nu gaseste coincidente va intoarce -1

    if (index === -1) {
      //daca nu gaseste acest elem in masiv inseamna ca el e nou si de aceea trebuie sa il introducem
      products.push(id); //trimitem noul id pe care lam primit
      pushProduct = true;//inseamna ca elem a fost adaugat
    } else {
      products.splice(index, 1); //daca intilnim repetat un elem apui il stergem
    }

    localStorage.setItem(this.keyName, JSON.stringify(products)); //trimitem in localstorage. Primul argument UNDE vrem sa trimitem, al doilea e ceea ce vreM SA trimiteM
    //localStorage primeste doar string, de aia folosim JSON.STRINGIFY
  
//aceasta functie putProduct imi va intoarce pushProduct si masivul products
return { pushProduct, products }//daca key si value se repeta putem sa scrie dintro data

}
  


}

const localStorageUtils = new LocalStorageUtils();

