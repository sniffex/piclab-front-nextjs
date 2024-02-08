import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const loadCartFromStorage = () => {
      try {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
          setCartProducts(JSON.parse(cartData));
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    };

    loadCartFromStorage();
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    const saveCartToStorage = () => {
      try {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    };

    saveCartToStorage();
  }, [cartProducts]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  // function removeProduct(productId) {
  //   setCartProducts((prev) => prev.filter((value) => value !== productId));
  // }
  function removeProduct(productId) {
    setCartProducts((prev) => {
      // Count occurrences of the product in the cart
      const count = prev.filter((value) => value === productId).length;
      // If the count is greater than 1, remove one occurrence of the product
      if (count > 1) {
        const index = prev.findIndex((value) => value === productId);
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      } else {
        // If the count is 1 or 0, remove all occurrences of the product
        return prev.filter((value) => value !== productId);
      }
    });
  }
  
  
  

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
