import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eliminarOrden,
  actualizarOrden,
  adicionarOrden,
  eliminarProducto,
  actualizarProducto,
  adicionarProducto,
  eliminarCliente,
  actualizarCliente,
  adicionarCliente,
} from "../../redux/orden/ordenesSlice.js";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return ;
    case "decrement":
      return ;
  }
}


function Ordenes(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const count = useSelector(selectOrden);
      return (
        <>

        </>
      );
}
export default Ordenes;