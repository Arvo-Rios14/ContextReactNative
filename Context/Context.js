import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);

  const [catalogo, setCatalogo] = useState([
    {
      codigo: 1,
      titulo: "Programación",
      precio: 100.5,
      idioma: "ESP",
      desactivado: false,
    },
    {
      codigo: 2,
      titulo: "Aprende Python",
      precio: 80.0,
      idioma: "ESP",
      desactivado: false,
    },
    {
      codigo: 3,
      titulo: "Precálculo",
      precio: 90.5,
      idioma: "ESP",
      desactivado: false,
    },
    {
      codigo: 4,
      titulo: "Ingenieria De Software",
      precio: 60.5,
      idioma: "ESP",
      desactivado: false,
    },
    {
      codigo: 5,
      titulo: "Ingenieria De Software 2",
      precio: 200.0,
      idioma: "ESP",
      desactivado: false,
    },
  ]);

  //ADD AND REMOVE FROM WISHLIST
  const changeStatus = (libro) => {
    var index = catalogo.indexOf(libro);
    var wishIndex = wishList.indexOf(libro);
    libro.desactivado = !libro.desactivado;
    catalogo.splice(index, 1, libro);
    setCatalogo([...catalogo]);
    if (libro.desactivado == false) {
      wishList.splice(wishIndex, 1);
      setWishList([...wishList]);
    } else {
      wishList.push(libro);
      setWishList([...wishList]);
    }
  };

  const addToCart = (libro) => {
    var result = cart.find((item) => item.codigo == libro.codigo);
    if (result != undefined) {
      var index = cart.indexOf(result);
      result.cantidad = result.cantidad + 1;
      cart.splice(index, 1, result);
    } else {
      libro.cantidad = 1;
      cart.push(libro);
    }
    setCart([...cart]);
  };

  const deleteItemFromCart = (item) => {
    if (item.cantidad == 1) {
      var index = cart.indexOf(item);
      cart.splice(index, 1);
    } else {
      var index = cart.indexOf(item);
      item.cantidad = item.cantidad - 1;
      cart.splice(index, 1, item);
    }
    setCart([...cart]);
  };

  const deleteCart = (item) => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        catalogo,
        wishList,
        cart,
        changeStatus,
        addToCart,
        deleteItemFromCart,
        deleteCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
