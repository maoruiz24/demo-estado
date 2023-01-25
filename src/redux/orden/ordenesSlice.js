import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

export const ordenesSlice = createSlice({
  name: "ordenes",
  initialState: initialState,

  reducers: {
    eliminarOrden: (state) => {
      return (state = initialState);
    },
    actualizarOrden: (state, action) => {
      const { ordenNo, fechaEntrega, fechaCompra, taxValor, precioTotal } =
        action.payload;
      return {
        ...state,
        ordenNo: ordenNo,
        fechaEntrega: fechaEntrega,
        fechaCompra: fechaCompra,
        taxValor: taxValor,
        precioTotal: precioTotal,
      };
    },
    adicionarOrden: (state, action) => {
      return state.push(action.payload);
    },
    eliminarProducto: (state) => {
      return (state.producto = initialState.producto);
    },
    actualizarProducto: (state, action) => {
      const {
        idProducto,
        nomProducto,
        precio,
        // caracteristicas?????
      } = action.payload.producto;
      return {
        ...state,
        idProducto: idProducto,
        nomProducto: nomProducto,
        precio: precio,
      };
    },
    adicionarProducto: (state, action) => {
      return state.push(action.payload.producto);
    },
    eliminarCliente: (state, action) => {
      return (state.cliente = initialState.cliente);
    },
    actualizarCliente: (state, action) => {
      const {
        idCliente,
        nombre,
        correo,
        telefono,
        direccion,
      } = action.payload.cliente;
      return {
        ...state,
        idCliente: idCliente,
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        direccion: direccion,
      };
    },
    adicionarCliente: (state, action) => {
      return state.push(action.payload.cliente);
    },
  },
});

export const selectOrden = (state) => state.ordenes.Orderno;

export const { eliminarOrden, actualizarOrden, adicionarOrden,
  eliminarProducto, actualizarProducto, adicionarProducto,
  eliminarCliente, actualizarCliente, adicionarCliente } = ordenesSlice.actions;

export default ordenesSlice.reducer;