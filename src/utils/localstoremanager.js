import MenuItem from "../components/MenuItem";

class LocalStorageManager {
  getLocalStorage() {
    const cartString = localStorage.getItem("cart");

    if (cartString) {
      return JSON.parse(cartString);
    }

    return [];
  }

  clearLocalStorage() {
    localStorage.setItem("cart", []);
  }

  decreaseFromLocalStorage(obj) {
    let cart = this.getLocalStorage();

    const foundItem = cart.find((i) => i.id == obj.id);

    if (foundItem && foundItem.quantity >= 2) {
      cart = cart.map((i) => {
        if (i.id === obj.id) {
          i.quantity--;
        }

        return i;
      });

      const newArray = JSON.stringify(cart);

      localStorage.setItem("cart", newArray);
    } else if (foundItem && foundItem.quantity === 1) {
      console.log("ONLY 1 ITEM LEFT");
      this.removeFromLocalStorage(obj);
    }
  }

  removeFromLocalStorage(obj) {
    let cart = this.getLocalStorage();
    const foundItem = cart.find((i) => i.id == obj.id);

    if (foundItem) {
      const indexOfItem = cart.indexOf(foundItem);

      cart.splice(indexOfItem, 1);
    }

    const newArray = JSON.stringify(cart);

    localStorage.setItem("cart", newArray);
  }

  setLocalStorage(obj) {
    // 1. Hämta den befintliga carten
    // 2. Konvertera carten till en array
    let cart = this.getLocalStorage();

    if (cart.find((i) => i.id === obj.id)) {
      // Öka quantity med 1 för objektet i local storage

      cart = cart.map((i) => {
        if (i.id === obj.id) {
          i.quantity++;
        }

        return i;
      });
    } else {
      // 3. Lägg till den nya varan (obj) till array:en
      cart.push({ ...obj, quantity: 1 });
    }

    // 4. Konvertera array:en tillbaka till en JSON-sträng
    const newArray = JSON.stringify(cart);

    // 5. Lägg till (localStorage.setItem) den nya JSON-strängen till local storage

    localStorage.setItem("cart", newArray);
    console.log(cart);
  }
}

export default LocalStorageManager;
